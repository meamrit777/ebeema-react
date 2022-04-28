import React from "react";
import "./Login.css";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="log-main">
      <div className="log-submain">
        <div className="log-img">
          <Link to="/">
            <img src="./image/logo.png" alt="" className="logo" />
          </Link>
        </div>
        <div className="log-form">
          <form>
            <div className="login">
              <label className="log-title">Phone Number</label>
              <input
                type="text"
                required
                placeholder="Enter Phone Number"
                className="log-placeholder phone-place"
              />
            </div>
            <div className="login">
              <label className="log-title">Password</label>
              <div className="input-password">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter Phone Number"
                  className="log-placeholder password-place"
                />
                <a className="toggle-icon" onClick={togglePassword}>
                  {showPassword ? (
                    <FiEye className="togglecolor" />
                  ) : (
                    <FiEyeOff className="togglecolor" />
                  )}
                </a>
              </div>
            </div>
            <div className="log-remme-fgtpwd">
              <div className="magic-checkbox">
                <input
                  id="demo-form-checkbox"
                  type="checkbox"
                  name="remember"
                />
                <label for="demo-form-checkbox" className="text-sm">
                  Remember Me
                </label>
              </div>
              <a className="forgot-paswd" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="login-signin">
              <button className="signin-button">Sign In</button>
            </div>
          </form>
          <div className="login-register">
            <p>
              Need an account
              <Link
                to="/Register"
                style={{
                  textDecoration: "none",
                  color: "#558eff",
                  paddingLeft: 3,
                }}
              >
                Register
              </Link>
            </p>
          </div>
          <div className="log-backtohome">
            <Link to="/">
              <button className="backToHome">Back to home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
