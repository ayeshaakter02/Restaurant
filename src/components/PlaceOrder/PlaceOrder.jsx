// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";
// import "./PlaceOrder.css";

// const PlaceOrder = () => {
//   const {
//     getTotalCartAmount,
//     token,
//     food_list,
//     cartItems,
//     url,
//     getDiscountAmount,
//   } = useContext(StoreContext);

//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     address: "",
//     area: "",
//     phone: "",
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!token) {
//       navigate("/place-order");
//     } else if (getTotalCartAmount() === 0) {
//       navigate("/cart");
//     }
//   }, [token]);

//   return (
//     <div className="order">
//       <form className="place-order">
//         <div className="place-order-left">
//           <p className="title">Delivery Information</p>
//           <div className="multi-fields">
//             <input
//               required
//               name="firstName"
//               value={data.firstName}
//               onChange={onChangeHandler}
//               type="text"
//               placeholder="First Name"
//             />
//             <input
//               required
//               name="lastName"
//               value={data.lastName}
//               onChange={onChangeHandler}
//               type="text"
//               placeholder="Last Name"
//             />
//           </div>
//           <input
//             className="emaill"
//             required
//             name="email"
//             value={data.email}
//             onChange={onChangeHandler}
//             type="email"
//             placeholder="Email address"
//           />
//           <input
//             className="streett"
//             required
//             name="street"
//             value={data.street}
//             onChange={onChangeHandler}
//             type="text"
//             placeholder="Street"
//           />
//           <div className="multi-fields">
//             <input
//               required
//               name="address"
//               value={data.address}
//               onChange={onChangeHandler}
//               type="text"
//               placeholder="Address"
//             />
//             <input
//               required
//               name="area"
//               value={data.area}
//               onChange={onChangeHandler}
//               type="text"
//               placeholder="Area"
//             />
//           </div>
//           <input
//             className="phonee"
//             required
//             name="phone"
//             value={data.phone}
//             onChange={onChangeHandler}
//             type="text"
//             placeholder="Phone"
//           />
//         </div>
//         <div className="place-order-right">
//           <div className="cart-total">
//             <h2>Cart Totals</h2>
//             <div>
//               <div className="cart-total-details">
//                 <p>Subtotal</p>
//                 <p>{getTotalCartAmount()} tk</p>
//               </div>
//               <hr />
//               <div className="cart-total-details">
//                 <p>Discount (10%)</p>
//                 <p>- {getDiscountAmount()} tk</p>
//               </div>
//               <hr />
//               <div className="cart-total-details">
//                 <p>Delivery Fee</p>
//                 <p>{getTotalCartAmount() === 0 ? 0 : 60} tk</p>
//               </div>
//               <hr />
//               <div className="cart-total-details">
//                 <b>Total</b>
//                 <b>
//                   {getTotalCartAmount() === 0
//                   ? 0
//                   : getTotalCartAmount() - getDiscountAmount() + 60}{" "}
//                 tk
//                 </b>
//               </div>
//             </div>
//             <Link className="link" to={"/MyOrders"}>
//               CONFIRM YOUR ORDER
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PlaceOrder;




























import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { db, auth } from "../../firebase"; 
import { ref, push, set } from "firebase/database";
import "./PlaceOrder.css";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {
    getTotalCartAmount,
    getDiscountAmount,
    cartItems,
  } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    address: "",
    area: "",
    phone: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user) {
      toast.error("Please log in to place an order.");
      navigate("/login");
      return;
    }

    try {
      const uid = user.uid;
      const orderRef = push(ref(db, `orders/${uid}`));

      const orderData = {
        ...data,
        cart: cartItems,
        subtotal: getTotalCartAmount(),
        discount: getDiscountAmount(),
        deliveryFee: getTotalCartAmount() === 0 ? 0 : 60,
        total:
          getTotalCartAmount() === 0
            ? 0
            : getTotalCartAmount() - getDiscountAmount() + 60,
        timestamp: new Date().toISOString(),
      };

      await set(orderRef, orderData); 

      toast.success("Order placed successfully!");
      navigate("/MyOrders");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order. Try again!");
    }
  };

  return (
    <div className="order">
      <form className="place-order" onSubmit={handlePlaceOrder}>
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
            required
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Email address"
          />
          <input
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
              name="address"
              value={data.address}
              onChange={onChangeHandler}
              type="text"
              placeholder="Address"
            />
            <input
              required
              name="area"
              value={data.area}
              onChange={onChangeHandler}
              type="text"
              placeholder="Area"
            />
          </div>
          <input
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

            <button type="submit" className="confirm-btn">
              CONFIRM YOUR ORDER
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
