import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';
import '../Scss/Registration/Registration.css'
import UserNav from './UserNav';
import Navbar from './userDashbordComponenets/Navbar';
import { useNavigate } from 'react-router';

const theme = createTheme();
function Registration() {
    let navigate = useNavigate();
    

    const [checkname, setName] = useState('');
    const [checkemail, setEmail] = useState('');
    const [checkpassword, setPassword] = useState('');
    const [checkconfpassword, setConfpassword] = useState('');
    const [checkage, setAge] = useState('');
    const [checkgender, setGender] = useState('');
    const [checkcontact, setContact] = useState('');
    const [checkaddress, setAddress] = useState('');
    const [checkprofession, setProfession] = useState('');
    const [checkrole, setRole] = useState('user');

    const handleNameChange = (e)=>{
        setName(e.target.value);
    }
    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }
    const handleConfpasswordChange = (e)=>{
        setConfpassword(e.target.value);
    }
    const handleAgeChange = (e)=>{
        setAge(e.target.value);
    }
    const handleGenderChange = (e)=>{
        setGender(e.target.value);
    }
    const handleContactChange = (e)=>{
        setContact(e.target.value);
    }
    const handleAddressChange = (e)=>{
        setAddress(e.target.value);
    }
    const handleProfessionChange = (e)=>{
        setProfession(e.target.value);
    }



    
    const  handleSubmit = async (event) => {
        event.preventDefault();
        console.log(checkemail,checkpassword);
        if(checkconfpassword===checkpassword){
            
            let data = 
            {
                role:checkrole,
                name:checkname,
                email:checkemail,
                password:checkpassword,
                age:checkage,
                gender:checkgender,
                contact:checkcontact,
                address:checkaddress,
                profession:checkprofession
            }


        axios.post("http://localhost:8080/api/userRegistration", data,{headers: {"Content-Type": "application/json",},})
            .then((response) => { 
                console.log(response.data);
                navigate('/home');
            })
            .catch((err)=>console.log(err));


            setName('');
            setEmail('');
            setPassword('');
            setAge('');
            setGender('');
            setContact('');
            setAddress('');
            setProfession('');


            
        }
    };
    

    
    return (
       <><Navbar></Navbar>
       <div id='Registration-div'>
            <ThemeProvider theme={theme}>

                <Container component="main" maxWidth="xs" sx={{ height: '40rem', display: 'flex', alignItems: 'center' }}>
                    <CssBaseline />
                    <Box id="Registration-card"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyItems: 'center',
                        }}
                    >
                        <Avatar sx={{ mt: 4, mb: 2, bgcolor: 'primary.main', }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h6">
                            Registration
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '80%', }}>
                            <TextField
                                margin="normal"
                                fullWidth
                                onChange={handleNameChange}
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                variant="standard"
                                sx={{mt:0}}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={handleEmailChange}
                                id="reg-email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                variant="standard"
                                sx={{mt:1}}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={handlePasswordChange}
                                name="password"
                                label="Password"
                                type="password"
                                id="Reg-password"
                                autoComplete="current-password"
                                variant="standard"
                                sx={{mt:1}}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={handleConfpasswordChange}
                                name="Confirm password"
                                label="Confirm Password"
                                type="password"
                                id="Cpassword"
                                autoComplete="current-password"
                                variant="standard"
                                sx={{mt:1}}
                            />
                             <Grid container item sx={{ mt: 2 }}>
                                <FormLabel id="radio-label" sx={{ mt: 1 }}>Gender  </FormLabel>
                                <FormControl sx={{ ml: 5 }}>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                    >

                                        <FormControlLabel value="female"  onChange={handleGenderChange} control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" onChange={handleGenderChange}  control={<Radio />} label="Male" />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            
                            <TextField
                                margin="normal"
                                onChange={handleAgeChange}
                                name="Age"
                                label="Age"
                                type="text"
                                id="age"
                                // autoComplete="current-password"
                                variant="standard"
                                sx={{ width: "25%", float: 'left' , mt:0}}
                            />

                            <TextField
                                margin="normal"
                                fullWidth
                                name="cNo"
                                onChange={handleContactChange}
                                label="Contact No"
                                type="text"
                                id="cNo"
                                // autoComplete="current-password"
                                variant="standard"
                                sx={{ width: "65%", float: 'right',mb:3,mt:0 }}
                            />

                            <Grid container item id="userinfo">
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        onChange={handleProfessionChange}
                                        id="Profession"
                                        label="Profession"
                                        name="Profession"
                                        autoComplete="Profession"
                                        autoFocus
                                        variant="standard"
                                        sx={{ mt: 1 }}
                                    />

                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        onChange={handleAddressChange}
                                        id="Address"
                                        label="Address"
                                        name="Address"
                                        autoComplete="Address"
                                        autoFocus
                                        variant="standard"
                                        sx={{ mt: 1 }}
                                    />
                                </Grid>


                        

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3, mb: 3, color: 'white' }}
                            >
                                Sign Up
                            </Button>

                            <Grid container item id='Sign-Link'>
                                <Grid container item >
                                    Have an account? 
                                    <Link href="/Login" color="#616161" sx={{ textDecoration: 'inherit' }} variant="body3">
                                    &nbsp;{"  Login"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>

                    </Box>
                </Container>
            </ThemeProvider>

        </div>
        </>
    )
}

export default Registration
