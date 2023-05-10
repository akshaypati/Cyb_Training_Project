import { Box, Card } from "@mui/material";
// import Cards from "./Cards";
import "../../Scss/Login/Login.css";
import React, { Component, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import axios from "axios";
import MoreVert from "@mui/icons-material/MoreVert";
import Profileimg from "../userDashbordComponenets/Profileimg";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'; 
import MenuIcon from '@mui/icons-material/Menu';
import EventForm from "./EventForm";


function LeftSideBar() {

  const [image, setUploadFile] = React.useState();
  const submitForm = (event) => {
    event.preventDefault();
    const dataArray = new FormData();
    dataArray.append("image", image)
    
    axios.post("http://localhost:8080/api/addImage", image,  {
        headers: {
          "Content-Type": "multipart/form-data",
        },  
        body:{
            "filename":"files",
            "artist_id":"15"
        }})
      .then((response) => {
        // successfully uploaded response
      })
      .catch((error) => {
        // error response
      });
  };
  return (
    <Box
      bgcolor="aqua"
      p={2}
      flex={1}
      id="card"
      // height="100"
      flexDirection={"column"}
      sx={{ display: "flex", justifyContent: "space-evenly" }}
    >
     <div>
      <form onSubmit={submitForm}>
        <input type="file" name="image" onChange={(e) => setUploadFile(e.target.files)} />
        <br />
        <input type="submit" />
        <br/>
      </form>
    </div>
    <EventForm />
    </Box>
  );
}

export default LeftSideBar;
