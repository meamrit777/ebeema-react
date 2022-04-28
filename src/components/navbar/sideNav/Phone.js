import React, { useState } from "react";
import { Drawer, Button, Row, Col, Form, Input, Space } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import Recaptcha from "react-google-recaptcha";
import Swal from "sweetalert2";

import phoneIcon from "../../../components/pages/SvgIcons/frontend/phone.svg";
import calculatorIcon from "../../../components/pages/SvgIcons/frontend/calculator.svg";

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
    if (userFormValues.Name && userFormValues.phoneNo && userFormValues.email) {
      Swal.fire({
        icon: "success",
        title: "success",
        html: "Thank you, Our Corporate team will get back to you.",
        // padding: "0 1em 1em",
        width: 300,
      });
      // console.log("True", userFormValues);
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        html: "Complete your form details",
        timerProgressBar: true,
        padding: "0 1em 1em",
        timer: 4000,
        width: 300,
      });
      // console.log("error", userFormValues);
    }
  };

  const handleToken = (token) => {
    if (
      (currentForm) => {
        return { ...currentForm, token };
      }
    );
  };
  const handleExpire = () => {
    if (
      (currentForm) => {
        return { ...currentForm, token: null };
      }
    );
  };

  return (
    <>
      <div className="side-nav">
        <div>
          <Link to="/calculator">
            <img
              src={calculatorIcon}
              className="side-nav-calulator"
              // style={{
              //   backgroundColor: "#a13737",
              //   padding: "10px",
              //   borderRadius: "5px",
              // }}
              alt="calculator icon"
              // className="calculator-icon"
            />
          </Link>
        </div>

        <div>
          <img
            src={phoneIcon}
            alt="phone contact"
            className="side-nav-phone"
            // style={{ padding: "10px", borderRadius: "5px" }}
            onClick={showDrawer}
          />
        </div>
      </div>
      {/* <Button type="primary" onClick={showDrawer}>
    Open
  </Button> */}
      <Drawer
        className="phone-drawer"
        title="Request Callback"
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
            <label>Full Name</label>
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
            <label>Email</label>
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
            <label>Message</label>
            <Input.TextArea
              type="text"
              name="message"
              onChange={handleChange}
              value={userFormValues.message}
              placeholder="Type your messsage here"
              style={{ height: 50 }}
            />
          </Form.Item>

          <Form.Item>
            <Recaptcha
              sitekey="6LdNw9odAAAAAGPD3DRi120MUwC1NTV-Ewy-t6lj"
              onChange={handleToken}
              onExpire={handleExpire}
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
