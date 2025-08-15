import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { Typography } from "@mui/material";
import { StoreContext } from "../../context/StoreContext";

const MyOrders = () => {
  const { cartItems, food_list, getTotalCartAmount,getDiscountAmount, url } =
    useContext(StoreContext);
  return (
    <div className="my-orders">
      <Typography
        variant="h5"
        component="div"
        sx={{
          flexGrow: 1,
          color: "#e52b34",
          fontSize: "40px",
          margin: "70px",
          fontFamily: "Dancing Script",
          fontWeight: 800,
        }}
      >
        My Orders
      </Typography>
      <div className="order">
        <div className="order-items">
          <div className="order-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="order-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price} tk</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]} tk</p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="order-bottom">
          <div className="order-total">
            <h2>Cash on Delivery</h2>
            <div>
              <div className="order-total-details">
                <b>Your Total Bill</b>
                <b>
                  {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() - getDiscountAmount() + 60}{" "}
                tk
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
