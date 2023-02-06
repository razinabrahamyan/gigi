import React from 'react';

function Client() {
    return (
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


                    <form className="w-full">
                        <div className="mb-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 p-4 flex">
                            <div className="flex flex-col gap-y-2 w-full">
                                <label htmlFor="reviewing" className={'text-black-700 font-bold'}> I am reviewing:</label>
                                <div className="flex items-center border-b border-grey-700 py-2">
                                    <input
                                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3
                                     py-1 px-2 leading-tight"
                                        name="reviewing"
                                        type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 p-4 flex">
                            <div className="flex flex-row gap-y-2 items-center">
                                <label htmlFor="team" className={'text-black-700 font-bold'}> I am their :</label>
                                <div className="flex border-b border-grey-700 py-2 max-w-xs">
                                    <input
                                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3
                                     py-1 px-2 leading-tight"
                                        name="team" type="text"/>
                                </div>
                                <label htmlFor="team" className={'text-black-700 font-bold'}> Client/ Team Member</label>
                            </div>
                        </div>
                        <div className="mt-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded p-4">
                            <div className={'text-black-700 font-bold'}>
                                I am very pleased with their work this term
                            </div>
                            <div className="mt-2 flex items-center flex-row">
                                <div className="flex flex-row gap-10">
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q1" value="1"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>1</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q1" value="2"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>2</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q1" value="3"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>3</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q1" value="4"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>4</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q1" value="5"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>5</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded p-4">
                            <div className={'text-black-700 font-bold'}>
                                They have the technical skills/ knowledge to do their work effectively
                            </div>
                            <div className="mt-2 flex items-center flex-row">
                                <div className="flex flex-row gap-10">
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q2" value="1"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>1</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q2" value="2"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>2</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q2" value="3"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>3</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q2" value="4"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>4</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q2" value="5"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>5</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded p-4">
                            <div className={'text-black-700 font-bold'}>
                                They produce high-quality work
                            </div>
                            <div className="mt-2 flex items-center flex-row">
                                <div className="flex flex-row gap-10">
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q3" value="1"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>1</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q3" value="2"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>2</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q3" value="3"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>3</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q3" value="4"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>4</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q3" value="5"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>5</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded p-4">
                            <div className={'text-black-700 font-bold'}>
                                They do their work in a timely manner
                            </div>
                            <div className="mt-2 flex items-center flex-row">
                                <div className="flex flex-row gap-10">
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q4" value="1"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>1</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q4" value="2"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>2</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q4" value="3"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>3</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q4" value="4"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>4</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q4" value="5"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>5</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded p-4">
                            <div className={'text-black-700 font-bold'}>
                                They are reliable
                            </div>
                            <div className="mt-2 flex items-center flex-row">
                                <div className="flex flex-row gap-10">
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q5" value="1"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>1</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q5" value="2"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>2</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q5" value="3"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>3</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q5" value="4"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>4</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q5" value="5"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>5</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded p-4">
                            <div className={'text-black-700 font-bold'}>
                                They ask for help when needed
                            </div>
                            <div className="mt-2 flex items-center flex-row">
                                <div className="flex flex-row gap-10">
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q6" value="1"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>1</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q6" value="2"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>2</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q6" value="3"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>3</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q6" value="4"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>4</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q6" value="5"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>5</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded p-4">
                            <div className={'text-black-700 font-bold'}>
                                They are adept at problem-solving
                            </div>
                            <div className="mt-2 flex items-center flex-row">
                                <div className="flex flex-row gap-10">
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q7" value="1"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>1</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q7" value="2"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>2</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q7" value="3"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>3</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q7" value="4"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>4</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q7" value="5"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>5</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded p-4">
                            <div className={'text-black-700 font-bold'}>
                                They organize and prioritize their time effectively
                            </div>
                            <div className="mt-2 flex items-center flex-row">
                                <div className="flex flex-row gap-10">
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q8" value="1"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>1</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q8" value="2"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>2</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q8" value="3"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>3</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q8" value="4"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>4</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q8" value="5"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>5</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded p-4">
                            <div className={'text-black-700 font-bold'}>
                                They work well with their team(s)
                            </div>
                            <div className="mt-2 flex items-center flex-row">
                                <div className="flex flex-row gap-10">
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q9" value="1"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>1</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q9" value="2"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>2</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q9" value="3"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>3</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q9" value="4"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>4</span>
                                    </label>
                                    <label className="flex items-center gap-1 flex-col">
                                        <input type="radio" name="q9" value="5"
                                               className="appearance-none h-4 w-4 border border-gray-400"/>
                                        <span>5</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 bg-white rounded-t-lg rounded-b-lg border-r border-b border-l border-t border-gray-200 rounded p-4 flex">
                            <div className="flex flex-col gap-y-2 w-full">
                                <label htmlFor="to-add" className={'text-black-700 font-bold'}> I would like to add: (Include anything thaat made their work standout or anything they had to overcome.)</label>
                                <div className="flex items-center border-b border-grey-700 py-2">
                                    <input
                                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3
                                        py-1 px-2 leading-tight"
                                        name="to-add"
                                        type="text"/>
                                </div>
                            </div>
                        </div>
                       </form>
                </div>
            </div>
        </section>
    );
}

export default Client;
