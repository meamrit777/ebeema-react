import React, { useState } from "react";
import { Steps, Button, Input, Form } from "antd";
import "./index.css";

const { Step } = Steps;
const steps = [
  {
    title: "Confirm",
  },
  {
    title: "Invoice",
  },
  {
    title: "Personal",
  },
  {
    title: "Payment",
  },
  {
    title: "Finish",
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
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
          </div>
        </div>

        <div className="steps-content">
          {current === 0 ? (
            <div className="step-wrapper">
              <div>
                <Form form={form} name="userInfo" size="large">
                  <Form.Item>
                    <label>Name</label>
                    <br />
                    <Input
                      type="text"
                      name="Name"
                      // onChange={handleChange}
                      // value={Name}
                      placeholder="Enter your full name"
                      style={{ width: 300, height: 40 }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <label>Term</label>
                    <br />
                    <Input
                      type="text"
                      name="term"
                      style={{ width: 300, height: 40 }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <label>Sum Assured</label>
                    <br />
                    <Input
                      type="text"
                      name="sum"
                      style={{ width: 300, height: 40 }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <label>Mode of Payment</label>
                    <br />
                  </Form.Item>
                  <Form.Item>
                    <label>Benefit</label>
                  </Form.Item>
                </Form>
              </div>

              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            </div>
          ) : current === 1 ? (
            <div>
              <p className="info-para">"Money"</p>
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            </div>
          ) : current === 2 ? (
            <div>
              <p className="info-para">"child"</p>
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            </div>
          ) : current === 3 ? (
            <div>
              <p className="info-para">"whole"</p>
              <Button type="primary" onClick={() => next()}>
                Done
              </Button>
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            </div>
          ) : current === 4 ? (
            <div>
              <p className="info-para">"pension"</p>
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
