import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../css/style.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Lead({ user, err,  handleChange , handelSubmitPatch , setquezArry , quezArry }) {
   
    useEffect(() => {
        axios.post(`${import.meta.env.VITE_APP_API_URL}/getQueztions`, user)
            .then(res => {
                const persons = res.data;
                setquezArry(persons)
            })
    }, [])

    return (
        <React.Fragment>
            <Header />
            <section className="relative items-center">
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-20 md:pt-20 pb-20">
                        {/* Section header */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                            data-aos="fade-right">
                            <div className="mb-8 text-center">
                                <h3 className={'text-blue-100 text-2xl h3 md:text-3xl'}>Performance Review - Lead</h3>
                            </div>
                        </div>
                        {/* Section form */}

                        <form className="w-full">
                            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                                {
                                    quezArry.map((item) => {
                                        return <div key={item._id} className="mb-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 p-4 flex">
                                            <div className="flex flex-col gap-y-2 w-full">
                                                <label htmlFor="reviewing" className={'text-black-700 font-bold'}> {item.text}</label>
                                                <div className="flex items-center border-b border-grey-700 py-2">
                                                    {item.type === 'text' ? <input
                                                        onChange={handleChange}
                                                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3
                                                         py-1 px-2 leading-tight"
                                                        placeholder={item.text}
                                                        name={item.name}
                                                        type={item.type} /> : <div className="mt-2 flex items-center flex-row items-center justify-center w-full pb-12 md:py-14">
                                                        <div className="flex gap-10  md:gap-16 w-full flex-row justify-center items-center">
                                                            <b className="text-red-500 pt-10 hidden md:block"> lots of help needed</b>

                                                            <label className="flex items-center gap-3 flex-col ">
                                                                <span>1</span>
                                                                <input onChange={handleChange} type="radio" name={`q${item.value}`} value="1"
                                                                    className="appearance-none h-4 w-4 border border-gray-400" />

                                                            </label>
                                                            <label className="flex items-center gap-3 flex-col">
                                                                <span>2</span>

                                                                <input onChange={handleChange} type="radio" name={`q${item.value}`} value="2"
                                                                    className="appearance-none h-4 w-4 border border-gray-400" />
                                                            </label>
                                                            <label className="flex items-center gap-3 flex-col">
                                                                <span>3</span>

                                                                <input onChange={handleChange} type="radio" name={`q${item.value}`} value="3"
                                                                    className="appearance-none h-4 w-4 border border-gray-400" />
                                                            </label>
                                                            <label className="flex items-center gap-3 flex-col">
                                                                <span>4</span>

                                                                <input onChange={handleChange} type="radio" name={`q${item.value}`} value="4"
                                                                    className="appearance-none h-4 w-4 border border-gray-400" />
                                                            </label>
                                                            <label className="flex items-center gap-3 flex-col">
                                                                <span>5</span>
                                                                <input onChange={handleChange} type="radio" name={`q${item.value}`} value="5"
                                                                    className="appearance-none h-4 w-4 border border-gray-400" />
                                                            </label>
                                                            <b className='text-teal-600 pt-10 hidden md:block'>amazing</b>
                                                        </div>
                                                    </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    })
                                }

                            </div>
                        </form>
                        <h2 className='w-full  flex justify-center text-red-500'>{err}</h2>

                        <div className='w-full  flex justify-center'>

                            <button type={"button"} onClick={handelSubmitPatch} className="btn text-white bg-blue-600 hover:bg-blue-700 w-24 mt-4 " >
                                Submit
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>

    );
}

export default Lead;
