import React from 'react'
import titleShape from "../assets/Title-Shape.png";
import sectionbanner from "../assets/tour-bg.jpg";
import { Link } from "react-router-dom";

import tourData from "../Data/PopularTours.json"
import PopularTourCard from '../Components/Index/PopularTourCard/PopularTourCard';
import SectionTransition from '../Components/SectionTransition/SectionTransition';

const Tours = () => {
  return (
    <>

      <div
      className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
      style={{
          backgroundImage: `url(${sectionbanner})`,
      }}
      >
          <div className="section-content z-0 text-center">
              <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">Tours
              </h4>
              <ul className="flex items-center flex-wrap justify-center gap-2">
              <li>
                  <Link
                  to="/"
                  className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
                  >
                  </Link>
              </li>
              <span className='text-secondary'></span>
              <li>
                  <Link to='/tours' className="cursor-pointer text-sm lg:text-lg font-medium text-secondary">Tours</Link>
              </li>
              </ul>
          </div>
      </div>

      <SectionTransition from="teal" to="cyan" />

      <div className="bg-[#effefe] px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%]">
        <div className="title flex flex-col justify-center items-center text-center relative mb-10">
            <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            <span className="text-yellow">
                Explore Popular
            </span>{" "}
            Tours!
            </h1>
            <p className="text-secondary my-2 text-lg">
            Destinations worth exploring! Here are a few popular spots
            </p>
            <img
            src={titleShape}
            alt="titleShape"
            className="w-[35%] object-contain absolute -bottom-12"
            />
        </div>

        <div className='grid lg:grid-cols-2 xl:grid-cols-4 gap-8'>
            {tourData.map((tour)=>(
                <PopularTourCard tour={tour}/>
            ))}
        </div>
      </div>

    </>
  )
}

export default Tours