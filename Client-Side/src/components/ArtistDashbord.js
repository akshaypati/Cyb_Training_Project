import { Box, Stack } from '@mui/material'

import React from 'react'
import RightSideBar from './artististDashbordComponents/RightSideBar'
import LeftFeed from './artististDashbordComponents/LeftFeed'
import UserNav from './UserNav'
import LeftSideBar from './artististDashbordComponents/LeftSideBar'



function ArtistDashbord() {
  return (
   
     <Box>
            
            <UserNav></UserNav>
            <Stack direction="row" spacing={2} justifyContent="space-between">
            <LeftSideBar></LeftSideBar>
            <LeftFeed></LeftFeed>
            <RightSideBar></RightSideBar>
            </Stack>
        </Box>

    
  )
  console.log(localStorage.getItem('email'));
}

export default ArtistDashbord
