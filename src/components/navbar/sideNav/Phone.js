import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import phoneIcon from "../../../components/pages/SvgIcons/frontend/phone.svg";
function Phone() {
  return (
    <div className="phone-icon">
      <img src={phoneIcon} alt="phone contact" />
    </div>
  );
}

export default Phone;
