// import React from 'react'
// import './Header.css'

// const Header = () => {
//   return (
//     <div className='header'>
//         <div className="header-contents">
//             <h2>Order your favorite food here</h2>
//             <p>Choose from a diverse menu featuring a delactable array of dishes crafted with the finest ingredients and satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
//             <a href="#explore-menu"><button className='buttonwl'>View Menu</button></a>
//         </div>
//     </div>
//   )
// }

// export default Header

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import "./homePage.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    // const [menu, setMenu] = useState("home");
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
        <a href="#explore-menu" className="menu">View Menu</a>
        <Typography component="h6">Open: (8 AM - 12 PM)</Typography>
      </Box>
    </div>
  );
};

export default Header;
