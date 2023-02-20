
import React, { useEffect,  useState } from 'react';
import Header from './Header';
import '../css/style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Client({id}) {

    const [quez, setQuez] = useState([])
    const [user , setUser] = useState([])
    const [info, setInfo] = useState({ role: "client" })

    const handelCahnge = (e) => {
        const { name, value } = e.target;
        setInfo((item) => {
            return { ...item, [name]: value };
        });
    };

   

    useEffect(() => {
        axios.get(`http://localhost:3000/getClientQueztions`)
        .then(res => {
          const persons = res.data;

          setQuez(persons)
            console.log(quez,'quezquezquezquezquez');
        })
    }, [])
    



  const handelSubmitPatch = () => {
    axios.patch(`http://localhost:3000/quizzes/${id}`, info, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) =>{
           console.log(res.data,'questionssadasdasdas')
         })     .catch((err) => {
                 console.log(err, "My error PATCH")
      })
  };


   
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
                                <h3 className={'header-color h3'}>Performance Review - Client/ Team Member</h3>
                            </div>
                        </div>
                        {/* Section form */}
                        <form  className="w-full">
                            {
                                quez.map((item) => {
                                    return <div key={item._id} className="mb-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 p-4 flex">
                                        <div className="flex flex-col gap-y-2 w-full">
                                            <label htmlFor={item.name} className={'text-black-700 font-bold'}> {item.text}</label>
                                            <div className="flex items-center  border-b border-grey-700 py-2">
                                                {item.type === 'text' ? <input
                                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3
                                                py-1 px-2 leading-tight"
                                                    name={item.name}
                                                    onChange={handelCahnge}
                                                    placeholder={item.text}
                                                    type={item.type} /> :
                                                    <div className="mt-2
                                                 flex items-center
                                                 flex-row items-center 
                                                  w-full py-14 ">
                                                        <div className="flex  gap-16 w-full md:flex-row flex-col justify-center items-center  ">
                                                            <b className="text-red-500 pt-6 "> lots of help needed</b>
                                                            <label className="flex items-center gap-1 flex-col">

                                                                <span>1</span>
                                                                <input onChange={handelCahnge} type="radio" name={`q${item.value}`} value="1"
                                                                    className="appearance-none h-4 w-4 border border-gray-400" />

                                                            </label>
                                                            <label className="flex items-center gap-1 flex-col">
                                                                <span>2</span>
                                                                <input onChange={handelCahnge} type="radio" name={`q${item.value}`} value="2"
                                                                    className="appearance-none h-4 w-4 border border-gray-400" />

                                                            </label>
                                                            <label className="flex items-center gap-1 flex-col">
                                                                <span>3</span>
                                                                <input onChange={handelCahnge} type="radio" name={`q${item.value}`} value="3"
                                                                    className="appearance-none h-4 w-4 border border-gray-400" />

                                                            </label>
                                                            <label className="flex items-center gap-1 flex-col">
                                                                <span>4</span>
                                                                <input onChange={handelCahnge} type="radio" name={`q${item.value}`} value="4"
                                                                    className="appearance-none h-4 w-4 border border-gray-400" />

                                                            </label>
                                                            <label className="flex items-center gap-1 flex-col">
                                                                <span>5</span>
                                                                <input onChange={handelCahnge} type="radio" name={`q${item.value}`} value="5"
                                                                    className="appearance-none h-4 w-4 border border-gray-400" />

                                                            </label><b className="text-teal-500 pt-6 ">amazing</b>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                })
                            }

                        </form>
                        <div className='w-full  flex justify-center'>
                        <Link to="/thank">
                            <button onClick={handelSubmitPatch} className="btn text-white bg-blue-600 hover:bg-blue-700 w-24 mt-4 " >
                                submit
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Client;

