import React, { useState, useEffect } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const DropItems = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  const [subMenuId,setSubMenuId]=useState(1)
  const [subMenu,setSubMenu]=useState([])
  const handleClick = () => setClick(!click);

  useEffect(() => {
    DropItems.filter(item => item.id == subMenuId).map((value,key)=>{
      value.subItems && value.subItems.map((subValue,key)=>{
        subMenu.push(subValue.title)
      })
    })
  },[subMenuId]);
  return (
    <>
      <ul
        // onClick={handleClick}
        className={click ? "parent-dropdown clicked" : "parent-dropdown"}
      >
        <div className="dropdown-main-items">
          {DropItems.map((item, index) => {
            return (
              <li key={index} data-id={item.id}>
                <a className="dropdown-link">{item.title}</a>
              </li>
            );
          })}
        </div>
        <div class="vl"></div>
        <div className="dropdown-sub-items"></div>
      </ul>
    </>
  );
}
export default Dropdown;
