import React, { useContext } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import "./auth.css";
const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const FormValidate = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.Email, data.Psw);

      setAuth(true);
      toast.success("Login Successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <Container className="Auth">
      <Typography className="first-title" variant="h6">
        Sign In
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
        <form onSubmit={handleSubmit(FormValidate)}>
          <Card className="card" variant="outlined">
            <TextField
              {...register("Email", { required: "Email Required" })}
              error={!!errors.Email}
              variant="standard"
              label="Email"
              type="email"
            />

            <TextField
              {...register("Psw", { required: "Password Required" })}
              error={!!errors.Psw}
              variant="standard"
              label="Password"
              type="password"
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Link to="/register">Register Now</Link>

              <Button
                variant="contained"
                type="submit"
                endIcon={<ArrowForward />}
              >
                Login
              </Button>
            </Box>
          </Card>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
