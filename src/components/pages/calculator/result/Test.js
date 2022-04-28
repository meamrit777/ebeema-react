import React, { useState } from "react";

const Test = () => {
  const [firstName, setFirstName] = useState("");
  const [showName, setShowName] = useState(false);

  const inputHandler = (e) => {
    // let updatedName = e.target.value;
    // this.setState({ firstName: updatedName });
    setFirstName(e.target.value);
    console.log("3663", e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // this.setState({
    //   showName: true,
    // });
    setShowName(true);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>Enter the Name</label>
        <input
          type="text"
          name="firstName"
          onChange={inputHandler}
          value={firstName}
        />
        <button type="submit" onClick={onSubmitHandler}>
          Submit
        </button>
        {showName && <p>"FirstName: " {firstName}</p>}
      </form>
    </div>
  );
};
export default Test;
