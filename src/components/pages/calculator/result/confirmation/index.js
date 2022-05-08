import React, { useState } from "react";
import { Steps, Button, Input, Form } from "antd";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const { Step } = Steps;
const steps = [
  {
    title: "Confirm",
    icon: faInstagram,
  },
  {
    title: "Invoice",
    icon: faFacebook,
  },
  {
    title: "Personal",
    icon: faLinkedin,
  },
  {
    title: "Payment",
    icon: faInstagram,
  },
  {
    title: "Finish",
    icon: faInstagram,
  },
];

const Confirm = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // console.log("steps.length", steps.length);

  return (
    <>
      <div className="confirm-container">
        <div className="real-step">
          <div className="real-step-wrapper">
            <Steps
              // onChange={(e) => {
              //   console.log("ede", e);
              // }}
              current={current}
            >
              {steps.map((item) => (
                <Step
                  icon={<FontAwesomeIcon icon={item.icon} size="2x" />}
                  key={item.title}
                  title={item.title}
                />
              ))}
            </Steps>
          </div>
        </div>

        <div className="steps-content">
          {current === 0 ? (
            <div className="step-wrapper">
              <div>
                <Form form={form} name="userInfo" size="large">
                  <h3>Selected Product:</h3>
                  <Form.Item>
                    <label>Name:</label>
                    <br />
                    <Input
                      type="text"
                      name="Name"
                      // onChange={handleChange}
                      // value={Name}
                      placeholder="Name"
                      style={{ width: "100%", height: 40 }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <label>Term:</label>
                    <br />
                    <Input
                      type="text"
                      name="term"
                      style={{ width: "100%", height: 40 }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <label>Sum Assured:</label>
                    <br />
                    <Input
                      type="text"
                      name="sum"
                      style={{ width: "100%", height: 40 }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <label>Mode of Payment:</label>
                    <br />
                  </Form.Item>
                  <Form.Item>
                    <label>Benefit:</label>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      className="confim-button"
                      type="primary"
                      onClick={() => next()}
                    >
                      Next Step
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          ) : current === 1 ? (
            <div className="step-wrapper">
              <div>
                <Form form={form} name="userInfo" size="large">
                  <h3>Selected Product:</h3>
                  <Form.Item>
                    <label>Name:</label>
                    <br />
                    <Input
                      type="text"
                      name="Name"
                      // onChange={handleChange}
                      // value={Name}
                      placeholder="Name"
                      style={{ width: "100%", height: 40 }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <label>Term:</label>
                    <br />
                    <Input
                      type="text"
                      name="term"
                      style={{ width: "100%", height: 40 }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <label>Sum Assured:</label>
                    <br />
                    <Input
                      type="text"
                      name="sum"
                      style={{ width: "100%", height: 40 }}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      className="confim-button"
                      type="primary"
                      onClick={() => next()}
                    >
                      Next Step
                    </Button>
                    <Button
                      className="confim-button"
                      style={{ margin: "0 8px" }}
                      onClick={() => prev()}
                    >
                      Previous
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          ) : // <div>
          //   <p className="info-para">"Money"</p>
          //   <Button type="primary" onClick={() => next()}>
          //     Next
          //   </Button>
          //   <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
          //     Previous
          //   </Button>
          // </div>
          current === 2 ? (
            <div className="step-wrapper">
              <div>
                <Form form={form} name="userInfo" size="large">
                  <h3>Selected Product:</h3>
                  <Form.Item>
                    <label>Name:</label>
                    <br />
                    <Input
                      type="text"
                      name="Name"
                      // onChange={handleChange}
                      // value={Name}
                      placeholder="Name"
                      style={{ width: "100%", height: 40 }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <label>Term:</label>
                    <br />
                    <Input
                      type="text"
                      name="term"
                      style={{ width: "100%", height: 40 }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <label>Sum Assured:</label>
                    <br />
                    <Input
                      type="text"
                      name="sum"
                      style={{ width: "100%", height: 40 }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <label>Mode of Payment:</label>
                    <br />
                  </Form.Item>
                  <Form.Item>
                    <label>Benefit:</label>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      className="confim-button"
                      type="primary"
                      onClick={() => next()}
                    >
                      Next Step
                    </Button>
                    <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                      Previous
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          ) : // <div>
          //   <p className="info-para">"child"</p>
          //   <Button type="primary" onClick={() => next()}>
          //     Next
          //   </Button>
          //   <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
          //     Previous
          //   </Button>
          // </div>
          current === 3 ? (
            <div className="step-wrapper">
              <div>
                <Form form={form} name="userInfo" size="large">
                  <h2 className="step-title">Request for payment collection</h2>
                  <Form.Item className="payment-confirmation-button">
                    <Button
                      style={{ width: "50%" }}
                      type="primary"
                      onClick={() => next()}
                    >
                      Confirm Request
                    </Button>
                    <br />
                    <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                      Previous
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          ) : // <div>
          //   <p className="info-para">"whole"</p>
          //   <Button type="primary" onClick={() => next()}>
          //     Done
          //   </Button>
          //   <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
          //     Previous
          //   </Button>
          // </div>
          current === 4 ? (
            <div className="last-step">
              <p className="">Success !</p>
              <img src="https://scalebranding.com/wp-content/uploads/2020/07/small-panda-01.jpg" alt="image" width="200" />
              <p>Successfully processed insurance policy from eBeema.</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Confirm;
