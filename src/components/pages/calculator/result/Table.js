import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllResult } from "../../../../redux/result/ResultAction";
import "./index.css";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const Table = ({ sum, term, category }) => {
  const [resultData, setResultData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [planVisible, setPlanVisible] = useState(false);

  const results = useSelector((state) => state.allResults.results);
  console.log("hola", resultData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllResult());
  }, []);

  useEffect(() => {
    if (results?.data) {
      setResultData(Object.values(results.data.products));
    }
  }, [results]);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const showViewModal = () => {
    setPlanVisible(true);
  };

  const handleViewCancel = () => {
    setPlanVisible(false);
  };

  return (
    <div className="">
      <div className="compare-header-info">
        <div className="sumassured-items">
          <div className="sumassured-title">
            <h1>Sum Assured</h1>
          </div>
          <div className="sumassured-number-wrapper">
            <p>{sum}</p>
          </div>
        </div>
        <div className="term-items">
          <div className="term-title">
            <h1>Term</h1>
          </div>
          <div className="term-number-wrapper">
            <p>{term}</p>
          </div>
        </div>
      </div>
      <div className="compare-search-sort">
        <p className="left-sort">{category} : Plans match your search</p>
        <div className="right-sort"></div>
      </div>
      <div className="compare-plans">
        {resultData.map((data, index) => (
          <>
            <table class="table compare-result-table">
              <tbody>
                <tr className="content-compare">
                  <td className="compare-parts line-rht-cmp">
                    <p className="content-plan" style={{ fontSize: 12 }}>
                      {data.company.name}
                    </p>
                    <img
                      src={`http://ispl.ebeema.com/images/company/${data.company.logo}`}
                      alt="company logo"
                      width="50%"
                    />
                    <p className="prod-name">{data.name}</p>
                  </td>

                  <td className="details-box line-rht-cmp">
                    <p style={{ fontSize: 12 }}>Premium Amount</p>
                    <strong>RS.{data.premiumAmount}</strong>
                    <p>Age</p>
                    <a onClick={showModal}>Payment Schedule</a>
                    <Modal
                      className="user-modal"
                      visible={visible}
                      // style={{  }}
                      title="Payback Schedule"
                      footer={null}
                      maskClosable={true}
                      onCancel={handleCancel}
                    >
                      <p>sagun dost</p>
                    </Modal>
                  </td>
                  <td className="prem-box line-rht-cmp">
                    <p style={{ fontSize: 12 }}>Estimated Maturity Value</p>
                    <strong>RS.{data.totalPremiumAmount}</strong>
                  </td>

                  <td class="benefit-box line-rht-cmp">
                    <div className="pay-term">
                      <p
                        style={{ border: "1px solid #ddd", padding: "2px 4px" }}
                      >
                        <strong>Term: </strong>
                        {term} Y
                      </p>
                      <p
                        style={{ border: "1px solid #ddd", padding: "2px 4px" }}
                      >
                        <strong> Pay Term: </strong>Y
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="select-plan-box">
                      <button className="view-plan" onClick={showViewModal}>
                        View Plan
                      </button>
                      <Modal
                        className=""
                        visible={planVisible}
                        // style={{ top: "5%" }}
                        title="View Plan"
                        footer={null}
                        maskClosable={true}
                        onCancel={handleViewCancel}
                      >
                        <div class="view-plan-content-wrapper">
                          <div class="invoice-header-wrapper">
                            <div class="web-logo">
                              <img src="https://ebeema.com/frontend/img/logo.png" />
                            </div>
                            <div class="company-invoice-wrapper">
                              <div class="invoice-company-logo">
                                <img src="https://ebeema.com/images/company/1636956440_jpeg" />
                              </div>
                              <div class="invoice-company-name">
                                <p>
                                  NLIC Nepal Life Insurance
                                  Company&nbsp;&nbsp;&nbsp;(Jeevan Jyoti)
                                </p>
                              </div>
                            </div>
                          </div>
                          {data.benefit_details}
                        </div>
                      </Modal>
                      <br />
                      <button className="select-plan">Select Plan</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ))}
      </div>
    </div>
  );
};

export default Table;
