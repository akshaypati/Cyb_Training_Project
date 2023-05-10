import React from 'react'
import { Box } from '@mui/material'
import  '../../Scss/userDashbordComponent/Sidebar.css'
import RightSideBar from '../artististDashbordComponents/RightSideBar'
// import EventCards from './EventCards'


const Sidebar = () => {
  return (
    
       <Box bgcolor="#f9fbe7" sx={{display:{xs:"none",sm:"block"}}} flex={1} p={2}>
       
        <h1>Events for you ..!</h1>
        <RightSideBar></RightSideBar>
        </Box>
   
  )
}

export default Sidebar
