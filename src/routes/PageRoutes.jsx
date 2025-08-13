// import React from "react";
// import { Route, Routes } from "react-router-dom";
// // import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
// import HomePage from '../pages/HomePage'
// import Login from "../Validate/Login";
// import Logout from "../Validate/Logout";
// import Loader from "../components/Loading/Loading";
// import MyOrders from "../components/MyOrders/MyOrders";
// import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
// import ConfrimOrder from "../components/ConfrimOrder/ConfrimOrder";
// import Cart from "../components/Carts/Cart";
// import PlaceOrder from "../components/PlaceOrder/PlaceOrder";

// const Booking = React.lazy(() => import("../pages/BookingPage"));
// const Orders = React.lazy(() => import("../pages/Orders"));
// const OrderDetail = React.lazy(() => import("../pages/OrderDetail"));
// const Table = React.lazy(() => import("../pages/TablePage"));
// const TableDetail = React.lazy(() => import("../pages/TableDetail"));

// const PageRoutes = () => {
//   return (
//     <div>
//       <React.Suspense fallback={<Loader />}>
//         <Routes>
//           {/* Home Page*/}
//           <Route path="/" element={<HomePage />} />
//           <Route path="home" element={<HomePage />} />
//           {/* Menu Page*/}
//           <Route path="menu" element={<ExploreMenu />} />
//           {/*Table Booking Page*/}
//           <Route path="table-booking" element={<Booking />} />
//           {/* Order Page*/}
//           <Route path="orders" element={<Orders />} />
//           <Route path="orders/:id" element={<OrderDetail />} />

//           {/* Table Page*/}
//           <Route path="table-overview" element={<Table />} />
//           <Route path="table-overview/:id" element={<TableDetail />} />

//           <Route path="/cart" element={<Cart />} />
//           <Route path="/order" element={<PlaceOrder />} />
//           <Route path="/myorders" element={<MyOrders />} />
//           <Route path="/confrim" element={<ConfrimOrder />} />

//           {/* Authentication Page*/}
//           <Route path="login" element={<Login />} />
//           <Route path="logout" element={<Logout />} />
//         </Routes>
//       </React.Suspense>
//     </div>
//   );
// };

// export default PageRoutes;
