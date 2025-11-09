import React, { useContext, useState } from "react";
import { Context } from "./AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { Box, Card, Container, Typography } from "@mui/material";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await set(ref(db, "users/" + user.uid), {
        userName,
        email,
      });

      toast.success("Registration successful!");
      navigateTo("/login");
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <Container className="Auth">
      {" "}
      <div className="container form-component">
        <Typography className="first-title" variant="h6">
          Sign up
        </Typography>
        <Typography className="second-title" variant="h4">
          Discover Our Flavorful Symphony!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 550,
          }}
        >
          <form onSubmit={handleRegister}>
            <Card className="card" variant="outlined">
              <div>
                <input
                  type="text"
                  value={userName}
                  placeholder="User Name"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div
                style={{
                  gap: "10px",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                }}
              >
                <p style={{ marginBottom: 0 }}>Already Registered?</p>
                <Link
                  to={"/login"}
                  style={{ textDecoration: "none", alignItems: "center" }}
                >
                  Login Now
                </Link>
              </div>
              <div style={{ justifyContent: "center", alignItems: "center" }}>
                <button type="submit">Register</button>
              </div>
            </Card>
          </form>
        </Box>
      </div>
    </Container>
  );
};

export default Register;
