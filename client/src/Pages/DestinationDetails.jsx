import React from 'react'
import titleShape from "../assets/Title-Shape.png";
import sectionbanner from "../assets/service-page-banner.jpg";
import { Link,useParams } from "react-router-dom";

import destination1 from "../assets/destinationdetails-image01.png"
import destination2 from "../assets/destinationdetails-image02.png"
import destination3 from "../assets/destinationdetails-image03.png"

import Mainbtn from "../Components/Buttons/Mainbtn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay,Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import destinationCtgData from "../Data/DestinationCtg.json";
import {Icon} from "@iconify/react";

const DestinationDetails = () => {
    const {id} = useParams();

    const desCtgData=destinationCtgData.find(
        (item)=>item.id === parseInt(id)
    );

    if(!desCtgData){
        return <h2 className='text-center mt-20'>Destination Not found</h2>
    }

  return (
    <>
        <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{
            backgroundImage: `url(${sectionbanner})`,
        }}
        >
            <div className="section-content z-0 text-center">
                <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">Destination Details
                </h4>
                <ul className="flex items-center flex-wrap justify-center gap-2">
                <li>
                    <Link
                    to={desCtgData.id}
                    className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
                    >
                    </Link>
                </li>
                <span className='text-secondary'></span>
                <li>
                    <Link to={desCtgData.id} className="cursor-pointer text-sm lg:text-lg font-medium text-secondary">{desCtgData.name}</Link>
                </li>
                </ul>
            </div>
        </div>

        <div className="bg-[#efffff] w-full">
            <div className='destination-wrap mx-auto lg:w-5xl lg:min-w-5xl px-[2%] py-[6%] space-y-10 relative'>
                <div className="relative">
                    <button className="ctg-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white flex items-center justify-center shadow cursor-pointer">
                        <Icon icon="ep:arrow-left-bold" width="24" height="24" />
                    </button>
            
                    <button className="ctg-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white flex items-center justify-center shadow cursor-pointer">
                        <Icon icon="ep:arrow-right-bold" width="24" height="24" />
                    </button>

                    <Swiper
                        modules={[Navigation,Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation={{
                            prevEl:".des-prev",
                            nextEl:".des-next",
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="rounded-3xl"
                        >

                        <SwiperSlide>
                            <img
                                src={destination1}
                                alt="destination-1"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src={destination2}
                                alt="destination-2"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src={destination3}
                                alt="destination-3"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className="destination-content bg-white p-5">
                    <h3 className="text-4xl font-medium text-secondary pb-5">
                        {desCtgData.name}
                    </h3>
                    <p className="text-secondary pb-8">
                        {desCtgData.name} is a dynamic city where skyscrapers meet traditional markets and vibrant street life.
                        Enjoy stunning harbor views, shopping, and rich cultural experiences.
                    </p>
                    <h3 className="text-3xl font-medium text-secondary pb-5">
                        Destinations Features
                    </h3>
                    <ul className="space-y-5 pb-8">
                        <li className="flex items-start flex-wrap sm:flex-nowrap gap-2 text-lg font-light text-secondary">
                        <Icon
                            icon="ph:seal-check-fill"
                            width="25"
                            height="25"
                            className="text-green-600"
                        />
                        Explaining historical
                        </li>

                        <li className="flex items-start flex-wrap sm:flex-nowrap gap-2 text-lg font-light text-secondary">
                        <Icon
                            icon="ph:seal-check-fill"
                            width="25"
                            height="25"
                            className="text-green-600"
                        />
                        cultural
                        </li>

                        <li className="flex items-start flex-wrap sm:flex-nowrap gap-2 text-lg font-light text-secondary">
                        <Icon
                            icon="ph:seal-check-fill"
                            width="25"
                            height="25"
                            className="text-green-600"
                        />
                        and natural significance of place Assisting with logistics like hotel check-ins
                        </li>

                        <li className="flex items-start flex-wrap sm:flex-nowrap gap-2 text-lg font-light text-secondary">
                        <Icon
                            icon="ph:seal-check-fill"
                            width="25"
                            height="25"
                            className="text-green-600"
                        />
                        local transport
                        </li>

                        <li className="flex items-start flex-wrap sm:flex-nowrap gap-2 text-lg font-light text-secondary">
                        <Icon
                            icon="ph:seal-check-fill"
                            width="25"
                            height="25"
                            className="text-green-600"
                        />
                        and dining Offering safety tips and local etiquette guidance Customizing itineraries based on traveler interests
                        </li>
                    </ul>
                    <h3 className="text-3xl font-medium text-secondary pb-5">
                        Related Tour Packages
                    </h3>
                    <p className='text-secondary pb-8'>
                        No destinations found for this location.
                    </p>

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
        </div>
    </>
  )
}

export default DestinationDetails