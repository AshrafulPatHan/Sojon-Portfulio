


const Hero = () => {
    return (
        <div className="flex flex-col items-center mt-7 mb-7">
            <div className="flex flex-col items-center md:flex-row md:items-start gap-4 xl:gap-7">
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className='bitter-Title'>
                            <h2 className='text-2xl md:text-5xl font-semibold text-center '>Ashraful Pathan</h2>
                        </div>
                        <div className='bitter-Title'>
                            <h2 className='text-lg md:text-2xl font-semibold text-center text-green-600 '>
                                junior Frontend Developer
                            </h2>
                        </div>
                        <p className='text-base md:text-xl font-medium text-center md:text-start text-blue-500 '>
                            I ma junior frontend developer of a react js developer <br />
                            I mack dynamic and responsive website
                        </p>
                    </div>
                    <div>
                        <button className="btn btn-outline text-lg mt-4 btn-secondary w-52">
                            Download resume
                        </button>
                    </div>
                    <div className="text-5xl flex gap-4">
                        <a
                            href="https://www.facebook.com/profile.php?id=100090953234693"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook Profile"
                        >
                            <i className="fa-brands text-2xl fa-facebook text-blue-600"></i>
                        </a>
                        <a
                            href="https://x.com/AshrafulPa25233"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter Profile"
                        >
                            <i className="fa-brands text-2xl fa-twitter text-blue-400"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/ashrafulpathan3916/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram Profile"
                        >
                            <i className="fa-brands text-2xl fa-instagram text-pink-500"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ashraful-pathan-3b2125344/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                        >
                            <i className="fa-brands text-2xl fa-linkedin text-blue-700"></i>
                        </a>
                    </div>
                </div>
                <div>
                <img
                    src="https://i.ibb.co.com/xDyG33c/Screenshot-216.png"
                    className="w-52 h-52 md:w-96 md:h-96  rounded-full"
                    alt="My image"
                />
                </div>
            </div>
        </div>
    );
};

export default Hero;