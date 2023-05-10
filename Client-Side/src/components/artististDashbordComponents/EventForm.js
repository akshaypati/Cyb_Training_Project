import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";


function EventForm() {
  const [event , setevent ] = useState("");
  const handleANameChange = (e)=>{
    setevent(e.target.value);
}
const handleSubmit = async (e) => { 
    e.preventDefault();
        let data =
        {
            event_desc:event,   
        }
        console.log(data);
        axios.post("http://localhost:8080/api/addevent",data,
        {
            headers: {"Content-Type": "application/json",},})
        .then((response) => {
            console.log(response.data);
        })
        .catch((err)=>console.log(err));   
    }
  return (
    <div > 
      <Box bgcolor="aquamarine"  sx={{display:{xs:"none",sm:"block"}}} flex={1} p={2}> 
      <TextField
        sx={{ width: "100%" ,mt:5}}
        id="standard-multiline-static"
        multiline
        rows={2}
        placeholder="Add event details"
        variant="standard"
        onChange={handleANameChange}
        />
        <Button type="button" onClick={handleSubmit}  variant="contained"   sx={{mt:5}}>
          Add Event</Button>
      </Box>
    </div>
  );
}

export default EventForm;
