import { Box, Stack } from '@mui/material'

import React from 'react'
import Feed from './userDashbordComponenets/Feed'
// import Nav from './userDashbordComponenets/Nav'
// import Navbar from './userDashbordComponenets/Navbar'
import Sidebar from './userDashbordComponenets/Sidebar'
import UserNav from './UserNav'


function UserDashbord() {
  return (
   
     <Box>
            
            <UserNav></UserNav>
            <Stack direction="row" spacing={2} justifyContent="space-between">
            <Feed></Feed>
            <Sidebar></Sidebar>
            </Stack>
        </Box>

    
  )
}

export default UserDashbord
