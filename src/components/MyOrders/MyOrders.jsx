import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import ConfrimOrder from "../../components/ConfrimOrder/ConfrimOrder";
import { Typography } from "@mui/material";

const MyOrders = () => {
  return (
    <div className="my-orders">
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
        My Orders
      </Typography>
      <ConfrimOrder />
    </div>
  );
};

export default MyOrders;
