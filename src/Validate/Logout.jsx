import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Logout = () => {
  //auth function and page navigate to home page
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    setAuth(false);
    toast.success("Logout Successfully!");
    navigate("/");
  });
  return <></>;
};

export default Logout;
