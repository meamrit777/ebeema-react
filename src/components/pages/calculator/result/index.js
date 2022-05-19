import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Table from "./Table";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
// import Test from "./Test";
import Test2 from "./Test2";
const Result = () => {
  const userValue = useLocation();
  const [category, setCategory] = useState("");
  const [age, setAge] = useState();
  const [sum, setSum] = useState();
  const [term, setTerm] = useState();
  const [mop, setMop] = useState("yearly");
  const [userFormValues, setUserFormValues] = useState();
  const [featureCheckbox, setFeatureCheckBox] = useState();
  const [companyCheckbox, setCompanyCheckbox] = useState();
  const [userBirthDate, setUserBirthDate] = useState();

  useEffect(() => {
    if (userValue.state) {
      // setdataProducts(products?.data?.catagories);
      setCategory(userValue.state.info);
      setAge(userValue.state.age);
      setSum(userValue.state.sum);
      setTerm(userValue.state.term);
      setUserFormValues(userValue.state.userFormValues);
      console.log("userBirthDate1", userValue.state);
      // setUserBirthDate(location.state.userBirthDate);
    }
  }, [userValue]);
  console.log("userBirthDate", age);
  return (
    <>
      <div class="top-navigation">
        <Link to="/">Home </Link> /
        <Link to="/calculator"> Insurance Calculate </Link> / {category}
      </div>
      <div className="filter-split">
        <Filter
          age={age}
          setAge={setAge}
          term={term}
          setTerm={setTerm}
          sum={sum}
          setSum={setSum}
          mop={mop}
          setMop={setMop}
          category={category}
          featureCheckbox={featureCheckbox}
          setFeatureCheckBox={setFeatureCheckBox}
          userBirthDate={userBirthDate}
        />
        <Table
          sum={sum}
          term={term}
          category={category}
          userFormValues={userFormValues}
          mop={mop}
          setFeatureCheckBox={setFeatureCheckBox}
        />
        {/* <Test2 /> */}
      </div>
    </>
  );
};

export default Result;
