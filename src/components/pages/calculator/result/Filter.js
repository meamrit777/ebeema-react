import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
// import SelectInput from "@material-ui/core/Select/SelectInput";
import "./index.css";

const Filter = ({ age, setAge, term, setTerm, sum, setSum }) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  // function onChange(e) {
  //   console.log(`checked = ${e.target.checked}`);
  // }

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
      <Form form={form} name="calc_modal" size="small" className="filter-form">
        <Form.Item>
          <h1>Policy filter</h1>
        </Form.Item>

        <Form.Item>
          <DatePicker
            disabledDate={disabledDate}
            onChange={onChange}
            style={{ height: 45, width: 222 }}
          />
          <Input
            value={age}
            style={{
              height: 45,
              width: 110,
              marginLeft: 20,
            }}
          />
        </Form.Item>

        <Form.Item>term</Form.Item>

        <Form.Item>sum Assured</Form.Item>

        <Form.Item>
          <Select
            className="dropdown-category"
            placeholder="Select A Mop"
            // onChange={(value) => {
            //   handleChangeCategory(value, index);
            // }}
          >
            <Option>Yearly</Option>
            <Option>Half Yearly</Option>
            <Option>Quarterly</Option>
            <Option>Monthly</Option>
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

        {/* <Form.Item
          name="note"
          label="Note"
          rules={[
            {
              required: true,
            },
          ]}
        ></Form.Item> */}
      </Form>
    </div>
  );
};

export default Filter;
