import React from 'react'
import titleShape from "../assets/Title-Shape.png";
import sectionbanner from "../assets/service-page-banner.jpg";
import { Link, useParams } from "react-router-dom";
import SectionTransition from '../Components/SectionTransition/SectionTransition';

import Mainbtn from "../Components/Buttons/Mainbtn";
import {Icon} from "@iconify/react";


const Contact = () => {
  return (
    <>
        <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{
            backgroundImage: `url(${sectionbanner})`,
        }}
        >
            <div className="section-content z-0 text-center">
                <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">Contact
                </h4>
                <ul className="flex items-center flex-wrap justify-center gap-2">
                <li>
                    <Link
                    to='/'
                    className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
                    >
                    </Link>
                </li>
                <span className='text-secondary'></span>
                <li>
                    <Link to='/contact' className="cursor-pointer text-sm lg:text-lg font-medium text-secondary">Contact</Link>
                </li>
                </ul>
            </div>
        </div>

        <SectionTransition from="teal" to="#e6f1f3" />

        <div className='px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#e6f1f3]'>
            <div className='bg-white p-5 md:p-10 rounded-3xl w-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331786942!2d73.09068539198522!3d22.32224063536357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1772012708310!5m2!1sen!2sin" style={{width:"100%",borderRadius:"20px",height:"400px"}}></iframe>
            </div>

            <div className='w-full flex justify-between items-center flex-col lg:flex-row gap-10 pt-10'>
                <div className="bg-yellow-light w-full p-8 md:p-10 rounded-[40px] shadow-xl lg:w-1/2 ">
                    <h1 className='text-secondary text-4xl md:text-6xl font-bold'>
                        Reach & Get
                        <p className='text-yellow'>in Touch With Us!</p>
                    </h1>
                    <p className='text-secondary my-2 text-lg lg:w-lg'>
                    We’d love to hear from you. Our friendly team is always here to chat
                    </p>

                    <form method="post" className='space-y-6'>

                        <input type="text" placeholder='Enter you Name' className='w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none'required /> 

                        <input type="email" placeholder='Enter you Email Address' className='w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none'required />

                        <input type="text" placeholder='Enter you Name' className='w-full rounded-full px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none'required />

                        <textarea rows="5" placeholder='Message' className='w-full rounded-3xl px-6 py-4 bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow focus:outline-none' required></textarea>

                        <Mainbtn text={"Send Message"}/>
                    </form>
                </div>

                <div className='flex flex-col lg:w-1/2 w-full'>
                    <h4 className='text-5xl font-semibold text-secondary'>Get in Touch</h4>
                    <p className='text-gray-500 mb-8'>We’d love to hear from you! Please fill out the form below.</p>

                    <div className="flex justify-between items-start flex-col space-y-10">
                        
                        <div className="flex items-center flex-wrap gap-6">
                            <div className="w-20 h-20 bg-[#45869d] rounded-full flex items-center justify-center shadow-lg">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <Icon
                                    icon="line-md:phone-call"
                                    width="35"
                                    height="35"
                                    className="text-[#53a4c0]"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-secondary text-lg">
                                    Contact Us
                                </p>
                                <p className="text-secondary text-2xl font-semibold tracking-wide">
                                    +1 123 456 7890
                                </p>
                            </div>


                        </div>

                        <div className="flex items-center flex-wrap gap-6">
                            <div className="w-20 h-20 bg-rose-400 rounded-full flex items-center justify-center shadow-lg">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <Icon
                                    icon="oui:email"
                                    width="35"
                                    height="35"
                                    className="text-rose-400"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-secondary text-lg">
                                    Send a Mail
                                </p>
                                <p className="text-secondary text-2xl font-semibold tracking-wide">
                                    email@domain.com
                                </p>
                            </div>

                            
                        </div>

                        <div className="flex items-center flex-wrap gap-6">
                            <div className="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center shadow-lg">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                    <Icon
                                    icon="lsicon:house-outline"
                                    width="35"
                                    height="35"
                                    className="text-teal-700"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-secondary text-lg">
                                    Address
                                </p>
                                <p className="text-secondary text-2xl font-semibold tracking-wide">
                                    785 15h Street, office 478 <br/>
                                    Berlin, De 81566
                                </p>
                            </div>
                        </div>

                        <h4 className='text-5xl pt-15 font-kaushan! font-medium '>Let's
                            <span className='text-yellow'>Talk</span>
                            About You!
                        </h4>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact