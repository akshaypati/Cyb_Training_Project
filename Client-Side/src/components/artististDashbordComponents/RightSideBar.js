import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import  '../../Scss/userDashbordComponent/Sidebar.css'
import EventCards from '../userDashbordComponenets/EventCards'
import axios from 'axios'


const RightSideBar = () =>  {
const [event, setevent] = useState([]);
const getEvent = () => {
const url = `http://localhost:8080/api/geteventdetails`
axios.get(url).then((response) => {
const result = response.data
// console.log("events",result) 
//  debugger 
 setevent(result)
//  console.log(event);
})
}
  useEffect(() => {
    getEvent();
  }, [event]);
  return (
      <Box bgcolor="#f9fbe7" sx={{display:{xs:"none",sm:"block"}}} flex={1} p={2}>
       {event.map((ev) => {
      return <EventCards  events={ev}/>
      })}  
      </Box>
  )
}

export default RightSideBar
