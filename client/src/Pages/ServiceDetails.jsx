import React from 'react'
import titleShape from "../assets/Title-Shape.png";
import sectionbanner from "../assets/section-banner.jpg";
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import {Icon} from '@iconify/react'

import gallery1 from "../assets/gallery-01.jpg";
import gallery2 from "../assets/gallery-02.jpg";
import gallery3 from "../assets/gallery-03.jpg";
import gallery4 from "../assets/gallery-04.jpg";
import gallery5 from "../assets/gallery-05.jpg";
import gallery6 from "../assets/gallery-06.jpg";

import services from "../Data/Services.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const ServiceDetails = () => {
    const {id} = useParams();

    const service = service.find(
        (item)=>item.id===parseInt(id)
    );

    if(!service){
        return <h2 className='text-center mt-20'>
            Service Not Found
        </h2>
    }

    const [activeIndex, setActiveIndex]=useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null:index);
    };

    const faqs = [
        {
            id: 1,
            question: "01 - How can I book a trip?",
            answer:
                "Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.",
        },
        {
            id: 2,
            question: "02 - How can I cancel my booking?",
            answer:
                "Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.",
        },
        {
            id: 3,
            question: "03 - Do you offer international travel packages?",
            answer:
                "Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.",
        },
        {
            id: 3,
            question: "04 - Are there group discounts available?",
            answer:
                "Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.",
        },
    ];

    const gallery = [
        { image: gallery1 },
        { image: gallery2 },
        { image: gallery3 },
        { image: gallery4 },
        { image: gallery5 },
        { image: gallery6 }
    ]

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
                            <Link to={service.id} className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"></Link>
                        </li>
                    </ul>
                </div>
        </div>

        <div className='service-container px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#effefe] gap-10 flex justify-between items-start flex-col  xl:flex-row'>
            <div className='service-left w-full xl:w-[70%] flex flex-col gap-10'>
                <div className='gallery-images h-50 sm:h-100 lg:h-150'>
                    <Swiper
                        modules={[Pagination,Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{clickable:true}}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        className='rounded-3xl w-full h-full'
                    >
                        {[service.image,gallery1,gallery2,gallery3,gallery4,gallery5,gallery6].map}
                    </Swiper>
                </div>
                <div className="service-content bg-white p-5 md:p-8 rounded-3xl shadow-lg">

                    <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5">
                        Tour guide who give you proper information about every destination
                    </h3>

                    <p className="text-sm md:text-lg text-gray-500 pb-8">
                        A tour guide service provides travelers with knowledgeable professionals who lead and enhance travel experiences. Tour guides offer insights into the history, culture, and significance of the places they visit, enriching the tourist's understanding They manage itineraries, transportation, and access to attractions, ensuring a smooth and organized tour
                    </p>

                    <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>
                        What Is a Tour Guide Service?
                    </h3>

                    <ul className='space-y-5 pb-8'>

                        <li className="flex items-center flex-wrap gap-2">
                        <Icon
                            icon="ic:baseline-check"
                            width="24"
                            height="24"
                            className="bg-primary text-white p-1 rounded-full"
                        />
                        <span className="text-secondary font-light tracking-wide">
                            Assisting with logistics like hotel check-ins, local transport, and dining
                        </span>
                        </li>

                        <li className="flex items-center flex-wrap gap-2">
                        <Icon
                            icon="ic:baseline-check"
                            width="24"
                            height="24"
                            className="bg-primary text-white p-1 rounded-full"
                        />
                        <span className="text-secondary font-light tracking-wide">
                            Explaining historical, cultural, and natural significance of place
                        </span>
                        </li>

                        <li className="flex items-center flex-wrap gap-2">
                        <Icon
                            icon="ic:baseline-check"
                            width="24"
                            height="24"
                            className="bg-primary text-white p-1 rounded-full"
                        />
                        <span className="text-secondary font-light tracking-wide">
                            Offering safety tips and local etiquette guidance
                        </span>
                        </li>

                        <li className="flex items-center flex-wrap gap-2">
                        <Icon
                            icon="ic:baseline-check"
                            width="24"
                            height="24"
                            className="bg-primary text-white p-1 rounded-full"
                        />
                        <span className="text-secondary font-light tracking-wide">
                        Customizing itineraries based on traveler interests
                        </span>
                        </li>
                    </ul>

                    <h3 className='text-xl sm:text-2xl md:text-4xl font-medium text-secondary pb-5'>
                        Types of Tour Guide Services
                    </h3>

                    <div className="service-table mb-8">
                        <ul>
                            <li className="flex flex-wrap">
                            <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                                <span className="block text-xl font-afacad text-secondary font-medium">
                                Private Guide
                                </span>
                            </div>
                            <div className="content flex-1 py-3.75 px-7.5">
                                <p className="text-md text-secondary font-light tracking-wide">
                                One-on-one personalized tours, often tailored to specific interests
                                </p>
                            </div>
                            </li>

                            <li className="flex flex-wrap">
                            <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                                <span className="block text-xl font-afacad text-secondary font-medium">
                                Group Tours
                                </span>
                            </div>
                            <div className="content flex-1 py-3.75 px-7.5">
                                <p className="text-md text-secondary font-light tracking-wide">
                                Shared tours with multiple travelers, often more budget-friendly
                                </p>
                            </div>
                            </li>

                            <li className="flex flex-wrap">
                            <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                                <span className="block text-xl font-afacad text-secondary font-medium">
                                City Guides
                                </span>
                            </div>
                            <div className="content flex-1 py-3.75 px-7.5">
                                <p className="text-md text-secondary font-light tracking-wide">
                                Local experts for urban exploration—museums, markets, monuments
                                </p>
                            </div>
                            </li>

                            <li className="flex flex-wrap">
                            <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                                <span className="block text-xl font-afacad text-secondary font-medium">
                                Cultural Guides
                                </span>
                            </div>
                            <div className="content flex-1 py-3.75 px-7.5">
                                <p className="text-md text-secondary font-light tracking-wide">
                                Focus on traditions, festivals, cuisine, and heritage sites
                                </p>
                            </div>
                            </li>

                            <li className="flex flex-wrap">
                            <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                                <span className="block text-xl font-afacad text-secondary font-medium">
                                Tour Managers
                                </span>
                            </div>
                            <div className="content flex-1 py-3.75 px-7.5">
                                <p className="text-md text-secondary font-light tracking-wide">
                                Oversee multi-day trips, handling logistics and group coordination
                                </p>
                            </div>
                            </li>

                            <li className="flex flex-wrap">
                            <div className="title min-w-48.75 w-48.75 py-3.75 px-7.5">
                                <span className="block text-xl font-afacad text-secondary font-medium">
                                Nature & Wildlife Guides
                                </span>
                            </div>
                            <div className="content flex-1 py-3.75 px-7.5">
                                <p className="text-md text-secondary font-light tracking-wide">
                                Specialists in safaris, trekking, and eco-tourism areas like sanctuaries
                                </p>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceDetails