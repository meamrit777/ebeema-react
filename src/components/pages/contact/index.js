import React from "react";
import "./contact.css";
import contactinfo from "./ContactData";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import MapContainer from "./Map";
import Recaptcha from "react-google-recaptcha";

const CustomButton = withStyles({
  root: {
    background: "#3987FB",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    width: "175px",
    padding: "10px 0px",
  },
  input: {
    position: "relative",
    border: "1px solid #ccc",
    fontSize: 14,
    width: "380px",
    height: "12px",
    padding: "10px 12px",
  },
  inputBase: {
    border: "2px solid blue",
  },
})((props) => <Button {...props} />);

function Contact() {
  const handleToken = (token) => {
    if (
      (currentForm) => {
        return { ...currentForm, token };
      }
    );
  };
  const handleExpire = () => {
    if (
      (currentForm) => {
        return { ...currentForm, token: null };
      }
    );
  };
  return (
    <div>
      <div className="banner-contact banner">
        <div className="contact_space">
          <h1 className="contact-text">Contact</h1>
        </div>
      </div>
      <div className="main-div">
        <div className="sub-div">
          <div className="left-div">
            {contactinfo.map((info) => {
              return (
                <div className="contact-detail">
                  <div className="contact-container">
                    {info.image}
                    <div className="contact-info">
                      <h4 className="contact-title">{info.title}</h4>
                      <p className="contact-desc">{info.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="right-div">
            <form noValidate>
              <div className="contact-search" maxWidth="xs">
                <div className="contact-value">Full name</div>
                <TextField
                  variant="outlined"
                  size="small"
                  rows="1"
                  required
                  fullWidth
                  id="fullname"
                  placeholder="Type your full name"
                  name="fullname"
                  autoComplete="fullname"
                  autoFocus
                  className="input"
                />
              </div>
              <div className="contact-email-phno">
                <div className="contact-search">
                  <div className="contact-value">Your e-mail address</div>

                  <TextField
                    variant="outlined"
                    size="small"
                    rows="1"
                    required
                    name="email"
                    placeholder="Type your email address"
                    type="email"
                    id="email"
                    autoComplete="email"
                  />
                </div>
                <div className="contact-search">
                  <div className="contact-value">Your Phone Number</div>
                  <TextField
                    variant="outlined"
                    size="small"
                    rows="1"
                    required
                    name="number"
                    placeholder="Type your number"
                    type="text"
                  />
                </div>
              </div>
              <div className="contact-search">
                <div className="contact-value">Message</div>
                <TextField
                  variant="outlined"
                  size="medium"
                  multiline={true}
                  rows={4}
                  fullWidth
                  required
                  id="message"
                  placeholder="Type your Message Here"
                  name="message"
                  autoComplete="message"
                />
              </div>
              <div className="contact-captcha">
                <Recaptcha
                  sitekey="6LdNw9odAAAAAGPD3DRi120MUwC1NTV-Ewy-t6lj"
                  onChange={handleToken}
                  onExpire={handleExpire}
                />
              </div>

              <div className="contact-send-btn">
                <CustomButton>Send</CustomButton>
              </div>
            </form>
          </div>
        </div>
        <MapContainer />
      </div>
    </div>
  );
}

export default Contact;
