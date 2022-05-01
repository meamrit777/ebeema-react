import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllResult } from "../../../../redux/result/ResultAction";
import "./index.css";

const Table = ({ sum, term, category }) => {
  const [resultData, setResultData] = useState([]);

  const results = useSelector((state) => state.allResults.results);
  console.log("!!!!!", results?.data?.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllResult());
  }, []);

  useEffect(() => {
    if (results?.data) {
      setResultData(results.data.products);
    }
  }, [results]);
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

        {Object.keys(resultData)?.map((data, index) => (
          <>{data.id}</>

        ))}
        <table class="table compare-result-table">
          <tbody>
            <tr className="content-compare">
              <td className="compare-parts line-rht-cmp">
                <p className="content-plan"></p>
                <img />
                <p className="prod-name"></p>
              </td>

              <td className="details-box line-rht-cmp">
                <span className="gap-0"></span>
                <p className="sum-title"></p>
                <p className="prem-val val-amount"></p>
                <span className="gap-0"></span>
                <p className="details-title2"></p>
                <p className="details-val2 val-amount"></p>
                <p className="details-title2 mb-block"></p>

                <p details-val2 val-amount></p>
              </td>
              <td className="prem-box line-rht-cmp">
                <span className="gap-0"></span>
                <p className="details-title2"></p>

                <p details-val2 val-amount></p>
              </td>
              <td className="mb-benefits">
                <div className="benefits-button">
                  <p>
                    <span></span> <i className="fa fa-chevron-down"></i>
                  </p>
                </div>
              </td>
              <td class="benefit-box line-rht-cmp">
                <ul class="term-details mb-none-block ">
                  <li>
                    <strong>Term :</strong>&nbsp;<span>20 Y</span>
                  </li>
                  <li>
                    <strong>Pay Term :</strong>&nbsp;<span>16 Y</span>
                  </li>
                </ul>
                <ul class="benefit-lists features">
                  <li class="text-primary text-capitalize">
                    <p class="result-feature">
                      <span>ADB</span>

                      <i
                        class="fa fa-times to-right cross-fa"
                        aria-hidden="true"
                      ></i>
                    </p>
                  </li>

                  <li class="text-primary text-capitalize">
                    <p class="result-feature">
                      <span>PWB</span>

                      <i
                        class="fa fa-times to-right cross-fa"
                        aria-hidden="true"
                      ></i>
                    </p>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
