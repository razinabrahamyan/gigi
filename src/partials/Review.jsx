import React from 'react';
import Header  from './Header';

function Review({locUser}) {
    return (
        <>
        <Header />
        <section className="relative items-center">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-20 md:pt-20 pb-20">
                    {/* Section header */}
                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                         data-aos="fade-right">
                        <div className="mb-8 text-center">
                            <h3 className={'header-color h3'}>Performance Review of ({locUser.username})</h3>
                        </div>
                    </div>
                    {/* Section form */}
                    <form className="w-full">
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table
                                            className="min-w-full bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded">
                                            <thead className="border-b">
                                            <tr>
                                                <th scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Question
                                                </th>
                                                <th scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Self
                                                </th>
                                                <th scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Lead
                                                </th>
                                                <th scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Client/ Tea
                                                </th>
                                                <th scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Average
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="border-b">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                    They are very pleased with their work this term
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q1" value="1"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q1" value="2"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q1" value="3"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q1" value="4"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                            </tr>

                                            <tr className="border-b">
                                                <td className="px-6 py-4  text-sm font-medium text-gray-900">
                                                    They have the technical skills/ knowledge to do their work
                                                    effectively

                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q2" value="1"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q2" value="2"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q2" value="3"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q2" value="4"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                            </tr>

                                            <tr className="border-b">
                                                <td className="px-6 py-4  text-sm font-medium text-gray-900">
                                                    They produce high-quality work
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q3" value="1"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q3" value="2"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q3" value="3"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q3" value="4"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                            </tr>


                                            <tr className="border-b">
                                                <td className="px-6 py-4  text-sm font-medium text-gray-900">
                                                    They do their work in a timely manner
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q4" value="1"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q4" value="2"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q4" value="3"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q4" value="4"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                            </tr>

                                            <tr className="border-b">
                                                <td className="px-6 py-4  text-sm font-medium text-gray-900">
                                                    They are reliable
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q5" value="1"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q5" value="2"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q5" value="3"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q5" value="4"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                            </tr>

                                            <tr className="border-b">
                                                <td className="px-6 py-4  text-sm font-medium text-gray-900">
                                                    They ask for help when needed
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q6" value="1"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q6" value="2"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q6" value="3"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q6" value="4"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                            </tr>

                                            <tr className="border-b">
                                                <td className="px-6 py-4  text-sm font-medium text-gray-900">
                                                    They are adept at problem-solving
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q7" value="1"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q7" value="2"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q7" value="3"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q7" value="4"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                            </tr>

                                            <tr className="border-b">
                                                <td className="px-6 py-4  text-sm font-medium text-gray-900">
                                                    They organize and prioritize their time effectively
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q8" value="1"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q8" value="2"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q8" value="3"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q8" value="4"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                            </tr>

                                            <tr className="border-b">
                                                <td className="px-6 py-4  text-sm font-medium text-gray-900">
                                                    They work well with their team
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q9" value="1"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q9" value="2"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q9" value="3"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                                    <input type="radio" name="q9" value="3"
                                                           className="appearance-none h-4 w-4 border border-gray-400"/>
                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
                                        <div
                                            className="mt-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded p-4 flex">
                                            <div className="flex flex-col gap-y-2 w-full">
                                                <label htmlFor="adversities"
                                                       className={'text-black-700 font-bold'}> What adversities have
                                                    they battled this term?</label>
                                                <div className="flex items-center border-b border-grey-700 py-2">
                                                    <input
                                                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight"
                                                        name="adversities-self" placeholder={'Self'}
                                                        type="text"/>
                                                </div>
                                                <div className="flex items-center border-b border-grey-700 py-2">
                                                    <input
                                                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight"
                                                        name="adversities-lead" placeholder={'Lead'}
                                                        type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded p-4 flex">
                                            <div className="flex flex-col gap-y-2 w-full">
                                                <label htmlFor="next-term" className={'text-black-700 font-bold'}>For
                                                    the next term, I have these goals: (2 or 3 actionable things)</label>
                                                <div className="flex items-center border-b border-grey-700 py-2">
                                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700
                                                    mr-3 py-1 px-2 leading-tight" placeholder={'Self'} name="next-term-self" type="text"/>
                                                </div>
                                                <div className="flex items-center border-b border-grey-700 py-2">
                                                    <input className="appearance-none bg-transparent border-none w-full
                                                    text-gray-700 mr-3 py-1 px-2 leading-tight" placeholder={'Lead'} name="next-term-lead" type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded p-4 flex">
                                            <div className="flex flex-col gap-y-2 w-full">
                                                <label htmlFor="to-add" className={'text-black-700 font-bold'}>More context: (Include anything that made
                                                    their work standout or anything they had to overcome.)</label>
                                                <div className="flex items-center border-b border-grey-700 py-2">
                                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700
                                                     mr-3 py-1 px-2 leading-tight" name="to-add-self"  placeholder={'Self'} type="text"/>
                                                </div>
                                                <div className="flex items-center border-b border-grey-700 py-2">
                                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700
                                                     mr-3 py-1 px-2 leading-tight" name="to-add-lead"  placeholder={'Lead'} type="text"/>
                                                </div>
                                                <div className="flex items-center border-b border-grey-700 py-2">
                                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700
                                                     mr-3 py-1 px-2 leading-tight" name="to-add-client"  placeholder={'Client/Team Member'} type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </section>
        </>
    );
}

export default Review;
