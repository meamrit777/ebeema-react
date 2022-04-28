import React from "react";
import "./SocialFollow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function SocialFollow() {
  return (
    <div className="social-container">
      <a
        href="https://www.facebook.com/Ebeema.Official"
        className="facebook social"
      >
        {/* className-> (facebook social),(instagram social) is used because in css 'a.social' will change on both
       but 'a.facebook' and "a.intagram" will change only on their respective */}
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/ebeema.nepal/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/company/ebeema2/mycompany/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}
export default SocialFollow;
