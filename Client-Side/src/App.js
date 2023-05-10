
import './App.css';
import ArtistRegistration from './components/ArtistRegistration';
import Login from './components/Login';
import Registration from './components/Registration';
import UserDashbord from './components/UserDashbord';
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Home from './components/Home';
import ArtistDashbord from './components/ArtistDashbord';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs'



function App() {
  return (
  
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home></Home>}  />
        <Route path='/ArtistDashbord' element={<ArtistDashbord></ArtistDashbord>} />
        <Route path='/UserDashbord' element={<UserDashbord></UserDashbord>}  />
        <Route path='/userRegistration' element={<Registration></Registration>}  />
        <Route path='/artistRegistration'  element={<ArtistRegistration></ArtistRegistration>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/aboutUs' element={<AboutUs></AboutUs>} />
        <Route path='/contactUs' element={<ContactUs></ContactUs>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
