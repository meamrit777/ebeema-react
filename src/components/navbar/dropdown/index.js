import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const DropItems = [
  {
    title: "High Return Plans",
    image: "./image.heart.png",
    subItems: [
      {
        title: "web ",
      },
      {
        title: "web ",
      },
    ],
  },
  {
    title: "Saving Plans",
    image: "./image.heart.png",
    subItems: [
      {
        title: "web ",
      },
      {
        title: "web ",
      },
    ],
  },
  {
    title: "Team Insurance Plans",
    image: "./image.heart.png",
    subItems: [
      {
        title: "web ",
      },
      {
        title: "web",
      },
    ],
  },
  {
    title: "General Insurance Plans",
    image: "./image.heart.png",
    subItems: [
      {
        title: "web ",
      },
    ],
  },
];

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        // onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {DropItems.map((item, index) => {
          return (
            <li key={index}>
              <a className="dropdown-link">{item.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Dropdown;
