import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Review from './partials/Review';
import axios from 'axios';


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


  let locUser  = JSON.parse(localStorage.getItem("user"))


  const [err ,setErr] = useState()
  const [user,setUser] = useState();
  const [info, setInfo] = useState({ })
  const [quezArry , setquezArry] = useState([])

  const navigate = useNavigate()

  
  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

   
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInfo((item) => {
          return { ...item, [name]: value };
      });
  };


   const handelSubmitPatch = (e) => {
        e.preventDefault() 
        if(Object.values(info).length === quezArry.length){
                axios.patch(`${import.meta.env.VITE_APP_API_URL}/quizzes/${locUser._id}`, info, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((res) => {
                        setErr("")
                        navigate('/thank')    
                    })
               } else { 
                 setErr("Please fill all fields")
               }
    };



  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home locUser={locUser}  
          handleChange={handleChange} setErr={setErr} err={err}  handelSubmitPatch={handelSubmitPatch} setquezArry={setquezArry} quezArry={quezArry}/>} />
        <Route  path="/review" element={<Review  locUser={locUser}/>} />
        <Route  path="/thank" element={<Thank />} />
        <Route  path="/" element={<SignIn  setUser={setUser} setErr={setErr} err={err} setInfo={setInfo} />} />
      </Routes>
    </>
  );
}

export default App;
