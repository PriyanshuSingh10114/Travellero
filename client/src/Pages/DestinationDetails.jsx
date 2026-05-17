import React from 'react'
import titleShape from "../assets/Title-Shape.png";
import sectionbanner from "../assets/service-page-banner.jpg";
import { Link,useParams } from "react-router-dom";

import destination1 from "../assets/destinationdetails-image01.png"
import destination2 from "../assets/destinationdetails-image02.png"
import destination3 from "../assets/destinationdetails-image03.png"

import Mainbtn from "../Components/Buttons/Mainbtn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
            <div className='destination-wrap'></div>
        </div>
    </>
  )
}

export default DestinationDetails