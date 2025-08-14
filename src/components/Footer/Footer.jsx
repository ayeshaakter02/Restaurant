import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#e52b34",
              fontSize: "40px",
              fontFamily: "Dancing Script",
              fontWeight: 800,
            }}
          >
            Restaurant.
          </Typography>
        </div>
        <div className="footer-content-right">
          <h3>Contact us</h3>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@restaurant.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright ©2025 All rights reserved | Developed by{" "}
        <Link to={"https://www.facebook.com/ar.badhon.71"}>Ayesha</Link>
      </p>
    </div>
  );
};

export default Footer;
