import React, { useState } from "react";
import "./AboutUs.css";
import data from "./AboutData";
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from "react-icons/gr";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 375) : text}
      <br />
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? (
          <a className="readmore-class">Read more</a>
        ) : (
          <a className="readmore-class">Read less</a>
        )}
      </span>
    </p>
  );
};
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="container-1">
          <p>
            <h1 className="mb-4">About Ebeema</h1>
            <ReadMore>
              Ebeema, Nepal's 1st "Online"​ Insurance portal facilitating with
              both Life & Non-Life insurance products where the user can compare
              and buy insurance of their choice online from top companies.
              Ebeema is a start-up seeking to truly disrupt the insurance
              industry in Nepal using advanced technologyand an innovative
              business model. Our core team includes a dynamic and young...
              group of entrepreneurs who have come together to really change the
              financial landscape by introducing tried and tested technologies
              widely used internationally. Targeting the massively under insured
              population of Nepal, Ebeema was founded in 2015. The idea was born
              right after the earthquake back in 2015. The situation was crazy
              and what worried everyone, including the founders, were the
              financial, physical and emotional loss. We couldn’t get back what
              we lost and that was the problem we wanted to solve. Insurance was
              the answer but the whole process of getting and claiming insurance
              was difficult and cumbersome. The idea was to make insurance
              simple and accessible. With the tag line “Say Hi to Easy”
            </ReadMore>
          </p>
        </div>
        <div>
          <img
            className="aboutPhoto"
            src="./image/aboutImages/team.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="features-row">
        <div className="feat">
          <div className="feat-1">
            <div className="feat-2">
              <div className="hello">
                <img
                  className="about-avatar"
                  src="./image/aboutImages/like.png"
                  alt=""
                />
              </div>
              <div className="about-feature">
                <h2>Industry Expert</h2>
                <p>
                  Ebeema is known to give its customers advice on which
                  insurance would be right for them. Therefore, we are experts
                  not only in one insurance company but the industry itself.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="feat">
          <div className="feat-1">
            <div className="feat-2">
              <div className="hello">
                <img
                  className="about-avatar"
                  src="./image/aboutImages/like.png"
                  alt=""
                />
              </div>
              <div className="about-feature">
                <h2>Expert Peoples</h2>
                <p>
                  We have a team who go have completed various trainings in
                  order to give customers the best advice in the market.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="feat">
          <div className="feat-1">
            <div className="feat-2">
              <div className="hello">
                <img
                  className="about-avatar"
                  src="./image/aboutImages/tauko.png"
                  alt=""
                />
              </div>
              <div className="about-feature">
                <h2>Excellent Support</h2>
                <p>
                  We, the team of hardworking, experienced and dedicated
                  especially aftersales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="mission-back" src="./image/welcome-bg.png" alt="" /> */}

      <div className="mission_block">
        <div className="mission">
          <div className="mission_values">
            <h1 className="mission_head_font">Mission & Values</h1>
            <p>
              Mission: is to make insurance simple, seamless, and accessible to
              everyone and as a result help in developing the country’s
              insurance and financial sector.
            </p>
            <p>
              Vision: Contribute to nationwide financial security and improved
              insurance services
            </p>
            <a href="" className="mission_arrow">
              <img src={"./image/CTA-arrow.png"} alt="" />
            </a>
          </div>
        </div>
        <div className="value_wrapper">
          <div className="value_wrapper_col">
            <div className="value_wrapper_col_1">
              <div className="value_wrapper_col_2">
                <p className="value_para">01</p>
                <div className="value_heading_pad">
                  <h3 className="value_heading">Customer First</h3>
                  <p>
                    Ebeema is a proud company with 100% satisfaction to the
                    customer as of date. We also are leading in after service
                    regarding insurance.
                  </p>
                </div>
              </div>
              <div className="value_wrapper_col_2">
                <p className="value_para">02</p>
                <div className="value_heading_pad">
                  <h3 className="value_heading">Impartial</h3>
                  <p>
                    Customers can choose from any plan they see fit. We do not
                    favor any company but we favor the client.
                  </p>
                </div>
              </div>
              <div className="value_wrapper_col_2">
                <p className="value_para">03</p>
                <div className="value_heading_pad">
                  <h3 className="value_heading">Professional</h3>
                  <p>
                    Ebeema is a pioneer in the digital insurance industry and
                    have amazing state of the art digital platform. We are
                    professional about the way we deal with our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="talk_to_export">
        <h6 className="talk_heading">Talk to an expert</h6>
        <p>
          Our expert will call you
          <strong>
            <em> Right Away</em>
          </strong>
        </p>
        <div className="talk-now">
          <a href="/contact" className="talk_button">
            Talk Now
            <img src={"./image/CTA-arrow.png"} alt="" />
          </a>
        </div>
      </div>
      <div>
        <div className="meet_teams">
          <h2 className="our_expert_team">Our Expert Team</h2>
          <div className="team_card_holder">
            {data.map((teamInfo) => {
              return (
                <div className="team_card">
                  <div className="team_image_holder">{teamInfo.image}</div>
                  <div className="card_description">
                    <h2>{teamInfo.Name}</h2>
                    <p>{teamInfo.Position}</p>
                    <p>{teamInfo.Phone}</p>
                    <p>{teamInfo.Email}</p>
                    <div>
                      <a href={teamInfo.Linkedin} className="team_linkedin">
                        <GrLinkedinOption size="1rem" />
                      </a>

                      <a href={teamInfo.Facebook} className="team_facebook">
                        <GrFacebookOption size="1rem" />
                      </a>

                      <a href={teamInfo.Twitter} className="team_twitter">
                        <GrTwitter size="0.9rem" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
