import React, { useState } from 'react';
import { FaRegNewspaper } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { toast } from 'react-toastify';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const message = event.target.message.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }
        if (!message) {
            toast.error("Message cannot be empty");
            return;
        }

        toast.success("Message sent successfully!");
    };

    return (
        <div className='flex flex-col items-center'>
            <div className='bitter-Title'>
                <h4 className='text-4xl font-semibold text-center mt-6 mb-3'>Contact Me</h4>
            </div>
            <div className='flex flex-col lg:flex-row items-start gap-3 border-2 text-lg shadow-amber-50 p-5 
                rounded-xl bg-base-100 sm:w-[60%] w-[90%]'>
                <div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5075/5075658.png"
                        className="w-full h-[250px] md:h-[300px] rounded-xl object-cover transition-transform 
                        transform hover:scale-105"
                    />
                </div>
                <div className='flex flex-col items-start p-2 gap-3'>
                    <h2 className='text-3xl font-semibold'>Send Email Derick</h2>
                    <form onSubmit={handleSubmit} className='flex flex-col items-start gap-3'>
                        <label className="input input-bordered flex items-center gap-2">
                            <MdEmail />
                            <input type="email" name='email' className="grow w-[200px] sm:w-[300px]" placeholder="Your Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <FaRegNewspaper />
                            <input type="text" name='message' className="grow w-[200px] sm:w-[300px]" placeholder="Your Message" />
                        </label>
                        <div className='flex flex-row items-center gap-2'>
                            <button className='w-52 bg-blue-500 hover:bg-blue-300 
                            p-2 text-lg text-white font-semibold rounded-xl'>
                                Submit
                            </button>
                        </div>
                    </form>
                    <p className='text-lg font-semibold'>
                        Email: <a href="mailto:ashrafulPathan3927@gmail.com">ashrafulPathan3927@gmail.com</a>
                    </p>
                    <p className='text-lg font-semibold'>
                        Phone: <a href="tel:+8801568706037">+8801568706037</a>
                    </p>
                    <p className='text-lg font-semibold'>
                        WhatsApp: <a href="https://wa.me/8801614871378">+8801614871378</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
