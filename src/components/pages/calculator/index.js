import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Typography,
  Select,
  Modal,
  notification,
  Tooltip,
} from "antd";
import "./calculator.css";
import moment from "moment";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Investment } from "./Investment";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategory } from "../../../redux/calculator/CalculatorAction";
import UserInformation from "./UserInformation";
// import { isEmpty } from "lodash-es";

const Calculator = () => {
  const location = useLocation();

  // const [selCategory, setSelCategory] = useState();
  const [info, setInfo] = useState("");
  const [age, setAge] = useState(0);
  console.log("agww", age);
  const [term, setTerm] = useState("");
  const [sum, setSum] = useState("");
  const [investment, setInvestment] = useState("");
  const [childAge, setChildAge] = useState();
  const [proposerAge, setProposerAge] = useState();
  const [husbandAge, setHusbandAge] = useState();
  const [wifeAge, setWifeAge] = useState();
  const [minAge, setMinAge] = useState();
  const [maxAge, setMaxAge] = useState();
  // const [msg, setMsg] = useState();
  const [err, setErr] = useState();
  const [warnText, setWarnText] = useState();
  // const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const initialValues = { Name: "", phoneNo: "", email: "" };
  const [userFormValues, setUserFormValues] = useState(initialValues);

  const [form] = Form.useForm();
  const { Option } = Select;
  const { Title } = Typography;

  const dispatch = useDispatch();
  const [dropCategory, setdropCategory] = useState([]);

  const products = useSelector((state) => state.allProducts.products);
  useEffect(() => {
    if (location.state) {
      // setSelCategory(location.state.selCategory);
      setInfo(location.state.selCategory);
    }
  }, [location]);

  const tooltipStyle = { marginLeft: 5, color: "#888", fontSize: "1em" };
  // useEffect(() => {
  //   setInfo(localStorage.getItem("category"));
  // }, []);
  console.log("dd", localStorage.getItem("category"));
  useEffect(() => {
    if (products?.data) {
      setdropCategory(products?.data?.catagories);
    }
  }, [products]);

  // console.log("###", term, sum, age);
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const validityCheck = (age, term, sum) => {
    if (age >= 0 && term && sum) {
      showModal();
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        html: "Complete your form details",
        timerProgressBar: true,
        padding: "0 1em 1em",
        timer: 3000,
        width: 300,
      });
    }
  };
  useEffect(() => {
    dispatch(fetchAllCategory()); //action import garera useeffet
  }, []);

  function onChange(date) {
    const userDOB = moment(date, "YYYY/M/D");
    console.log("moment date", date);
    const calAge = moment().diff(userDOB, "years");
    console.log("agee", calAge);
    const desc = () => {
      switch (info) {
        case "endowment":
          return `${calAge}  is not compactible age. Age from ${minAge} to  ${maxAge} is only allowed !`;

        case "money-back":
          return `${calAge} is not compactible age. Age from ${minAge} to  ${maxAge} is only allowed !`;

        case "children":
          return `${calAge} is not compactible age. Age from 0 to 17 is only allowed !`;

        case "whole-life":
          return `${calAge} is not compactible age. Age from ${minAge} to  ${maxAge} is only allowed !`;

        case "couple":
          return `${calAge} is not acceptable Couple`;

        case "retirement-pension":
          return `${calAge} is not compactible age. Age from ${minAge} to  ${maxAge} is only allowed !`;

        default:
          break;
      }
    };
    function AgeLimitAlert() {
      Swal.fire({
        position: "top-end",
        // allowOutsideClick: false,
        icon: "warning",
        html: desc(),
        timerProgressBar: true,
        padding: "0 1em 1em",
        timer: 3500,
        width: 300,
      });
    }
    // const openNotificationWithIcon = (type) => {
    //   notification[type]({
    //     message: "",
    //     description: desc(),
    //   });
    // };
    if (info) {
      switch (info) {
        case "endowment":
          setAge(calAge);
          switch (true) {
            case calAge < `${minAge}` || calAge > `${maxAge}`:
              return AgeLimitAlert();

            default:
              break;
          }
          break;
        case "money-back":
          setAge(calAge);
          switch (true) {
            case calAge < `${minAge}` || calAge > `${maxAge}`:
              return AgeLimitAlert();
            default:
              setErr("");
              break;
          }
          break;
        case "children":
          setAge(calAge);
          switch (true) {
            case calAge < `${minAge}` || calAge > `${maxAge}`:
              return AgeLimitAlert();
            default:
              setErr("");
              break;
          }
          break;
        case "whole-life":
          setAge(calAge);
          switch (true) {
            case calAge < `${minAge}` || calAge > `${maxAge}`:
              return AgeLimitAlert();
            default:
              setErr("");
              break;
          }
          break;
        case "couple":
          setAge(calAge);
          switch (true) {
            case calAge < `${minAge}` || calAge > `${maxAge}`:
              return AgeLimitAlert();
            default:
              setErr("");
              break;
          }
          break;
        case "retirement-pension":
          setAge(calAge);
          switch (true) {
            case calAge < `${minAge}` || calAge > `${maxAge}`:
              return AgeLimitAlert();
            default:
              setErr("");
              break;
          }
          break;
        default:
          setAge(0);
          break;
      }
    } else {
      setWarnText("");
    }
  }

  // function onAgeChange(date) {
  //   const userDOB = moment(date, "YYYY/M/D");
  //   const calAge = moment().diff(userDOB, "years");
  //   if (info) {
  //     setAge(calAge);
  //   } else {
  //     setWarnText("Please select Category to calculate age");
  //   }
  // }

  function onChildAgeChange(date) {
    const userDOB = moment(date, "YYYY/M/D");
    const calAge = moment().diff(userDOB, "years");
    const openNotificationWithIcon = (type) => {
      // console.log("type", type);
      notification[type]({
        message: "",
        description: `${calAge} is not compactible age. Age from 0 to 17 is only allowed !`,
      });
    };
    if (info) {
      setChildAge(calAge);
      if (calAge > 17) {
        openNotificationWithIcon("warning");
      }
    } else {
      setWarnText("Please select Category to calculate age");
    }
  }
  function onProposerAgeChange(date) {
    const userDOB = moment(date, "YYYY/M/D");
    const calAge = moment().diff(userDOB, "years");

    const openNotificationWithIcon = (type) => {
      // console.log("type", type);
      notification[type]({
        message: "",
        description: `${calAge} is not compactible age. Age from 18 to 60 is only allowed !`,
      });
    };
    if (info) {
      setProposerAge(calAge);
      if (calAge < 18 || calAge > 60) {
        openNotificationWithIcon("warning");
      }
    } else {
      setWarnText("Please select Category to calculate age");
    }
  }

  function onHusbandAgeChange(date) {
    const userDOB = moment(date, "YYYY/M/D");
    const calAge = moment().diff(userDOB, "years");
    if (info) {
      setHusbandAge(calAge);
    } else {
      setWarnText("Please select Category to calculate age");
    }
  }
  function onWifeAgeChange(date) {
    const userDOB = moment(date, "YYYY/M/D");
    const calAge = moment().diff(userDOB, "years");
    if (info) {
      setWifeAge(calAge);
    } else {
      setWarnText("Please select Category to calculate age");
    }
  }

  function disabledDate(current) {
    return current && current > moment().endOf("day");
  }
  useEffect(() => {
    if (term && sum) {
      DivideNumber(term, sum);
    }
  }, [term, sum]);
  useEffect(() => {
    onChange();
  }, [info]);

  function DivideNumber(term, sum) {
    if (term && sum) {
      const result = (sum / term).toFixed(2); //toFixed-to round off decimal number
      setInvestment(result);
      console.log("result", result);
      form.getFieldValue("");
    }
  }
  const handleChangeCategory = (value, index) => {
    // console.log("7777", index.max_age, index.min_age);
    setInfo(value);
    setMinAge(index.min_age);
    setMaxAge(index.max_age);
    // setWarnText("");
    // setSelCategory(value);
  };
  const showModal = () => {
    setVisible(true);
  };
  const handleClick = () => {
    // if (name && phone && email && province) {
    //   setLoading(true);
    //   setTimeout(() => {
    //     setVisible(false);
    //     setLoading(false);
    //   }, 2000);
    // } else {
    //   alert("some data missing ");
    // }
    console.log("handle click");
  };

  const handleCancel = () => {
    setVisible(false);
  };
  console.log("select", info);
  return (
    <div className="compare__calclulator">
      <Form
        form={form}
        name="dynamic_rule"
        size="large"
        onSubmit={onSubmitHandler}
      >
        <Form.Item className="hello">
          <div className="category_section">
            <label className="label-title">
              Category
              <Tooltip placement="top" title="Select your category">
                <BsFillInfoCircleFill style={tooltipStyle} />
              </Tooltip>
              {err}
            </label>

            <div className="select-category">
              <div>
                <Select
                  className="dropdown-category"
                  placeholder="Select Category"
                  value={info}
                  onChange={(value, index) => {
                    handleChangeCategory(value, index);
                    onChange();
                  }}
                >
                  {dropCategory?.map((data, index) => (
                    <option
                      key={index}
                      value={data.category_code}
                      min_age={data.min_age}
                      max_age={data.max_age}
                      child_age_range={data.child_age_range}
                      proposer_age_range={data.proposer_age_range}
                      husband_age_range={data.husband_age_range}
                      wife_age_range={data.wife_age_range}
                      // selected={data.category_code === info ? true : false}
                    >
                      {data.name}
                    </option>
                  ))}
                </Select>
              </div>
              {/* <div>{msg}</div> */}
              <div className="category_info">
                {info ? (
                  info === "endowment" ? (
                    <p className="info-para">
                      "An endowment policy is a policy designed to pay a lump
                      sum after a specific term (on its maturity) or on death.
                      This plan has low premium and high return and has basic
                      coverage."
                    </p>
                  ) : info === "money-back" ? (
                    <p className="info-para">
                      "Money Back plan is designed to pay you part of sum
                      assured in intervals during the policy term. Here you will
                      receive the remaining sum assured and bonus at maturity."
                    </p>
                  ) : info === "children" ? (
                    <p className="info-para">
                      "Child plan is a type of insurance that insures the life
                      of a minor. Child policy normally has a proposer instead
                      of a nominee. This gives parents the opportunity to secure
                      the child’s future. In the market this plan is also known
                      as education plan because this plan lets you save money
                      for your child’s further education."
                    </p>
                  ) : info === "whole-life" ? (
                    <p className="info-para">
                      "Whole life insurance is a policy which gives the insurer
                      coverage for lifetime while paying premium for limited
                      number of years. At maturity accumulated bonus and sum
                      assured is paid back"
                    </p>
                  ) : info === "couple" ? (
                    <p className="info-para">
                      "Couple- plan is designed to give coverage to both spouses
                      as well as return on maturity. Here you will be paid sum
                      assured and accumulated bonus at maturity, and if one of
                      the spouses dies during the policy, they will receive
                      death benefits likewise."
                    </p>
                  ) : info === "retirement-pension" ? (
                    <p className="info-para">
                      "A pension or a retirement plan is a plan that gives you
                      benefits after the maturity of your policy. At maturity
                      you will receive bonus and get the rest in installments
                      through-out your life (depending on the company)."
                    </p>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div>{warnText}</div>
        </Form.Item>

        {info === "children" ? (
          <Form.Item>
            <label className="label-title">
              Select Date Type
              <Tooltip placement="top" title="Select date type">
                <BsFillInfoCircleFill style={tooltipStyle} />
              </Tooltip>
            </label>
            <br />
            {/* <Radio style={{ marginRight: 40 }}>AD</Radio> */}

            <div className="age_section">
              <div className="leftage_section">
                <label className="label-title">
                  Child Age in Years
                  <Tooltip placement="top" title="Put child age in years">
                    <BsFillInfoCircleFill style={tooltipStyle} />
                  </Tooltip>
                </label>
                <br />

                <DatePicker
                  disabledDate={disabledDate}
                  onChange={onChildAgeChange}
                  style={{ height: 45, width: 222 }}
                />
                <Input
                  value={childAge}
                  style={{
                    height: 45,
                    width: 110,
                    marginLeft: 20,
                    boxShadow: childAge > 17 ? "rgb(255 0 0) 3px 2px 13px" : "",
                  }}
                />
              </div>
              <div className="rightage_section">
                <label className="label-title">
                  Proposer's Age in Years
                  <Tooltip placement="top" title="Put proposer age in years">
                    <BsFillInfoCircleFill style={tooltipStyle} />
                  </Tooltip>
                </label>
                <br />

                <DatePicker
                  disabledDate={disabledDate}
                  onChange={onProposerAgeChange}
                  style={{ height: 45, width: 222 }}
                />
                <Input
                  value={proposerAge}
                  style={{
                    height: 45,
                    width: 110,
                    marginLeft: 20,
                    boxShadow:
                      proposerAge < 18 || proposerAge > 60
                        ? "rgb(255 0 0) 3px 2px 13px"
                        : "",
                  }}
                />
              </div>
            </div>
          </Form.Item>
        ) : info === "couple" ? (
          <Form.Item>
            <label className="label-title">
              Select Date Type
              <Tooltip placement="top" title="Select Date Type">
                <BsFillInfoCircleFill style={tooltipStyle} />
              </Tooltip>
            </label>
            <br />
            {/* <Radio style={{ marginRight: 40 }}>AD</Radio> */}
            <div className="age_section">
              <div className="leftage_section">
                <label className="label-title">
                  Husband Age in Years
                  <Tooltip placement="top" title="Put husband age in years">
                    <BsFillInfoCircleFill style={tooltipStyle} />
                  </Tooltip>
                </label>
                <br />

                <DatePicker
                  disabledDate={disabledDate}
                  onChange={onHusbandAgeChange}
                  style={{ height: 45, width: 222 }}
                />
                <Input
                  value={husbandAge}
                  style={{ height: 45, width: 110, marginLeft: 20 }}
                />
              </div>
              <div className="rightage_section">
                <label className="label-title">
                  Wife Age in Years
                  <Tooltip placement="top" title="Put wife age in year">
                    <BsFillInfoCircleFill style={tooltipStyle} />
                  </Tooltip>
                </label>
                <br />
                <DatePicker
                  disabledDate={disabledDate}
                  onChange={onWifeAgeChange}
                  style={{ height: 45, width: 222 }}
                />
                <Input
                  value={wifeAge}
                  style={{ height: 45, width: 110, marginLeft: 20 }}
                />
              </div>
            </div>
          </Form.Item>
        ) : (
          <Form.Item>
            <label className="label-title">
              Select Date of Birth
              <Tooltip placement="top" title="Select Date Type">
                <BsFillInfoCircleFill style={tooltipStyle} />
              </Tooltip>
            </label>
            <br />
            {/* <Radio style={{ marginRight: 40 }}>AD</Radio> */}
            <DatePicker
              disabledDate={disabledDate}
              onChange={onChange}
              style={{ height: 45, width: 222 }}
            />
            <Input
              value={isNaN(age) ? 0 : age}
              // placeholder="0"
              // onChange={handleChange}
              style={{
                height: 45,
                width: 110,
                marginLeft: 20,
                boxShadow:
                  age < minAge || age > maxAge
                    ? "rgb(255 0 0) 3px 2px 13px"
                    : "0",
              }}
            />
          </Form.Item>
        )}

        <Investment
          term={term}
          sum={sum}
          investment={investment}
          setInvestment={setInvestment}
          setTerm={setTerm}
          tooltipStyle={tooltipStyle}
          Title={Title}
          setSum={setSum}
        />
        <Form.Item>
          <Button
            block
            type="submit"
            onClick={() => {
              validityCheck(age, sum, term);
            }}
            style={{
              height: 45,
              background: "#3d538c",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 500,
              border: 0,
              borderRadius: "4px",
            }}
          >
            Continue
          </Button>
        </Form.Item>

        <Modal
          className="user-modal"
          visible={visible}
          style={{ top: "5%" }}
          title="Your Information"
          footer={null}
          maskClosable={false} //modal won't close when clicked outside the area of modal unless the value is {true}
          // onOk={handleClick}
          onCancel={handleCancel}
        >
          <UserInformation
            userFormValues={userFormValues}
            setUserFormValues={setUserFormValues}
            info={info}
            age={age}
            setAge={setAge}
            term={term}
            setTerm={setTerm}
            sum={sum}
            setSum={setSum}
          />
        </Modal>
      </Form>
    </div>
  );
};

export default Calculator;
