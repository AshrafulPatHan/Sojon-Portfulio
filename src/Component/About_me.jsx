import React from 'react';

const About_me = () => {
    return (
        <div className='flex flex-col items-center mt-4 mb-7 px-4'>
            <div className='bitter-Title'>
                <h2 className='text-lg sm:text-xl md:text-2xl font-semibold text-center text-green-600 mb-4'>
                    About Me
                </h2>
            </div>
            <div>
                <div className="card bg-base-100 shadow-2xl p-6 sm:p-8 w-[100vw] sm:w-[70vw]  ">
                    <div className="flex flex-col xl:flex-row items-start xl:justify-between mx-2 ">
                        {/* Left Section */}
                        <div>
                            <div className="flex flex-row items-center gap-2 mb-4">
                                <h2 className='text-base sm:text-lg md:text-xl font-semibold text-red-500'>
                                    My name :
                                </h2>
                                <p className='text-base sm:text-lg md:text-xl font-semibold text-yellow-500'>
                                    Ashraful Pathan
                                </p>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <h2 className='text-base sm:text-lg md:text-xl font-semibold text-red-500'>
                                    Live in : <span className='text-base sm:text-lg md:text-xl font-semibold text-blue-500'>Bangladesh, Dhaka, Narayanganj</span>
                                </h2>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <h2 className='text-base sm:text-lg md:text-xl font-semibold text-red-500'>
                                    About Me : <span className='text-base sm:text-lg md:text-xl font-semibold text-orange-500'>
                                        Hello I am ashraful pathan a junior frontend developer or a junior react js developer <br />
                                        Im only 17 year old anl I am a collage going student I am interacted for coding in my 14 year <br /> old I am muducar in this fild
                                    </span>
                                </h2>
                            </div>
                        </div>
                        {/* Right Section */}
                        <div>
                            <div className="flex flex-row items-center gap-2 mb-4">
                                <h2 className='text-base sm:text-lg md:text-xl font-semibold text-red-500'>
                                    My Age :
                                </h2>
                                <p className='text-base sm:text-lg md:text-xl font-semibold text-yellow-500'>
                                    17 Years
                                </p>
                            </div>
                            <div className="flex flex-row sm:items-center gap-2 mb-4">
                                <h2 className='text-base sm:text-lg md:text-xl font-semibold text-red-500'>
                                Read in : <span className='text-base sm:text-lg md:text-xl font-semibold text-blue-500'>
                                    Govt. Tolaram College</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About_me;
