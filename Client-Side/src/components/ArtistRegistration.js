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
import { useNavigate } from "react-router";
import "../Scss/ARegistration/ArtistRegistration.css";
import Navbar from "./userDashbordComponenets/Navbar";

const theme = createTheme();
function ArtistRegistration() {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    Cpassword: "",
    // age: "",
    gender: "",
    // contact: "",
    // artform: "",
  });
  const [errors, setErrors] = useState({});

  const [checkAname, setAName] = useState("");
  const [checkAemail, setAEmail] = useState("");
  const [checkApassword, setAPassword] = useState("");
  const [checkAconfpassword, setAConfpassword] = useState("");
  const [checkAage, setAAge] = useState("");
  const [checkAgender, setAGender] = useState("");
  const [checkAcontact, setAContact] = useState("");
  const [checkAartform, setAArtform] = useState("");
  const [checkArole, setARole] = useState("artist");

  const handleANameChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setAName(e.target.value);
  };
  const handleAEmailChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    setAEmail(e.target.value);
  };
  const handleApasswordChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setAPassword(e.target.value);
  };
  const handleAconfpasswordChange = (e) => {
    setAConfpassword(e.target.value);
  };
  const handleAAgeChange = (e) => {
    setAAge(e.target.value);
  };
  const handleAGenderChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setAGender(e.target.value);
  };
  const handleAContactChange = (e) => {
    // setValues({
    //   ...values,
    //   [e.target.name]: e.target.value,
    // });
    setAContact(e.target.value);
  };
  const handleAArtformChange = (e) => {
    setValues({
      ...values,
      [e.target.artform]: e.target.value,
    });
    setAArtform(e.target.value);
  };

  const handleSubmit = async (event) => {
    if (!values.name) {
      alert("enter first name");
    }

    if (!values.email) {
      alert("Email is required");
    }
    if (!/\S+@\S+\.\S+/.test(values.email)) {
      alert("Email is invalid");
    }
    if (!values.password) {
      alert("Password is not correct");
    }
    if (values.password.length < 5) {
      alert("Password must be greater than five characters");
      //   event.preventDefault();
      // //  setErrors(Validation(values));
    }

    // if (!values.contact) {
    //   alert("Contact number should be 10 digit");
    // }
    // if (!values.artform) {
    //   alert("Enter art form");
    // }

    // }
    else {
      alert("Success");
    }

    event.preventDefault();
    console.log(checkAemail, checkApassword);
    if (checkAconfpassword === checkApassword) {
      let data = {
        role: checkArole,
        name: checkAname,
        email: checkAemail,
        password: checkApassword,
        age: checkAage,
        gender: checkAgender,
        contact: checkAcontact,
        artform: checkAartform,
      };

      axios
        .post("http://localhost:8080/api/artistRegisteration", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response.data);
          navigate("/home");
        })
        .catch((err) => console.log(err));

      setAName("");
      setAEmail("");
      setAPassword("");
      setAAge("");
      setAGender("");
      setAContact("");
      setAArtform("");
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div id="ARegistration-div">
        <ThemeProvider theme={theme}>
          <Container
            component="main"
            maxWidth="xs"
            sx={{ height: "40rem", display: "flex", alignItems: "center" }}
          >
            <CssBaseline />
            <Box
              id="ARegistration-card"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <Avatar sx={{ mt: 4, mb: 2, bgcolor: "primary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h6">
                Artist Registration
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1, width: "80%" }}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  onChange={handleANameChange}
                  id="Aname"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  variant="standard"
                  value={values.name}
                  sx={{ mt: 0 }}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={handleAEmailChange}
                  id="Areg-email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="standard"
                  value={values.email}
                  sx={{ mt: 1 }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={handleApasswordChange}
                  name="password"
                  label="Password"
                  type="password"
                  id="AReg-password"
                  autoComplete="current-password"
                  variant="standard"
                  value={values.password}
                  sx={{ mt: 1 }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={handleAconfpasswordChange}
                  name="Confirm password"
                  label="Confirm Password"
                  type="password"
                  id="ACpassword"
                  autoComplete="current-password"
                  variant="standard"
                  sx={{ mt: 1 }}
                />
                <Grid container item sx={{ mt: 2 }}>
                  <FormLabel id="radio-label" sx={{ mt: 1 }}>
                    Gender{" "}
                  </FormLabel>
                  <FormControl sx={{ ml: 5 }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        onChange={handleAGenderChange}
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        onChange={handleAGenderChange}
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <TextField
                  margin="normal"
                  onChange={handleAAgeChange}
                  name="Age"
                  label="Age"
                  type="text"
                  id="Aage"
                  // autoComplete="current-password"
                  variant="standard"
                  sx={{ width: "25%", float: "left", mt: 0 }}
                />

                <TextField
                  margin="normal"
                  fullWidth
                  onChange={handleAContactChange}
                  name="cNo"
                  label="Contact No"
                  type="text"
                  id="AcNo"
                  // autoComplete="current-password"
                  variant="standard"
                  value={values.contact}
                  sx={{ width: "65%", float: "right", mb: 3, mt: 0 }}
                />
                <Grid container item id="artform">
                  <TextField
                    margin="normal"
                    fullWidth
                    onChange={handleAArtformChange}
                    id="Art-Form"
                    label="Art Form"
                    name="Art Form"
                    autoComplete="Art Form"
                    autoFocus
                    variant="standard"
                    value={values.artform}
                    sx={{ mt: 1 }}
                  />
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 3, color: "white" }}
                >
                  Sign Up
                </Button>

                <Grid container item id="ASign-Link">
                  <Grid container item>
                    Have an account?
                    <Link
                      href="/Login"
                      color="#616161"
                      sx={{ textDecoration: "inherit" }}
                      variant="body3"
                    >
                      &nbsp;{"  Login"}
                    </Link>
                  </Grid>
                  <Grid container item>
                    Register as
                    <Link
                      href="/userRegistration"
                      color="#616161"
                      sx={{ textDecoration: "inherit" }}
                      variant="body3"
                    >
                      &nbsp;{"User"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
}

export default ArtistRegistration;
