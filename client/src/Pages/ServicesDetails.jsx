import React from 'react'
import titleShape from "../assets/Title-Shape.png";
import sectionbanner from "../assets/section-banner.jpg";
import { Link, useParams } from "react-router-dom";
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


const ServicesDetails = () => {
    const {id} = useParams();
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
                            <Link to='/services' className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"></Link>
                        </li>
                    </ul>
                </div>
        </div>
    </>
  )
}

export default ServicesDetails