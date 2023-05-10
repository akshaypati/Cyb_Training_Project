import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import "../Scss/Login/Login.css";
import { useNavigate } from "react-router";
import Navbar from "./userDashbordComponenets/Navbar";
import Footer from "./Footer";

const theme = createTheme();
function Login() {
  let navigate = useNavigate();
  const [checkemail, setEmail] = useState("");
  const [checkpassword, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(checkemail, checkpassword);

    let data = {
      email: checkemail,
      password: checkpassword,
    };
    axios
      .post("http://localhost:8080/api/authLogin", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response.data);
        if (response.data == "artist") {
          let st =localStorage.setItem('email',response.data)
          console.log(localStorage.getItem('email'));
          navigate("/ArtistDashbord");
        } else {
          localStorage.setItem('email',checkemail)
          
          navigate("/UserDashbord");                                                                           
        }
      })
      .catch((err) => console.log(err));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Navbar></Navbar>
      <div id="Login-div">
        <ThemeProvider theme={theme}>
          <Container
            component="main"
            maxWidth="xs"
            sx={{ height: "40rem", display: "flex", alignItems: "center" }}
          >
            <CssBaseline />
            <Box
              id="Login-card"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <Avatar sx={{ mt: 4, mb: 1, bgcolor: "primary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h6">
                Login
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1, width: "80%" }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={handleEmailChange}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="standard"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={handlePasswordChange}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="standard"
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 3, color: "white" }}
                >
                  Login
                </Button>
                <Grid container item id="Forget-Link">
                  <Grid container item xs sx={{ mt: 1 }}>
                    <Link
                      href="#"
                      color="#616161"
                      sx={{ textDecoration: "inherit" }}
                      variant="body3"
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid container item>
                    Sign Up as
                    <Link
                      href="/artistRegistration"
                      color="#616161"
                      sx={{ textDecoration: "inherit" }}
                      variant="body3"
                    >
                      &nbsp; {"Artist"} &nbsp;
                    </Link>
                    or
                    <Link
                      href="/userRegistration"
                      color="#616161"
                      sx={{ textDecoration: "inherit" }}
                      variant="body3"
                    >
                      &nbsp; {"User"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Login;
