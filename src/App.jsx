import React, { Component } from "react";
import Rootlayout from "./Layout/Rootlayout.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import Orders from "./pages/Orders.jsx";
import OrderDetail from "./pages/OrderDetail.jsx";
import TablePage from "./pages/TablePage.jsx";
import TableDetail from "./pages/TableDetail.jsx";
import Cart from "./components/Carts/Cart.jsx";
import MyOrders from "./components/MyOrders/MyOrders.jsx";
import Logout from "./Validate/Logout.jsx";
import Login from "./Validate/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "/home",
        element: <HomePage/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/logout",
        element: <Logout/>,
      },
      {
        path: "/table-booking",
        element: <BookingPage/>,
      },
      {
        path: "/Orders",
        element: <Orders/>,
      },
      {
        path: "/orders/:id",
        element: <OrderDetail/>,
      },
      {
        path: "/table-overview",
        element: <TablePage/>,
      },
      {
        path: "/table-overview/:id",
        element: <TableDetail/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/place-order",
        element: <PlaceOrder/>
      },
      {
        path: "/myorders",
        element: <MyOrders/>,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
