import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllResult } from "../../../../redux/result/ResultAction";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { Modal, Tooltip } from "antd";

const Table = ({ sum, term, category, userFormValues, mop }) => {
  const results = useSelector((state) => state.allResults.results);
  // console.log("results", results);
  const dispatch = useDispatch();

  const [resultcontent, setResultContent] = useState([]);
  const [viewplan, setViewPlan] = useState(false);
  const [modalData, setModalData] = useState();
  const [showviewModal, setViewShowModal] = useState(false);
  const [showfaicon, setShowFaIcon] = useState(true);
  const [company, setCompany] = useState();
  const [parentCompany, setParentCompany] = useState();
  const navigate = useNavigate();

  const toggleIcon = () => {
    setShowFaIcon(!showfaicon);
  };

  useEffect(() => {
    if (results?.data) {
      setResultContent(Object.values(results.data.products));
    }
  }, [results]);
  useEffect(() => {
    setModalData(resultcontent);
  }, [resultcontent]);
  // console.log("resultcontent", resultcontent);

  useEffect(() => {
    dispatch(fetchAllResult());
  }, []);

  const showViewPlan = () => {
    setViewPlan(true);
  };
  const handleViewPlan = () => {
    setViewPlan(false);
  };
  const showViewModal = () => {
    setViewShowModal(true);
  };
  // console.log("modalDAta", modalData);

  const confirmation = () => {
    if (sum) {
      navigate("/confirm", {
        state: {
          sum,
          term,
          category,
          userFormValues,
          mop,
          company,
          parentCompany,
        },
      });
    } else {
      console.log("error");
    }
  };
  // console.log("hola", company);
  return (
    <div className="">
      <div className="compare-header-info">
        <div className="sumassured-items">
          <div className="sumassured-title">
            <h2>Sum Assured</h2>
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
        {resultcontent.map((data, index) => (
          <div>
            <table class="table compare-result-table">
              <tbody>
                <tr className="content-compare">
                  <td className="compare-parts line-rht-cmp">
                    <p className="content-plan" style={{ fontSize: 12 }}>
                      {data.company.name}
                    </p>
                    <img
                      src={`http://ispl.ebeema.com/images/company/${data.company.logo}`}
                      width="50%"
                    />
                    <p className="prod-name">{data.name}</p>
                  </td>

                  <td className="details-box line-rht-cmp">
                    <span style={{ color: "#616161", fontSize: "13px" }}>
                      Premium Amount
                    </span>
                    <p style={{ paddingTop: "5px" }}>
                      <strong>Rs.{data.premiumAmount}</strong>
                    </p>
                    <p style={{ color: "#616161" }}>Age</p>
                    <p>
                      <strong>{data.currentAge}Y</strong>
                    </p>

                    <span style={{ color: " #337ab7" }}>
                      Payment Schedule
                      {/* <i
                        class="fa fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Payment Schedule"
                        style={{ color: "#777" }}
                      ></i> */}
                    </span>
                  </td>
                  <td className="prem-box line-rht-cmp">
                    <span style={{ color: "#616161", fontSize: "13px" }}>
                      Estimated Maturity value
                    </span>
                    <p style={{ paddingTop: "5px" }}>
                      <strong>Rs.{data.totalPremiumAmount}</strong>
                    </p>
                  </td>
                  <td className="prem-box line-rht-cmp">
                    <div className="pay-term">
                      <p
                        style={{ border: "1px solid #ddd", padding: "2px 4px" }}
                      >
                        <strong>Term: </strong>
                        {data.currentTerm} Y
                      </p>
                      <p
                        style={{ border: "1px solid #ddd", padding: "2px 4px" }}
                      >
                        <strong>Pay Term: </strong>
                        {data.payingTerm} Y
                      </p>
                    </div>
                    <p className="benefit-lists">
                      {data.availableFeatures.map((word) => (
                        <div>
                          <p className="availablefeatures-name">
                            <span>{word.name}</span>
                            <a onClick={toggleIcon}>
                              {showfaicon ? (
                                <i
                                  class="fa fa-times to-right cross-fa"
                                  aria-hidden="true"
                                />
                              ) : (
                                <i
                                  class="fa fa-check-circle"
                                  aria-hidden="true"
                                />
                              )}
                            </a>
                          </p>
                        </div>
                      ))}
                    </p>
                  </td>

                  <td>
                    <div className="select-plan-box">
                      <button
                        className="view-plan"
                        // className="select-plan"
                        onClick={() => {
                          setModalData(data);
                          // console.log("datan", data);
                          showViewPlan();
                        }}
                      >
                        View Plan
                      </button>

                      <br />

                      <button
                        onMouseEnter={() => {
                          setCompany(data.name);
                          setParentCompany(data.company.name);
                        }}
                        className="select-plan"
                        onClick={() => {
                          confirmation();
                        }}
                      >
                        Select Plan
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
        <Modal
          className="user-modal"
          visible={viewplan}
          title="View Plan"
          style={{ top: "1%" }}
          footer={null}
          maskClosable={false}
          onCancel={handleViewPlan}
        >
          <div>
            <div className="modal-viewplan">
              <img className="modal-logo" src="./image/logo.png" alt="" />
            </div>
            <div className="company-invoice-wrapper">
              <div style={{ width: "35%" }}>
                <img
                  src={`http://ispl.ebeema.com/images/company/${modalData?.company?.logo}`}
                  width="100%"
                />
              </div>
              <div className="invoice-company-name">
                <p className="invoice-companyy-title">
                  {modalData?.company?.name} ({modalData?.name})
                </p>
              </div>
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: modalData?.benefit_details }} //to remove html tag from api
            ></p>
          </div>
        </Modal>
      </div>
      <p>
        *Maturity Value is subject to change as per each year's bonus rate
        published by Beema Samiti.
      </p>
    </div>
  );
};

export default Table;
