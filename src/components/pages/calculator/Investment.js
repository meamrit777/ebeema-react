import React, { useEffect } from "react";
import "./Calculator.css";

import { Form, Input, Radio, Space, Tooltip } from "antd";
import { BsFillInfoCircleFill } from "react-icons/bs";

export const Investment = ({
  term,
  sum,
  investment,
  setInvestment,
  setTerm,
  tooltipStyle,
  Title,
  setSum,
}) => {
  useEffect(() => {
    if (term && sum) {
      DivideNumber(term, sum);
    }
  }, [term, sum]);
  function DivideNumber(term, sum) {
    if (term && sum) {
      const result = (sum / term).toFixed(2); //toFixed is used to round off decimal number
      setInvestment(result);
      console.log("result", result);
    }
  }

  return (
    <>
      <Form.Item>
        <label className="label-title">
          Term
          <Tooltip placement="top" title="select your term in years">
            <BsFillInfoCircleFill style={tooltipStyle} />
          </Tooltip>
        </label>
        <br />

        <Radio.Group buttonStyle="solid" size="large">
          <Space>
            <Radio.Button
              value="1"
              onClick={() => {
                setTerm("5");
                DivideNumber(term, sum);
              }}
            >
              5
            </Radio.Button>
            <Radio.Button
              value="2"
              onClick={() => {
                setTerm("10");
                DivideNumber(term, sum);
              }}
            >
              10
            </Radio.Button>
            <Radio.Button
              value="3"
              onClick={() => {
                setTerm("15");
                DivideNumber(term, sum);
              }}
            >
              15
            </Radio.Button>
            <Radio.Button
              value="4"
              onClick={() => {
                setTerm("20");
                DivideNumber(term, sum);
              }}
            >
              20
            </Radio.Button>
            <Radio.Button
              value="5"
              onClick={() => {
                setTerm("25");
                DivideNumber(term, sum);
              }}
            >
              25
            </Radio.Button>
            <Radio.Button
              value="6"
              onClick={() => {
                setTerm("30");
                DivideNumber(term, sum);
              }}
            >
              30
            </Radio.Button>
            <Radio.Button
              value="7"
              onClick={() => {
                setTerm("35");
                DivideNumber(term, sum);
              }}
            >
              35
            </Radio.Button>
            <Title level={5} style={{ marginLeft: 5 }}>
              OR
            </Title>
            <Input
              style={{ marginBottom: 20 }}
              placeholder="Enter Your Term"
              className="input_sum"
              value={term}
              required
            />
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <label className="label-title">
          Sum Assured
          <Tooltip placement="top" title="select your investment">
            <BsFillInfoCircleFill style={tooltipStyle} />
          </Tooltip>
        </label>
        <br />
        <Form.Item>
          <Radio.Group buttonStyle="solid" size="large">
            <Space>
              <Radio.Button
                className="radio_button"
                value="a"
                onClick={() => {
                  setSum("500000");
                  DivideNumber(term, sum);
                }}
              >
                5Lakhs
              </Radio.Button>
              <Radio.Button
                value="b"
                onClick={() => {
                  setSum("1000000");
                  DivideNumber(term, sum);
                }}
              >
                10Lakhs
              </Radio.Button>
              <Radio.Button
                value="c"
                onClick={() => {
                  setSum("1500000");
                  DivideNumber(term, sum);
                }}
              >
                15Lakhs
              </Radio.Button>
              <Radio.Button
                value="d"
                onClick={() => {
                  setSum("2000000");
                  DivideNumber(term, sum);
                }}
              >
                20Lakhs
              </Radio.Button>
              <Radio.Button
                value="e"
                onClick={() => {
                  setSum("2500000");
                  DivideNumber(term, sum);
                }}
              >
                25Lakhs
              </Radio.Button>
              <Radio.Button
                value="f"
                onClick={() => {
                  setSum("5000000");
                  DivideNumber(term, sum);
                }}
              >
                50Lakhs
              </Radio.Button>
              <Title level={5}>OR</Title>
              <Input
                placeholder="Enter your Sum Assured"
                className="input_sum"
                value={sum}
                required
                style={{ marginBottom: 20 }}
              />
            </Space>
          </Radio.Group>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <label className="label-title">
          Estimated Investment per year
          <Tooltip placement="top" title="select your investment">
            <BsFillInfoCircleFill style={tooltipStyle} />
          </Tooltip>
        </label>
        <br />
        <Input
          placeholder="Enter your Investment"
          style={{ width: 250, height: 50 }}
          value={investment}
          required
        />
      </Form.Item>
    </>
  );
};
