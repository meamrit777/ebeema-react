import React from "react";
import data from "./BlogData";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="b-search">
        <div className="inputWithButton">
          <i class="fa fa-search" />
          <input
            type="text"
            name="search"
            value=""
            class="form-control"
            placeholder="want to search? Type here"
          />
          <button>Search</button>
        </div>
      </div>
      <div className="blog-main">
        {data.map((list) => {
          return (
            <div className="blog-submain">
              <div className="blog-submain1">
                <div className="blog_img1">
                  {list.image}
                  {/* <img className="img_1" src="./image/logo.png" alt="" /> */}
                </div>
                <div className="b-tt">
                  <p className="b-title">
                    {list.title}
                    <span className="b-timeperiod">{list.timeperiod}</span>
                  </p>
                  <p className="b-desc">{list.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="b-view">
        <button className="b-btn">View more posts</button>
      </div>
    </div>
  );
};

export default Blog;
