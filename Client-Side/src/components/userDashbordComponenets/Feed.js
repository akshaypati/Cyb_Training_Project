import { Box, Card } from "@mui/material";
import Cards from "./Cards";
import "../../Scss/Login/Login.css";
import React, { Component, useState, useEffect } from "react";

import axios from "axios";


import Profileimg from "../userDashbordComponenets/Profileimg";

function Feed() {
  const [artistposts, setartistposts] = useState([]);

  const getPosts = () => {
    const url = `http://localhost:8080/api/getProfImage`;

    axios.get(url).then((response) => {
      const result = response.data;

      console.log("imagesss", response.data);

      debugger;

      setartistposts(result);

      //  debugger
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Box
      bgcolor="aqua"
      p={2}
      flex={2}
      id="card"
      // height="100"
      flexDirection={"column"}
      sx={{ display: "flex", justifyContent: "space-evenly" }}
    >
      {artistposts.map((img) => {
        const ut = "./DBimage/";
        // return <div className="postimg_card" ><img  src={ut+i.image} width="100px" height="100px"/>{i.artist_id}</div>;
        return <Profileimg imgs={img} />;
      })}
    </Box>
  );
}

export default Feed;
