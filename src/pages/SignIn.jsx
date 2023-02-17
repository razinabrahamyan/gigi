import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../partials/Header';

function SignIn( {setId}) {

  const [loginInp, setLoginInp] = useState({role : "client"})
  


  console.log(loginInp)
  const loginRef = useRef()
  const rolRef = useRef()
  const navigate = useNavigate()


  const handelClickLogin = (e) => {
    e.preventDefault()
    const value = loginRef.current.value.trim();
    const name = "username"
    setLoginInp((item) => {
      return { ...item, [name]: value };
    });
  }


  const handelClickRol = (e) => {
    e.preventDefault()
    const value = rolRef.current.value.trim();
    const name = "role"
    setLoginInp((item) => {
      return { ...item, [name]: value };
    });

  }


  const handelSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/quizzes', loginInp, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) =>{
        
        setId(res.data._id)
       if (res.data.role === "client") {
        
      navigate('./client')
    }
    else if (res.data.role === "lead") {
      navigate('./lead')
    } else if (res.data.role === "self") {
      navigate('./self')
    }});
  };





  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="text-5xl gigi-pink font-medium">GiGi</h1>
                <h4 className="h4">Get Inclusive Get Innovative</h4>
              </div>
              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handelSubmit}  >
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" name="username" htmlFor="login">Login</label>
                      <input ref={loginRef} onKeyUp={handelClickLogin} id="username" type="text" className="form-input w-full text-gray-800" placeholder="Enter your login" required />
                      <p className="text-red-500 text-xs italic h-2">{loginInp.username ? "" : "Please fill out this field."}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="role">Role</label>
                      </div>
                      <select
                        ref={rolRef}
                        onClick={handelClickRol}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value={'client'}>Client/ Team Member</option>
                        <option value={'lead'}>Lead</option>
                        <option value={'self'}>Self</option>
                      </select>
                      {/*<input id="role" type="text" className="form-input w-full text-gray-800" placeholder="Enter your role" required />*/}
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">

                    </div>
                  </div>
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" >
                    Sigin in
                  </button>
                </form>

              </div>
            </div>
            <h4 className="h4 text-center" >
              GiGi gets the right people in the right places starting at the performance review.
            </h4>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;