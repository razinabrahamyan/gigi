import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../partials/Header';

function SignIn({ setUser, err, setErr ,  setInfo  }) {

  const [username, setUsername] = useState()
  const [role, setRole] = useState()


  const navigate = useNavigate()
  useEffect(() => {
     setErr("") 

  }, [])
  useEffect(() => {
    setInfo({}) 

 }, [])
  
  const handelSubmit = () => {
    axios.post(import.meta.env.VITE_APP_API_URL + '/quizzes', {
      'username': username,
      'role': role
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify({ username: res.data.username, role: res.data.role, _id: res.data._id }))
        setUser(res.data)
        setErr("")
        navigate('/home')
      }).catch((err) => {
        if (err.response.status === 500) {
          setErr("Please fill all fields")
        }
      })
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
                <h1 className="text-5xl text-pink-100 font-medium">GiGi</h1>
                <h4 className="h4">Get Inclusive Get Innovative</h4>
                <h2 className="text-red-500  italic h-2">{err}</h2>
              </div>
              {/* Form */}
              <div className="max-w-sm mx-auto">

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="login">Login</label>
                    <input onChange={(e) => setUsername(e.target.value)} id="username" type="text" className="form-input w-full text-gray-800" placeholder="Enter your login" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <div className="flex justify-between">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="role">Role</label>
                    </div>
                    <select
                      onChange={(e) => setRole(e.target.value)}
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                      <option>Please select your role</option>
                      <option value={'client'}>Client/Team Member</option>
                      <option value={'lead'}>Lead</option>
                      <option value={'self'}>Self</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3" />
                </div>
                <button onClick={handelSubmit} type={"submit"} className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" >
                  Sign in
                </button>
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