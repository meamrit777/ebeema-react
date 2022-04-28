import React from "react";
import { Form, Input, Button, Select } from "antd";
import Swal from "sweetalert2";

const Corporate = ({ userFormValues, setUserFormValues }) => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const { TextArea } = Input;

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
    if (userFormValues.Name && userFormValues.phoneNo) {
      console.log("all field fullfilled", userFormValues);
      Swal.fire({
        // position: "top-end",
        // allowOutsideClick: false,
        title: "success",
        icon: "success",
        html: "We will contact you soon",
        timerProgressBar: true,
        padding: "0 1em 1em",
        timer: 3500,
        width: 300,
      });
    } else {
      console.log("error form", userFormValues);
    }
  };
  return (
    <>
      <div className="corporate-modal">
        <Form
        className="corporate-form-wrapper"
          form={form}
          name="userInfo"
          size="large"
          // onSubmit={onSubmitHandler}
        >
          <Form.Item className="full-block">
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
              rules={[
                {
                  required: true,
                  message: "We'll never share your email with anyone else.",
                },
              ]}
            >
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
            <label>Name of Organization</label>
            <Input
              type="text"
              name="organization"
              onChange={handleChange}
              value={userFormValues.organization}
              placeholder="Name of Organization"
              style={{ height: 40 }}
            />
          </Form.Item>

          <Form.Item>
            <label>Size of Employee</label>
            <Input
              type="text"
              name="employeeSize"
              onChange={handleChange}
              value={userFormValues.employeeSize}
              placeholder="Size of Employee"
              style={{ height: 40 }}
            />
          </Form.Item>
          <Form.Item className="full-block">
            <label>Message</label>
            <TextArea
              rows={5}
              type="text"
              name="message"
              onChange={handleChange}
              value={userFormValues.message}
              placeholder="Message"
            />
          </Form.Item>

          <Form.Item className="full-block">
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
export default Corporate;
