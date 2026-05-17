import React from 'react'
import titleShape from "../assets/Title-Shape.png";
import sectionbanner from "../assets/servicedetails-page-banner.jpg";
import { Link } from "react-router-dom";
import Mainbtn from '../Components/Buttons/Mainbtn';

import pricingplan from "../assets/pricebg.png"

import tour1 from "../assets/tour-01.jpg"
import tour2 from "../assets/tour-02.jpg"
import tour3 from "../assets/tour-03.jpg"

import step1 from "../assets/choose-destination.png"

import des1 from "../assets/destination-01.jpg"
import des2 from "../assets/destination-02.jpg"
import des3 from "../assets/destination-03.jpg"

import frming from "../assets/frm-left.jpg"
import { Icon } from '@iconify/react';

const PricingPlan = () => {

    const pricingCards = [
        {
            id: 1,
            image: tour1,
            title: "Budget Travel",
            price: "$49",
        },
        {
            id: 2,
            image: tour2,
            title: "Standard Travel",
            price: "$79",
        },
        {
            id: 3,
            image: tour3,
            title: "Luxury Travel",
            price: "$129",
        },
    ];

    const bookingSteps = [
        {
            id: 1,
            title: "Choose Destination",
            description:
                "All you have to do is first select your preferred destination and proceed further.",
            image: des1,
            number: "01",
            bgColor: "bg-[#45869d]",
        },
        {
            id: 2,
            title: "Make Payment",
            description:
                "Securely complete your booking payment through our easy payment system.",
            image: des2,
            number: "02",
            bgColor: "bg-[#ffb703]",
        },
        {
            id: 3,
            title: "Reach Airport",
            description:
                "Get ready for your journey and arrive at the airport on time.",
            image: des3,
            number: "03",
            bgColor: "bg-[#219ebc]",
        },
    ];

    return (
        <>

            {/* Banner Section */}
            <div
                className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${sectionbanner})`,
                }}
            >

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="section-content z-10 text-center">

                    <h4 className="text-3xl lg:text-5xl xl:text-6xl font-extrabold text-white">
                        Pricing Plan
                    </h4>

                    <ul className="flex items-center justify-center gap-2 mt-4">

                        <li>
                            <Link
                                to="/"
                                className="text-sm lg:text-lg font-medium text-white hover:text-yellow transition"
                            >
                                Home
                            </Link>
                        </li>

                        <span className='text-white'>/</span>

                        <li>
                            <Link
                                to="/pricing"
                                className="text-sm lg:text-lg font-medium text-yellow"
                            >
                                Pricing Plan
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>

            {/* Pricing Section */}
            <div
                className='pricing-plan px-[5%] lg:px-[8%] py-[12%] bg-[#Efffff] bg-no-repeat bg-cover relative'
                style={{
                    backgroundImage: `url(${pricingplan})`
                }}
            >

                {/* Section Title */}
                <div className="title flex flex-col justify-center items-center text-center relative pb-20">

                    <h1 className="text-secondary text-4xl md:text-6xl font-bold leading-tight">
                        <span className="text-yellow">
                            Price For
                        </span>{" "}
                        Travel the World
                    </h1>

                    <p className='text-secondary my-4 text-lg max-w-2xl'>
                        Destinations worth exploring! Here are a few popular spots
                        with affordable travel plans.
                    </p>

                    <img
                        src={titleShape}
                        alt="titleShape"
                        className='w-180px object-contain absolute -bottom-6'
                    />

                </div>

                {/* Pricing Cards */}
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>

                    {pricingCards.map((item) => (

                        <div
                            key={item.id}
                            className='tour-price-card bg-white rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition-all duration-300'
                        >

                            {/* Image */}
                            <div className="tour-image w-full mb-8">

                                <img
                                    src={item.image}
                                    alt="tour-img"
                                    className='rounded-full w-220px h-220px object-cover mx-auto border-8 border-[#f5f5f5]'
                                />

                            </div>

                            {/* Content */}
                            <div className="content">

                                {/* Header */}
                                <div className="price-head flex justify-between items-center pb-6 border-b border-gray-200">

                                    <h4 className="text-secondary text-2xl font-semibold">
                                        {item.title}
                                    </h4>

                                    <div className="plan-price text-center">

                                        <span className="block text-4xl font-bold text-yellow">
                                            {item.price}
                                        </span>

                                        <span className="text-secondary text-sm">
                                            Per Day
                                        </span>

                                    </div>

                                </div>

                                {/* Features */}
                                <ul className="space-y-4 py-8">

                                    <li className="flex items-center gap-3 text-secondary font-medium">
                                        <Icon
                                            icon="fluent:arrow-circle-right-16-regular"
                                            width="24"
                                            height="24"
                                            className="text-yellow"
                                        />
                                        3 Star Hotel (4 Nights)
                                    </li>

                                    <li className="flex items-center gap-3 text-secondary font-medium">
                                        <Icon
                                            icon="fluent:arrow-circle-right-16-regular"
                                            width="24"
                                            height="24"
                                            className="text-yellow"
                                        />
                                        Local Transportation
                                    </li>

                                    <li className="flex items-center gap-3 text-secondary font-medium">
                                        <Icon
                                            icon="fluent:arrow-circle-right-16-regular"
                                            width="24"
                                            height="24"
                                            className="text-yellow"
                                        />
                                        Sightseeing Tickets
                                    </li>

                                    <li className="flex items-center gap-3 text-secondary font-medium">
                                        <Icon
                                            icon="fluent:arrow-circle-right-16-regular"
                                            width="24"
                                            height="24"
                                            className="text-yellow"
                                        />
                                        Tourist Visa Support
                                    </li>

                                    <li className="flex items-center gap-3 text-secondary font-medium">
                                        <Icon
                                            icon="fluent:arrow-circle-right-16-regular"
                                            width="24"
                                            height="24"
                                            className="text-yellow"
                                        />
                                        Meals & Snacks
                                    </li>

                                </ul>

                                {/* Button */}
                                <div className='flex justify-center items-center'>

                                    <Mainbtn
                                        to='/contact'
                                        text={"Shop Now"}
                                    />

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* Booking Section */}
            <div className="booking px-[5%] lg:px-[8%] py-[12%] relative bg-white">

                {/* Heading */}
                <div className="booking-content w-full flex justify-between items-center flex-wrap lg:flex-nowrap gap-5 lg:gap-10 pb-14">

                    <div className="flex flex-col">

                        <h1 className="text-secondary text-4xl md:text-6xl font-bold leading-tight">

                            Easy Step{" "}

                            <span className="text-yellow">
                                For Booking
                            </span>

                        </h1>

                        <p className="text-secondary my-2 text-lg">
                            Destinations worth exploring! Here are a few popular spots
                        </p>

                    </div>

                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">

                    {bookingSteps.map((step) => (

                        <div
                            key={step.id}
                            className="step relative bg-[#f8f9fa] rounded-[30px] shadow-lg p-8 hover:-translate-y-2 transition-all duration-300"
                        >

                            {/* Icon */}
                            <div className="step-icon mb-6 text-center">

                                <div className={`w-120px h-120px ${step.bgColor} rounded-full inline-flex justify-center items-center`}>

                                    <div className="w-90px h-90px rounded-full bg-white inline-flex justify-center items-center shadow-2xl">

                                        <img
                                            src={step1}
                                            alt="step-img"
                                            className="w-45px object-contain"
                                        />

                                    </div>

                                </div>

                            </div>

                            {/* Content */}
                            <div className="step-content">

                                <h4 className="text-2xl md:text-3xl font-semibold text-secondary pb-3 text-center">
                                    {step.title}
                                </h4>

                                <p className="text-gray-600 leading-7 text-center">
                                    {step.description}
                                </p>

                                {/* Bottom */}
                                <div className='flex items-end justify-between mt-8 gap-5'>

                                    <div className="media">

                                        <img
                                            src={step.image}
                                            alt="step-img"
                                            className="w-140px h-140px object-cover rounded-xl"
                                        />

                                    </div>

                                    <span className='text-6xl font-bold text-gray-200'>
                                        {step.number}
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            <div className="pricing-content py-[6%] md:py-[10%] ring-offset-sky-50 flex flex-col lg:flex-row bg-yellow-light/40">
                <div className="relative w-full lg:w-1/2 min-h-100 lg:min-h-auto overflow-hidden">
                    <img
                        src={frming}
                        alt="bg-img"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/50 flex items-end p-8 lg:p-12">
                        <h4 className="text-white text-3xl md:text-4xl font-medium font-kaushan">
                            Hi there!
                            <span className="block text-lg md:text-xl font-medium mt-2 font-afacad">
                                What can I do for you today?
                            </span>
                        </h4>
                    </div>
                </div>

            <div className="w-full lg:w-1/2 p-6 md:p-10 flex items-center">
                <div className="bg-yellow-light w-full p-8 md:p-10 rounded-[40px] shadow-xl">
                    <h1 className='text-secondary text-4xl md:text-6xl font-bold'>
                        Ready
                        <p className='text-yellow'>For Travelling</p>
                    </h1>
                    <p className='text-secondary my-2 text-lg lg:w-lg'>
                    We have seen that you have fulfilled all the requirements, now you are ready to travel.
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-6 md:p-10 flex items-center">
                <div className="bg-yellow-light w-full p-8 md:p-10 rounded-[40px] shadow-xl">
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
            </div>
        </div>

        </>
    )
}

export default PricingPlan