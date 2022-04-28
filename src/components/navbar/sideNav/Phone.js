import React, { useState } from "react";
import { Drawer, Button, Row, Col, Form, Input, Space } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import phoneIcon from "../../../components/pages/SvgIcons/frontend/phone.svg";

function Phone() {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const initialValues = { Name: "", phoneNo: "", email: "", message: "" };
  const [userFormValues, setUserFormValues] = useState(initialValues);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

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
  const requestButtonHandler = () => {
    if (userFormValues.Name && userFormValues.phoneNo) {
      console.log("True", userFormValues);
    } else {
      console.log("error", userFormValues);
    }
  };
  return (
    <>
      <div className="phone-icon">
        <img src={phoneIcon} alt="phone contact" onClick={showDrawer} />
      </div>
      {/* <Button type="primary" onClick={showDrawer}>
    Open
  </Button> */}
      <Drawer
        title="Create a new account"
        width={400}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form
          form={form}
          name="userInfo"
          size="large"
          // onSubmit={onSubmitHandler}
        >
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
            <label>Email Address</label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={userFormValues.email}
              placeholder="Enter your email"
              style={{ height: 40 }}
            />
          </Form.Item>

          <Form.Item>
            <label>Name</label>
            <Input.TextArea
              type="text"
              name="message"
              onChange={handleChange}
              value={userFormValues.message}
              placeholder="Type your messsage here"
              style={{ height: 80 }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              className="user-modal-button"
              type="primary"
              htmlType="submit"
              // loading={loading}
              // onClick={handleClick}
              onClick={() => {
                requestButtonHandler();
              }}
            >
              Request Call Back
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default Phone;
