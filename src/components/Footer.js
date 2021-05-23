import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <footer>
        {/* <h3 style={{ textAlign: "left" }}>Developed By -</h3> */}
        <div className="devs">
          <div className="dev">
            <h4>Sanskar Mohapatra</h4>
            <p>Full stack Dev</p>
            <Link className="social">
              <InstagramIcon />
            </Link>
            <Link className="social">
              <GitHubIcon />
            </Link>
            <Link className="social">
              <LinkedInIcon />
            </Link>
            <Link className="social">
              <TwitterIcon />
            </Link>
          </div>
          <div className="dev">
            <h4>Krishanu Shah</h4>
            <p>Frontend Dev</p>
            <Link className="social">
              <InstagramIcon />
            </Link>
            <Link className="social">
              <GitHubIcon />
            </Link>
            <Link className="social">
              <LinkedInIcon />
            </Link>
            <Link className="social">
              <TwitterIcon />
            </Link>
          </div>
          <div className="dev">
            <h4>Divyanshi Chouksey</h4>
            <p>UI/UX Designer</p>
            <Link className="social">
              <InstagramIcon />
            </Link>
            <Link className="social">
              <GitHubIcon />
            </Link>
            <Link className="social">
              <LinkedInIcon />
            </Link>
            <Link className="social">
              <TwitterIcon />
            </Link>
          </div>
        </div>
        <p id="copyright">ⓒ {year} Hotelliste All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
