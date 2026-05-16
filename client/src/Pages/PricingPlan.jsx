import React from 'react'
import titleShape from "../assets/Title-Shape.png";
import sectionbanner from "../assets/servicedetails-page-banner.jpg";
import { Link } from "react-router-dom";
import Mainbtn from '../Components/Buttons/Mainbtn';

import pricingplan from "../assets/pricebg.png"

import tour1 from "../assets/tour-01.jpg"
import tour2 from "../assets/tour-02.jpg"
import tour3 from "../assets/tour-03.jpg"


import step1img from "../assets/destination-01.png"
import step2img from "../assets/destination-02.png"
import step3img from "../assets/destination-03.png"

import des1 from "../assets/choose-destination.png"
import des2 from "../assets/make-payment-1.png"
import des3 from "../assets/reach-airport.png"

const PricingPlan = () => {
  return (
    <>
        <div
            className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
            style={{
                backgroundImage: `url(${sectionbanner})`,
            }}
            >
            <div className="section-content z-0 text-center">
                <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">
                </h4>
                <ul className="flex items-center flex-wrap justify-center gap-2">
                    <li>
                        <Link
                        to="/"
                        className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
                        >
                        </Link>
                    </li>
                    <span className='text-secondary'>/</span>
                    <li>
                        <Link to="/services" className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"></Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className='pricing-plan px-[2%] sm:px-[8%] lg:py-[12%] md:py-[10%] bg-[#Efffff] bg-no-repeat relative bg-cover' style={{backgroundImage: `url($(pricingplan))`}}>

            <div className="title flex flex-col justify-center items-center text-center relative pb-18">
                    <h1 className="text-secondary text-4xl md:text-6xl font-bold">
                    <span className="text-yellow">
                        Price For
                        </span>{" "}
                        Travel the World
                    </h1>
                    <p className='text-secondary my-2 text-lg'>
                        Destinations worth exploring! Here are a few popular spots
                    </p>
                    <img src={titleShape} alt="titleShape" className='w-[35%] object-contain absolute -bottom-12'/>  
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                <div className='tour-price-card relative z-9'>
                    <div className="tour-image w-full mb-10">
                        <img src={tour1} alt="tour-img" className='bg-center rounded-full w-full'/>
                    </div>
                </div>
            </div>

            <div className="content">

                <div className="price-head flex justify-between items-center w-full pb-5">
                    <h4 className="text-secondary text-3xl font-medium">
                    Budget Travel
                    </h4>
                    <div className="plan-price text-center">
                        <span className="block text-4xl font-semibold text-secondary">
                            $49
                        </span>
                        <span className="text-secondary">
                            Per Day
                        </span>
                    </div>
                </div>

                <ul className="space-y-4 mb-8">

                    <li className="flex items-center gap-2 text-secondary font-medium">
                    <Icon
                        icon="fluent:arrow-circle-right-16-regular"
                        width="24"
                        height="24"
                        className="text-yellow"
                    />
                    3 star hotel (4 nights)
                    </li>

                    <li className="flex items-center gap-2 text-secondary font-medium">
                    <Icon
                        icon="fluent:arrow-circle-right-16-regular"
                        width="24"
                        height="24"
                        className="text-yellow"
                    />
                    Local taxis
                    </li>

                    <li className="flex items-center gap-2 text-secondary font-medium">
                    <Icon
                        icon="fluent:arrow-circle-right-16-regular"
                        width="24"
                        height="24"
                        className="text-yellow"
                    />
                    Sightseeing, tickets
                    </li>

                    <li className="flex items-center gap-2 text-secondary font-medium">
                    <Icon
                        icon="fluent:arrow-circle-right-16-regular"
                        width="24"
                        height="24"
                        className="text-yellow"
                    />
                    Tourist visa
                    </li>

                    <li className="flex items-center gap-2 text-secondary font-medium">
                    <Icon
                        icon="fluent:arrow-circle-right-16-regular"
                        width="24"
                        height="24"
                        className="text-yellow"
                    />
                    Meals & snacks
                    </li>
                </ul>
                <div className='flex justify-center items-center'>
                    <Mainbtn to='/contact' text={"Shop Now"}/>
                </div>

            </div>
        </div>
    </>
  )
}

export default PricingPlan