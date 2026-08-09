import React, { useState } from "react";

import tourbg from "../../../assets/tour-bg.jpg";

import ctg1 from "../../../assets/Tour-Categories-01.jpg";
import ctg2 from "../../../assets/Tour-Categories-02.jpg";
import ctg3 from "../../../assets/Tour-Categories-03.jpg";
import ctg4 from "../../../assets/Tour-Categories-04.jpg";
import ctg5 from "../../../assets/Tour-Categories-05.jpg";
import ctg6 from "../../../assets/Tour-Categories-06.jpg";

import Mainbtn from "../../Buttons/Mainbtn";

import { Icon } from "@iconify/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    id: 1,
    title: "Wildlife",
    pera: "Observing animals in their natural habitats like tiger safaris in Ranthambore or birdwatching in Keoladeo Ghana Bird Sanctuary has become a popular and educational form of travel.",
    image: ctg1,
  },
  {
    id: 2,
    title: "Hiking",
    pera: "Here are the people who we believe most changed the stories that defined the past year.",
    image: ctg2,
  },
  {
    id: 3,
    title: "Adventure Tours",
    pera: "Prime Minister Anthony Albanese has plenty of reasons to ban social media for under-16s.",
    image: ctg3,
  },
  {
    id: 4,
    title: "Cultural Tours",
    pera: "The seven-time Formula One world champion moves to the iconic brand after more than a decade with Mercedes.",
    image: ctg4,
  },
  {
    id: 5,
    title: "Cruise Tours",
    pera: "TIME solicited nominations of places including hotels, cruises, restaurants, attractions, museums, parks, and more from around the world.",
    image: ctg5,
  },
  {
    id: 6,
    title: "Dark Tourism",
    pera: "After inauguration day, it is on Trump and America to ensure that the oath to defend the U.S. Constitution is kept.",
    image: ctg6,
  },
  {
    id: 7,
    title: "View All",
    isButton: true,
  },
];

const TourCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="tour-ctg-container bg-no-repeat bg-center bg-cover px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex flex-col xl:flex-row gap-12 relative photo-blend photo-blend-both blend-cyan"
      style={{ backgroundImage: `url(${tourbg})` }}
    >
      {/* Left Content */}
      <div className="ctg-content w-full xl:w-[40%] flex flex-col justify-center">
        <h3 className="text-secondary font-afacad text-4xl font-medium pb-2">
          {categories[activeIndex]?.title}
        </h3>

        <p className="text-lg lg:max-w-xl text-secondary/70 mb-5">
          {categories[activeIndex]?.pera}
        </p>

        <Mainbtn text="View More" className="w-fit" to="/tours" />
      </div>

      {/* Slider */}
      <div className="ctg-wrap w-full xl:w-[60%] relative mb-14">

        {/* Prev Button */}
        <button className="ctg-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white flex items-center justify-center shadow cursor-pointer">
          <Icon icon="ep:arrow-left-bold" width="24" height="24" />
        </button>

        {/* Next Button */}
        <button className="ctg-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white flex items-center justify-center shadow cursor-pointer">
          <Icon icon="ep:arrow-right-bold" width="24" height="24" />
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          navigation={{
            prevEl: ".ctg-prev",
            nextEl: ".ctg-next",
          }}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex)
          }
          className="w-full h-full"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={cat.id}>
              {cat.isButton ? (
                <div className="flex justify-center items-center h-full">
                  <Mainbtn
                    text="View All"
                    className="text-sm"
                  />
                </div>
              ) : (
                <div
                  className={`ctg-item bg-white p-5 rounded-2xl w-full transition-all duration-500 ${
                    activeIndex === index
                      ? "scale-100 rotate-0"
                      : "scale-90 rotate-2"
                  }`}
                >
                  <div className="ctg-image rounded-2xl overflow-hidden h-350px">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-center pt-2 block text-2xl lg:text-3xl font-medium text-secondary font-afacad">
                  {cat.title}
                  </span>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative lg:absolute xl:right-40 bottom-8 flex flex-col text-white font-kaushan! text-xl sm:text-2xl xl:text-start text-end xl:text-5xl z-1">
        Wornderful Place For You
        <h2 className="uppercase font-afacad! font-extrabold text-4xl lg:text-6xl xl:text-8xl text-yellow">
            Tour Categories
        </h2>
       </div>
    </div>
  );
};

export default TourCategories;