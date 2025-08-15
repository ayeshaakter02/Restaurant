import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const {
    getTotalCartAmount,
    token,
    food_list,
    cartItems,
    url,
    getDiscountAmount,
  } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/place-order");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <div className="order">
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input
              required
              name="firstName"
              value={data.firstName}
              onChange={onChangeHandler}
              type="text"
              placeholder="First Name"
            />
            <input
              required
              name="lastName"
              value={data.lastName}
              onChange={onChangeHandler}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            className="emaill"
            required
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Email address"
          />
          <input
            className="streett"
            required
            name="street"
            value={data.street}
            onChange={onChangeHandler}
            type="text"
            placeholder="Street"
          />
          <div className="multi-fields">
            <input
              required
              name="city"
              value={data.city}
              onChange={onChangeHandler}
              type="text"
              placeholder="City"
            />
            <input
              required
              name="state"
              value={data.state}
              onChange={onChangeHandler}
              type="text"
              placeholder="State"
            />
          </div>
          <div className="multi-fields">
            <input
              required
              name="zipcode"
              value={data.zipcode}
              onChange={onChangeHandler}
              type="text"
              placeholder="Zip code"
            />
            <input
              required
              name="country"
              value={data.country}
              onChange={onChangeHandler}
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            className="phonee"
            required
            name="phone"
            value={data.phone}
            onChange={onChangeHandler}
            type="text"
            placeholder="Phone"
          />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()} tk</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Discount (10%)</p>
                <p>- {getDiscountAmount()} tk</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount() === 0 ? 0 : 60} tk</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() - getDiscountAmount() + 60}{" "}
                tk
                </b>
              </div>
            </div>
            <Link className="link" to={"/MyOrders"}>
              CONFIRM YOUR ORDER
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;

// onChange={onChangeHandler}
// {getTotalCartAmount()}
// {getTotalCartAmount() === 0 ? 0 : 2}
// {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
