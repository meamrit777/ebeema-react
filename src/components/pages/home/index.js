import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import playbutton from "../SvgIcons/playbutton.svg";
import calculatorIcon from "../SvgIcons/calculator.svg";
import HomeData from "./HomeData";
import { HomeDataPolicy, whyEbeemaData, howWorkData } from "./HomeData";
import { Carousel, Modal } from "antd";
import Corporate from "./Corporate";

function Home() {
  const [youtubeVisible, setYoutubeVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const initialValues = {
    Name: "",
    phoneNo: "",
    email: "",
    organization: "",
    employeeSize: "",
    message: "",
  };
  const [userFormValues, setUserFormValues] = useState(initialValues);

  const showModal = () => {
    setVisible(true);
  };
  // const handleClick = () => {
  //   console.log("handle click");
  // };
  const handleCancel = () => {
    setVisible(false);
  };
  const showYoutubeModal = () => {
    setYoutubeVisible(true);
  };

  const handleYoutubeCancel = () => {
    setYoutubeVisible(false);
  };

  const items = [
    {
      title: "Term Life Plans",
      image: (
        <img
          className=""
          src="./image/homeImages/termlife-home-banner.png"
          alt="term life plan image"
        />
      ),
      desc: "Protect your family even when you aren't around",
    },
    {
      title: "Child Plans",
      image: (
        <img
          className=""
          src="./image/homeImages/child-home-banner.png"
          alt="childplan Image"
        />
      ),
      desc: "Give wings to your child's future",
    },
  ];
  return (
    <>
      <section className="banner-section">
        <div className="home-container">
          <div className="banner-wrapper">
            <div className="left-banner-wrapper">
              <div className="left-banner-text">
                <h1>
                  Compare the <b>Best Insurance Policies</b> for you and your
                  family.
                </h1>
                <div className="video-block">
                  <div className="video-wrapper">
                    <div className="video-play-button" id="stepTwo">
                      <a className="oveflowHidden" onClick={showYoutubeModal}>
                        <img src={playbutton} alt="tutorial playbutton" />
                      </a>
                      <p>Watch tutorials</p>
                      <Modal
                        className="youtube-modal"
                        visible={youtubeVisible}
                        style={{ top: "25%" }}
                        footer={null}
                        maskClosable={true}
                        onCancel={handleYoutubeCancel}
                      >
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://youtube.com/embed/foFSEi24BpI"
                          frameborder="0"
                          allow="autoplay; encrypted-media"
                          allowfullscreen
                          title="video"
                        />
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
              <div className="select-insurance-type">
                <form
                  className="insurance-product-compare"
                  method="get"
                  action="#"
                >
                  <select className="insurance-lists" onChange={(e)=>{
                      localStorage.setItem('category',e.target.value)
                    }}>
                    <option value="" selected="selected" >
                      Select a insurance type
                    </option>
                    <option value="endowment">Endowment/Investment</option>

                    <option value="money-back">Money-back</option>

                    <option value="children">Child</option>

                    <option value="whole-life">Whole-life</option>

                    <option value="couple">Couple</option>

                    <option value="retirement-pension">
                      Retirement/ Pension
                    </option>

                    <option value="term">Term Life</option>
                  </select>
                  <Link to="/calculator" className="insurance-type-submit">
                    Compare
                    <img src={calculatorIcon} alt="compare calculator" />
                  </Link>
                </form>
              </div>
            </div>
            <div className="right-banner-wrapper">
              <Carousel dotPosition="right" autoplay className="home-carousel">
                {items.map((data) => {
                  return (
                    <div className="home-banner-wrapper">
                      <div className="banner-title">
                        {data.title}
                        <p className="banner-desc">{data.desc}</p>
                      </div>
                      <div className="banner-image">{data.image}</div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
          <div className="banner-insurance-product-wrapper1">
            <div className="insurance-product-wrapper">
              <div className="list-of-insurance-policy">
                {HomeData.map((plan) => {
                  return (
                    <div className="plan-container">
                      <div className="plan-img">{plan.image}</div>
                      <div className="plan-desc">
                        <p>
                          <b>{plan.title}</b>
                          <br />
                          {plan.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="banner-insurance-product-wrapper2">
            <div className="insurance-product-wrapper2">
              <div className="list-of-insurance-policy">
                {HomeDataPolicy.map((policy) => {
                  return (
                    <div className="plan-container">
                      <div className="plan-img">{policy.image}</div>
                      <div className="plan-desc">
                        <p>
                          <b>{policy.title}</b>
                          <p>{policy.desc}</p>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="corporate-plan-section">
        <div className="corporate-plan-content">
          <h1>Corporate plan</h1>
          <p>if you want to know more about plans for your employees.</p>
          <div class="get-assistance">
            <button
              onClick={showModal}
              type="button"
              className="corporate-plan-button"
            >
              Get assistance
            </button>
          </div>
        </div>
      </section>
      <section className="why-different">
        <div className="why-diff-title">
          <h1> Why eBeema?</h1>
        </div>
        <div className="why-diff-description">
          <div className="why-diff-left">
            <div className="diff-top">
              <h2>
                Why are we different
                <a href="#">
                  <img
                    className="arrow-img"
                    src="https://ebeema.com/frontend/img/different-arrow.png"
                    alt="arrow"
                  />
                </a>
              </h2>
            </div>

            <p>
              Leveraging cutting edge technology and data driven software, we
              combine the latest with our old fashioned values of customer
              service at the highest level to provide you with an unparalleled
              experience and service.We do everything to make insurance
              accessible and simple.
            </p>
          </div>
          <div className="why-diff-right">
            {whyEbeemaData.map((why) => {
              return (
                <div className="why-diff-right-each">
                  <a className="why-diff-right-img">{why.image}</a>
                  <h1>{why.title}</h1>
                  <p>{why.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <div className="container-fluid">
          <div className="how-work-title">
            <h2>How eBeema works</h2>
          </div>
          <div className="working-bar">
            {howWorkData.map((work) => {
              return (
                <div className="working-bar-text">
                  {work.image}
                  <p className="how-first-prag">{work.title}</p>
                  <p>{work.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="compare-now">
        <div className="compare-color">
          <div className="compare-left-img">
            <img
              src="https://ebeema.com/uploads/compare.png"
              alt="compare insurance"
            />
          </div>
          <div className="compare-right">
            <h3>You’ve made it here!</h3>
            <p>
              We try to make your life as easy as cheese. Compare insurance to
              see which plan fits your needs.
            </p>
            <Link to="/calculator" className="fa fa-calculator compare-btn">
              Compare Now
            </Link>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </section>
      <section className="testimonials-section">what our customers say</section>
      <section className="contsiner-associations">our associations</section>
      <Modal
        className="user-modal"
        visible={visible}
        style={{ top: "5%" }}
        title="Your Information"
        footer={null}
        maskClosable={true} //modal will close when clicked outside the area of modal unless the value is {falsw}
        // onOk={handleClick}
        onCancel={handleCancel}
      >
        <Corporate
          userFormValues={userFormValues}
          setUserFormValues={setUserFormValues}
        />
      </Modal>
    </>
  );
}
export default Home;
