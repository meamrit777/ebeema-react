import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Input,
  Checkbox,
  Button,
  DatePicker,
  Select,
  Tooltip,
} from "antd";
import moment from "moment";
import { fetchAllResult } from "../../../../redux/result/ResultAction";
// import SelectInput from "@material-ui/core/Select/SelectInput";
import "./index.css";

const Filter = ({ age, setAge, term, setTerm, sum, setSum }) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const results = useSelector((state) => state.allResults.results);
  const dispatch = useDispatch();

  const [filterContent, setFilterContent] = useState([]);
  const [termOption, setTermOption] = useState([]);
  const [uniqueCompany, setUniqueCompany] = useState([]);
  const [uniqueFeature, setUniqueFeature] = useState([]);
  const [modeOfPayment, setModeOfPayment] = useState([]);

  useEffect(() => {
    dispatch(fetchAllResult());
  }, []);

  useEffect(() => {
    if (results?.data) {
      setFilterContent(Object.values(results.data));
      setTermOption(results.data.terms);
      setUniqueCompany(results.data.companies);
      setUniqueFeature(results.data.features);
      setModeOfPayment(results.data.mops);
    }
  }, [results]);
  function onChange(date) {
    const userDOB = moment(date, "YYYY/M/D");
    const calAge = moment().diff(userDOB, "years");
    setAge(calAge);
    // console.log("first", calAge);
  }
  function disabledDate(current) {
    return current && current > moment().endOf("day");
  }
  useEffect(() => {
    onChange();
  }, []);

  return (
    <div>
      <Form form={form} name="filter" size="default" className="filter-form">
        <Form.Item className="policy-filter">
          <p>Policy filter</p>
        </Form.Item>

        <Form.Item>
          <p>
            <b>Date of birth</b>
          </p>
          <DatePicker
            placeholder="Select Date of Birth"
            disabledDate={disabledDate}
            onChange={onChange}
            style={{ height: 40, width: "100%" }}
          />

          <input
            type="text"
            style={{
              width: "100%",
              height: 40,
              border: "none",
              outline: "none",
              paddingLeft: 10,
            }}
            value={age}
            readonly=""
          />
          {/* <input style={{ border: "none", outline: "none" }} readonly /> */}
          {/* {age} */}
        </Form.Item>

        <Form.Item>
          <b>Terms</b>
          <br />
          <br />
          <Select
            className="dropdown-filter"
            placeholder="Select a term"
            // style={{ width: "100%" }}
            value={term}
            onChange={(value) => {
              setTerm(value);
            }}
          >
            {termOption?.map((data, index) => (
              <Option key={data}>{data}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <p>
            <b>Sum Assured</b>
          </p>
          <input
            type="text"
            style={{
              width: "100%",
              height: 40,
              border: "none",
              outline: "none",
              paddingLeft: 10,
            }}
            value={sum}
            onChange={(e) => {
              // handleTerm(e);
              console.log(":::", e.target.value);
              setSum(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item>
          <p>
            <b>Mode of Payment</b>
          </p>
          <Select
            className="dropdown-filter"
            placeholder="Select A Mop"
            // onChange={(value, index) => {
            //   handleChangeCategory(value, index);
            //   onChange();
            // }}
          >
            {modeOfPayment?.map((data, index) => (
              <Option key={index}>{data}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <p>Company</p>
          <br />
          <Checkbox className="filter" onChange={onChange}>
            NLIC Nepal Life Insurance Company
          </Checkbox>
          <br />
          <Checkbox onChange={onChange}>
            LIC Life Insurance Corporation
          </Checkbox>
          <br />
          <Checkbox onChange={onChange}>
            National Life Insurance Company Limited
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <p>Features</p>
          <br />
          <Checkbox onChange={onChange}>
            Accidental Death Benefits (adb)
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="a">
            Term Rider
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="b">
            Premium Waiver Benefit (PWB)
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="c">
            PTD/PWB
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="d">
            ADB/PTD/PWB
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="e">
            PTD
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="f">
            Critical Illness (CI)
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="g">
            asfdsfdsf
          </Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Filter;
