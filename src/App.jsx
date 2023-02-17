import React, { useEffect, useReducer, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import Client from './partials/Client';
import Lead from './partials/Lead';
import Self from './partials/Self';

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


const [id,setId] = useState()
useEffect(()=>{console.log(id)})
 
 

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home id={id} />} />
        <Route  path="/client" element={<Client id={id}/>} />
        <Route  path="/lead" element={<Lead id={id}/>} />
        <Route  path="/self" element={<Self id={id}/>} />
        <Route  path="/self" />
        <Route  path="/thank" element={<Thank  />} />
        <Route  path="/" element={<SignIn  setId={setId} />} />
      </Routes>
    </>
  );
}

export default App;
