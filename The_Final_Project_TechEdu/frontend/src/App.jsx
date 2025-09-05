import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Coursefilter from './pages/Coursefilter/Coursefilter';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Coursedisplay from './components/Coursedisplay/Coursedisplay';
import Lesson from './pages/Coursefilter/Courseview/lesson/Lesson.js';
import Video from './components/video/Video';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import Cart from './pages/Cart/Cart';
import CourseFav from './pages/CourseFav/CourseFav';
import './App.css'
import CoursedIOT from './components/CoursedIOT/CoursedIOT';
import CoursedAI from './components/CoursedAI/CoursedAI';
import CoursedSW from './components/CoursedSW/CoursedSW';
import CoursedDesign from './components/CoursedDesign/CoursedDesign';
import CircularProgress from '@mui/material/CircularProgress';
import Error from './Error';
import PasswordReset from './pages/ForgetPassword/PasswordReset';
import ContactUs from './pages/Contact/ContactUs';

const App = () => {

  const [data,setData] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    },1000)
  },[])
  return (
    <>
      <div className='app'>
        {
          data ? (
            <>
              <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/contactus' element={<ContactUs />} /> */}
          <Route path='/courses' element={<Coursefilter />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/courses/viewcourse/cart' element={<Cart />} />
          <Route path='/courses/viewcourse/favourite' element={<CourseFav />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path='/forgotpassword/:id/:token' element={<ForgetPassword />} />
          <Route path='/courses/viewcourse/webdevelopment' element={<Coursedisplay />} />
          <Route path='/courses/viewcourse/iot' element={<CoursedIOT />} />
          <Route path='/courses/viewcourse/ai' element={<CoursedAI />} />
          <Route path='/courses/viewcourse/sw' element={<CoursedSW />} />
          <Route path='/courses/viewcourse/design' element={<CoursedDesign />} />
          <Route path='/courses/viewcourse/lesson/:id' element={<Lesson />} />
          <Route path='/courses/viewcourse/lesson/video/:id' element={<Video />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer /> 
            </>
          ) : (
            <div className='circle'> 
              <CircularProgress /> &nbsp;
              <h2>Loading...</h2>
            </div>
          )
        }
        
      </div>
    </>
  );
};

export default App;
