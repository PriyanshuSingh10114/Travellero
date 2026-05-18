import React from 'react'
import titleShape from "../assets/Title-Shape.png";
import sectionbanner from "../assets/service-page-banner.jpg";
import { Link, useParams } from "react-router-dom";

import tours from "../Data/PopularTours.json"

import destination1 from "../assets/destinationdetails-image01.png"
import destination2 from "../assets/destinationdetails-image02.png"
import destination3 from "../assets/destinationdetails-image03.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay,Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {Icon} from "@iconify/react";

import Mainbtn from "../Components/Buttons/Mainbtn";

import icon1 from "../assets/hotels.png"
import icon2 from "../assets/Sightseeing.png"
import icon3 from "../assets/car.png"
import icon4 from "../assets/meal.png"


const TourDetails = () => {
    const {id} = useParams();

    const tour=tours.find(
        (item)=>item.id === parseInt(id)
    );

    if(!tour){
        return <h2 className='text-center mt-20'>Tours Not found</h2>
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
              <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">Tour Details
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
                  <Link to={tour.id} className="cursor-pointer text-sm lg:text-lg font-medium text-secondary">Tour Details</Link>
              </li>
              <span className='text-secondary'></span>
              <li>
                  <Link to={tour.id} className="cursor-pointer text-sm lg:text-lg font-medium text-secondary">{tour.title}</Link>
              </li>
              </ul>
          </div>
      </div>

      <div className="px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#ffffff] flex justify-between items-start gap-10 flex-wrap lg:flex-nowrap">

        <div className="tour-left bg-white rounded-3xl w-full lg:w-[70%]">
          <div className="p-5 md:p-10">
            <div className="flex items-center gap-2 text-secondary text-sm pb-5">
              {tour.review}
              <div className="flex items-center">
                <Icon
                  icon="material-symbols:star-rounded"
                  width="20"
                  height="20"
                  className="text-yellow"
                />

                <Icon
                  icon="material-symbols:star-rounded"
                  width="20"
                  height="20"
                  className="text-yellow"
                />

                <Icon
                  icon="material-symbols:star-rounded"
                  width="20"
                  height="20"
                  className="text-yellow"
                />

                <Icon
                  icon="material-symbols:star-rounded"
                  width="20"
                  height="20"
                  className="text-yellow"
                />

                <Icon
                  icon="material-symbols:star-rounded"
                  width="20"
                  height="20"
                  className="text-yellow"
                />

              </div>

            </div>

            <h3 className='text-4xl font-semibold text-secondary pb-3 '>{tour.title}</h3>
            <p className='text-sm text-secondary'>{tour.Places}</p>
            <div className='relative p-8'>
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
            </div>

            <h3 className="text-4xl font-medium text-secondary pb-5 pt-8">
              Package Overview
            </h3>
            <p className="text-secondary text-md">
              Experience Phuket, Krabi, and Phi Phi Islands with turquoise waters and scenic beaches.
              A perfect blend of island tours, snorkeling, and leisure time.
            </p>
            <ul className="space-y-5 pt-5">
              <li className="flex items-center gap-2 text-secondary font-normal">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  width="25"
                  height="25"
                  className="text-primary"
                />
                <span>
                  Phuket, Krabi & Phi Phi Island stays
                </span>
              </li>

              <li className="flex items-center gap-2 text-secondary font-normal">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  width="25"
                  height="25"
                  className="text-primary"
                />
                <span>
                  Snorkeling and island-hopping tours
                </span>
              </li>

              <li className="flex items-center gap-2 text-secondary font-normal">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  width="25"
                  height="25"
                  className="text-primary"
                />
                <span>
                  Sunset viewpoints & beach activities
                </span>
              </li>

              <li className="flex items-center gap-2 text-secondary font-normal">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  width="25"
                  height="25"
                  className="text-primary"
                />
                <span>
                  Great for couples & friends
                </span>
              </li>
            </ul>

            <h3 className="text-4xl font-medium text-secondary pb-5 pt-8">
              Additional Easemytrip Delights
            </h3>

            <ul className="space-y-5 pt-5">

              <li className="flex items-center gap-2 text-secondary font-normal">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  width="25"
                  height="25"
                  className="text-primary"
                />
                <span>
                  Local Thailand travel assistance.
                </span>
              </li>

              <li className="flex items-center gap-2 text-secondary font-normal">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  width="25"
                  height="25"
                  className="text-primary"
                />
                <span>
                  Island tour upgrades available.
                </span>
              </li>
            </ul>

            <h3 className="text-4xl font-medium text-secondary pb-5 pt-8">
              Day Wise Itinerary
            </h3>

            <div className="bg-yellow-light p-5 md:p-10 rounded-3xl">
              {Object.entries(tour.DaysDescription).map(([dayKey, dayData], index) => (
                <div
                  key={dayKey}
                  className="list-count flex items-start flex-col md:flex-row mb-8 gap-3"
                >
                  <div className="duration text-center min-w-12">
                    <div className="media w-11.5 h-11.5 bg-yellow rounded-full flex justify-center items-center mt-1.25">
                      <div className="green-bg w-9 h-9 bg-secondary rounded-full flex justify-center items-center font-afacad text-2xl font-bold text-white">
                        {index + 1}
                      </div>
                    </div>
                    <span className="text-lg inline-block text-secondary uppercase">
                      Day
                    </span>
                  </div>
                  <div className="info md:ps-10 flex-1">
                    <h4 className="text-2xl font-medium text-secondary font-figtree pb-5">
                      Day {index + 1}: {dayData.title}
                    </h4>

                    <ul className="space-y-3">
                      {dayData.list.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start flex-wrap gap-2"
                        >
                          <Icon
                            icon="material-symbols:check-circle-rounded"
                            width="18"
                            height="18"
                            className="text-yellow-500 mt-1 min-w-5 min-h-5"
                          />
                          <span className="text-sm text-secondary">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              ))}
            </div>

          </div>
        </div>

        <div className="tour-right w-full lg:w-[30%]">
          <div className="content bg-white p-5 md:p-10 border border-gray-200 rounded-3xl">
            <span className="block text-secondary text-sm font-medium pb-2">
              Starting From
            </span>
            <span className="text-secondary text-5xl font-semibold font-figtree">
              {tour.price}
            </span>
            <span className="text-secondary text-sm">
              / Person
            </span>
            <Mainbtn
              text={"Enquire Now"}
              className="block! w-fit! mt-6 to='/contact'"
            />
          </div>

          <div className="content bg-white p-5 md:p-10 border border-gray-200 rounded-3xl mt-8">
            <ul className="tour-time-duration">
              <li>
                  <span className='font-bold'>
                    Duration:
                  </span>
                  <span className='ng-binding'>{tour.Duration}</span>
              </li>
              <li>
                  <span className='font-bold'>
                    Places to Visit :
                  </span>
                  <span className='ng-binding'>{tour.Places}</span>
              </li>
            </ul>

            <div className="relative my-10 btn-package text-center w-full z-1">
              <span>
                Package Includes
              </span>
            </div>

            <div className="icon-man-holids">
              <ul className="flex justify-between flex-wrap">
                <li>
                  <div className="holids-icon">
                    <img
                      src={icon1}
                      alt="icon"
                      className='holids-icon'
                    />
                  </div>
                  <span className="my-4">
                    Hotels
                  </span>
                </li>

                <li>
                  <div className="holids-icon">
                    <img
                      src={icon2}
                      alt="icon"
                      className='holids-icon'
                    />
                  </div>
                  <span className="my-4">
                    Sightseeing
                  </span>
                </li>

                <li>
                  <div className="holids-icon">
                    <img
                      src={icon3}
                      alt="icon"
                      className='holids-icon'
                    />
                  </div>
                  <span className="my-4">
                    Transfer
                  </span>
                </li>

                <li>
                  <div className="holids-icon">
                    <img
                      src={icon4}
                      alt="icon"
                      className='holids-icon'
                    />
                  </div>
                  <span className="my-4">
                    Meal
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
        
      </div>
    </>
  )
}

export default TourDetails