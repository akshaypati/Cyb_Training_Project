
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './userDashbordComponenets/Navbar';
// import '../css/AboutUs.css'
 
function Copyright() {
  return (
    
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Art_Love
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
 
const cards = [1];
 
const theme = createTheme();
 
export default function AboutUs() {
  return (
<>
    <Navbar></Navbar>
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
      <div id='about_us'>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 5,
 
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Art_Love
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              we are community for fans and creators – uniting the two online, offline and everywhere in between. कलाKendra is back and coming near you.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
 
            </Stack>
          </Container>
 
        </Box>
 
        <Container sx={{ py: 8, justifyContent:"center" }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                
 
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
 
                      pt: '.5%',
                    }}
                    image="https://cdn.pixabay.com/photo/2014/03/24/17/06/bird-295026_960_720.png"
 
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Who we are !!!
                    </Typography>
                    <Typography>
                      We open doors for other artists by showing our work in broad locations.
 
                      We help empower and educate other artists about how to get their work seen and sold.
                    </Typography>
                  </CardContent>
                </Card>
 
              </Grid>
              
            ))}
          </Grid>
        </Container>
 
      </div>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Inside you there’s an artist you don’t know about… say yes quickly, if you know, if you’ve known it from before the beginning of the universe.
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
 
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
    </>
  );
}
 

