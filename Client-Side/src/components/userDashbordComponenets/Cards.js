import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function Cards() {
  const [expanded, setExpanded] = React.useState(false);
  const [state, setState] = React.useState([]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // state = {
  //   image: [],
  // };

  // axios.get(`http://localhost:8080/api/getProfImage/:id`).then((res) => {
  //   const image = res.data;
  //   this.setState({ image });
  // });

  return (

    // state.map((image)=>{
      <>
      <Card sx={{ maxWidth: 345, maxHeight: 450 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         AAA
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <Button size="small">Learn More</Button>
        </IconButton>
      </CardActions>
      {/* <CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
      </CardContent> */}
    </Card>
    {/* <img src={image} /> */}
    </>
    // })
    
  );
}

