import { Box, Card } from "@mui/material";
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
import Profileimg from "../userDashbordComponenets/Profileimg"
import "../../Scss/ArtistDashbord/LeftFeed.css"

function Feed() {
  return (
    <Box
      p={2}  flex={2} id="card" sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <div id="div1">f</div>
    </Box>    
  );
}

export default Feed;
