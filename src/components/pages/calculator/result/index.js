import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Table from "./Table";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
// import Test from "./Test";
import Test2 from "./Test2";
const Result = () => {
  const location = useLocation();
  const [category, setCategory] = useState("");
  const [age, setAge] = useState();
  const [sum, setSum] = useState();
  const [term, setTerm] = useState();
  useEffect(() => {
    if (location.state) {
      // setdataProducts(products?.data?.catagories);
      setCategory(location.state.info);
      setAge(location.state.age);
      setSum(location.state.sum);
      setTerm(location.state.term);
    }
  }, [location]);
  // console.log("location from userInformation = ", location.state.info);

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
        />
        <Table sum={sum} term={term} category={category} />
        {/* <Test2 /> */}
      </div>
    </>
  );
};

export default Result;
