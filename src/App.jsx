import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Review from './partials/Review';


import Thank from './partials/Thank';



function App() {
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });


const [user,setUser] = useState();


  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home user={user}/>} />
        <Route  path="/review" element={<Review user={user}/>} />
        <Route  path="/thank" element={<Thank />} />
        <Route  path="/" element={<SignIn  setUser={setUser}/>} />
      </Routes>
    </>
  );
}

export default App;
