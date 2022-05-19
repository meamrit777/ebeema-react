import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSelectedResult } from "../../../../redux/result/ResultAction";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Checkbox, DatePicker, Select } from "antd";
import moment from "moment";

const Filter = ({
  age,
  term,
  sum,
  setAge,
  setTerm,
  setSum,
  featureCheckbox,
  setFeatureCheckBox,
  companyCheckbox,
  setCompanyCheckbox,
  category,
  mop,
  setMop,
  userBirthDate,
}) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const results = useSelector((state) => state.allResults.results);
  const dispatch = useDispatch();
  const [filtercontent, setFilterContent] = useState();
  const [termOption, setTermOption] = useState([]);
  const [uniqueCompany, setUniqueCompany] = useState([]);

  const [uniqueFeature, setUniqueFeature] = useState([]);
  const [modeOfPayment, setModeOfPayment] = useState([]);

  useEffect(() => {
    if (results?.data) {
      setFilterContent(Object.values(results.data.products));
      setTermOption(results.data.terms);
      setUniqueCompany(results.data.companies);
      setUniqueFeature(results.data.features);
      setModeOfPayment(results.data.mops);
    }
  }, [results]);

  function onMOPChange(e) {
    console.log("e");
  }
  // function onTermChange(e) {
  //   console.log(`m`, e);
  //   setTerm(e);
  // }
  function onOptionclick(e) {
    // e.preventdefault();
    console.log("e");
  }
  function onDateChange(date) {
    const userDOB = moment(date, "YYYY/M/D");
    const calAge = moment().diff(userDOB, "years");
    setAge(calAge);
  }
  function disabledDate(current) {
    return current && current > moment().endOf("day");
  }

  useEffect(() => {
    onDateChange();
  }, []);
  // console.log("mopp", mop);
  function onChange(date) {
    const userDOB = moment(date, "YYYY/M/D");
    const calAge = moment().diff(userDOB, "years");
    setAge(calAge);
  }
  useEffect(() => {
    onChange();
  }, []);
  function onCompanyChange(checkedValues) {
    console.log("checked  ", checkedValues);
    let value = checkedValues || [];
    const data = {
      category: category,
      age: age,
      child_age: "0",
      proposer_age: "0",
      husband_age: "0",
      wife_age: "0",
      term: term,
      sum_assured: sum,
      mop: mop,
      invest: "100000.00",
      "company_id[]": value,
      features: [],
    };
    // setCompanyCheckbox(checkedValues);
    dispatch(fetchSelectedResult(data));
  }
  function onFeatureChange(checkedfeatureValues) {
    console.log("checked  ", checkedfeatureValues);
    setFeatureCheckBox(checkedfeatureValues);
  }
  // console.log("featureCheckbox",companyCheckbox)
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
            value={isNaN(age) ? 0 : age}
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
            defaultValue={mop}
            onChange={(value, index) => {
              setMop(value);
            }}
          >
            {modeOfPayment?.map(
              (data, index) => (
                console.log("index", index),
                (<Option key={data}>{data}</Option>)
              )
            )}
          </Select>
        </Form.Item>

        <Form.Item style={{ borderBottom: "1px solid #e0e0e0", padding: 15 }}>
          <p className="filter-subtitle">Company</p>
          <Checkbox.Group style={{ width: "100%" }} onChange={onCompanyChange}>
            {uniqueCompany?.map((item, index) => (
              <div key={item.id}>
                <Checkbox value={item.id}>{item.name}</Checkbox>
              </div>
            ))}
          </Checkbox.Group>
        </Form.Item>

        <Form.Item style={{ borderBottom: "1px solid #e0e0e0", padding: 15 }}>
          <p className="filter-subtitle">Feature</p>
          <Checkbox.Group style={{ width: "100%" }} onChange={onFeatureChange}>
            {uniqueFeature?.map((item, index) => (
              <div key={item.id}>
                <Checkbox
                  value={item.id}
                  // onClick={() => {
                  //   setCheckBoxData(item.name);
                  //   console.log("item.name", item.name);
                  // }}
                  // onChange={onFeatureChange}
                >
                  {item.name}
                </Checkbox>
              </div>
            ))}
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Filter;
