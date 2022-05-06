import React, { useState, useEffect } from "react";
import { Form, Input, Button, Modal, Select } from "antd";
import { value } from "lodash-es";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserInformation = ({
  userFormValues,
  setUserFormValues,
  info,
  age,
  setAge,
  term,
  setTerm,
  sum,
  setSum,
}) => {
  const navigate = useNavigate();
  const { Option } = Select;
  const [form] = Form.useForm();
  const [province, setProvince] = useState("");
  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setUserFormValues({ ...userFormValues, [name]: value });
    // console.log("####", userFormValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setformErrors(validate(userFormValues));
    // setIsSubmit(true);
  };
  const validityCheck = () => {
    if (userFormValues.Name && userFormValues.phoneNo && province) {
      console.log("True", userFormValues, "province:", province);
      //arko page
      navigate("/calculator/result", {
        state: { info, age, term, sum },
      });
    } else {
      console.log("error", userFormValues);
    }
  };
  const handleProvince = (value) => {
    setProvince(value);
    // console.log("!!!!", value); //shows province
  };

  return (
    <>
      <div className="modal">
        <Form
          form={form}
          name="userInfo"
          size="large"
          // onSubmit={onSubmitHandler}
        >
          <p>Enter the your information to continue.</p>
          <Form.Item>
            <label>Name</label>
            <Input
              type="text"
              name="Name"
              onChange={handleChange}
              value={userFormValues.Name}
              placeholder="Enter your full name"
              style={{ height: 40 }}
            />
          </Form.Item>

          <Form.Item>
            <label>Phone Number</label>
            <Input
              type="number"
              name="phoneNo"
              onChange={handleChange}
              value={userFormValues.phoneNo}
              placeholder="Enter your phone number"
              style={{ height: 40 }}
            />
          </Form.Item>
          <Form.Item
          // rules={[
          //   {
          //     required: true,
          //     message: "We'll never share your email with anyone else.",
          //   },
          // ]}
          >
            <label>Email Address</label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={userFormValues.email}
              placeholder="Enter your email"
              style={{ height: 40 }}
            />
            <p style={{ color: "red", fontSize: 12 }}>
              We'll never share your email with anyone else.
            </p>
          </Form.Item>
          <Form.Item>
            <label>Province</label>
            <Select
              name="province"
              onChange={handleProvince}
              placeholder="Select Province"
              // value={userFormValues.province}
            >
              <Option value="Province No. 1">Province No. 1</Option>
              <Option value="Province No. 2">Province No. 2</Option>
              <Option value="Bagmati Province">Bagmati Province</Option>
              <Option value="GandakiProvince">GandakiProvince</Option>
              <Option value="Lumbini Province">Lumbini Province</Option>
              <Option value="karnali Province">karnali Province</Option>
              <Option value="Sudurpashchim Province">
                Sudurpashchim Province
              </Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              className="user-modal-button"
              type="primary"
              htmlType="submit"
              // loading={loading}
              // onClick={handleClick}
              onClick={() => {
                validityCheck();
              }}
              style={{ width: 234, margin: 0 }}
            >
              Submit and View Result
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default UserInformation;
