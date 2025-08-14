import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import "./homePage.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Box className="content">
        <Typography component="h6" variant="h6">
          Satisfy Your Cravings
        </Typography>
        <Typography component="h2" variant="h2">
          Delicious Foods With Wonderful Eating
        </Typography>
        <Typography component="p">
          Where Every Bite Tells a Delicious Story!
        </Typography>
        <Link to="/table-booking">
          <Button variant="contained" type="button">
            Book Table Now
          </Button>
        </Link>
        <Link to="/discount">View Offers</Link>
        <a href="#explore-menu" className="menu">
          View Menu
        </a>
        <Typography component="h6">Open: (8 AM - 12 PM)</Typography>
      </Box>
    </div>
  );
};

export default Header;
