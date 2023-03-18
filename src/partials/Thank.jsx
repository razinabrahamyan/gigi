import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Thank() {
    return (
        <>
            <Header />  
                <section className="relative items-center mt-0 min-h-full"> 
                <div className="relative  max-w-6xl mx-auto pt-40 px-4 sm:px-6">
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-18">
                            <h1 className="text-5xl text-pink-100 font-medium">GiGi</h1>
                            <h4 className="h4">Get Inclusive Get Innovative</h4>
                        </div>
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-12">
                            <h1 className={'text-4xl text-blue-100'}>Thank you for your assessment</h1>
                        </div>
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <Link to="/review">
                            <button  className="btn uppercase text-white bg-blue-600 hover:bg-blue-700 w-24  " >
                                review
                            </button>
                      </Link>
                      </div>
                    </div>
                   
                </section>
          
        </>
    );
}

export default Thank;
