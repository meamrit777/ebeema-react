import React, { useEffect } from "react";
import "./calculator.css";

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
  function handleInvestment(e) {
    // const lastSum = e.target.value;
    const lastSum = (term * e.target.value).toFixed(2);
    console.log("sum", lastSum, term);
    setSum(lastSum);
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

        <Radio.Group
          className="term-radio-group"
          buttonStyle="solid"
          size="large"
        >
          <Space>
            <Radio.Button
              className="term-box"
              value="1"
              onClick={() => {
                setTerm("5");
                DivideNumber(term, sum);
              }}
            >
              5
            </Radio.Button>
            <Radio.Button
              className="term-box"
              value="2"
              onClick={() => {
                setTerm("10");
                DivideNumber(term, sum);
              }}
            >
              10
            </Radio.Button>
            <Radio.Button
              className="term-box"
              value="3"
              onClick={() => {
                setTerm("15");
                DivideNumber(term, sum);
              }}
            >
              15
            </Radio.Button>
            <Radio.Button
              className="term-box"
              value="4"
              onClick={() => {
                setTerm("20");
                DivideNumber(term, sum);
              }}
            >
              20
            </Radio.Button>
            <Radio.Button
              className="term-box"
              value="5"
              onClick={() => {
                setTerm("25");
                DivideNumber(term, sum);
              }}
            >
              25
            </Radio.Button>
            <Radio.Button
              className="term-box"
              value="6"
              onClick={() => {
                setTerm("30");
                DivideNumber(term, sum);
              }}
            >
              30
            </Radio.Button>
            <Radio.Button
              className="term-box"
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
              type="number"
              placeholder="Enter Your Term"
              className="input_sum"
              style={{ fontFamily: "Inter" }}
              value={term}
              required
              onChange={(e) => {
                // handleTerm(e);
                console.log(":::", e.target.value);
                setTerm(e.target.value);
              }}
            />
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item className="sum-box">
        <label className="label-title">
          Sum Assured
          <Tooltip placement="top" title="select your investment">
            <BsFillInfoCircleFill style={tooltipStyle} />
          </Tooltip>
        </label>
        <br />
        <Form.Item>
          <Radio.Group
            className="sum-radio-group"
            buttonStyle="solid"
            size="large"
          >
            <Space>
              <Radio.Button
                className="sum-box"
                value="a"
                onClick={() => {
                  setSum("500000");
                  DivideNumber(term, sum);
                }}
              >
                5 Lakhs
              </Radio.Button>
              <Radio.Button
                className="sum-box"
                value="b"
                onClick={() => {
                  setSum("1000000");
                  DivideNumber(term, sum);
                }}
              >
                10 Lakhs
              </Radio.Button>
              <Radio.Button
                className="sum-box"
                value="c"
                onClick={() => {
                  setSum("1500000");
                  DivideNumber(term, sum);
                }}
              >
                15 Lakhs
              </Radio.Button>
              <Radio.Button
                className="sum-box"
                value="d"
                onClick={() => {
                  setSum("2000000");
                  DivideNumber(term, sum);
                }}
              >
                20 Lakhs
              </Radio.Button>
              <Radio.Button
                className="sum-box"
                value="e"
                onClick={() => {
                  setSum("2500000");
                  DivideNumber(term, sum);
                }}
              >
                25 Lakhs
              </Radio.Button>
              <Radio.Button
                className="sum-box"
                value="f"
                onClick={() => {
                  setSum("5000000");
                  DivideNumber(term, sum);
                }}
              >
                50 Lakhs
              </Radio.Button>
              <Title level={5}>OR</Title>
              <Input
                type="number"
                placeholder="Enter your Sum Assured"
                className="input_sum"
                value={sum}
                required
                style={{ fontFamily: "Inter" }}
                onChange={(e) => {
                  // handleTerm(e);
                  console.log(":::", e.target.value);
                  setSum(e.target.value);
                }}
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
          type="number"
          placeholder="Enter your Investment"
          style={{ width: 250, height: 50 }}
          value={investment}
          required
          onChange={(e) => {
            handleInvestment(e);
            console.log(":::", e.target.value);
            setInvestment(e.target.value);
          }}
        />
      </Form.Item>
    </>
  );
};
