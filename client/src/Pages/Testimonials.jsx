import React from 'react'
import titleShape from "../assets/Title-Shape.png";
import sectionbanner from "../assets/servicedetails-page-banner.jpg";
import { Link } from "react-router-dom";

import tst1 from "../assets/testimonials-01.jpg";
import tst2 from "../assets/testimonials-02.jpg";
import tst3 from "../assets/testimonials-03.jpg";
import tst4 from "../assets/testimonials-04.jpg";
import tst5 from "../assets/testimonials-05.jpg";
import tst6 from "../assets/testimonials-06.jpg";

import { Icon } from "@iconify/react";
import quote from "../assets/Quote.png"

const Testimonials = () => {

  const testimonials = [
    { id: 1, name: "Kavin Martin", image: tst1 },
    { id: 2, name: "Alex Morgan", image: tst2 },
    { id: 3, name: "John Carter", image: tst3 },
    { id: 4, name: "Sophia Lee", image: tst4 },
    { id: 5, name: "Daniel Smith", image: tst5 },
    { id: 6, name: "Emma Watson", image: tst6 },
  ];

  return (
    <>
      <div
          className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
          style={{ backgroundImage: `url(${sectionbanner})` }}
        >
        <div className="section-content z-0 text-center">
          <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">
            Services
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link
                to="/"
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Home
              </Link>
            </li>
            <span className="text-secondary">/</span>
            <li>
              <Link
                to="/testimonials"
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#effefe] px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%]">
        <div className="title flex flex-col justify-center items-center text-center relative pb-10">
          <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            <span className="text-yellow">
              Our Client
            </span>{" "}
            Says!
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

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {testimonials.slice(0,4).map((item)=>(
            <div key={item.id} className="tst-item flex justify-center">
              <div className="tst-img w-60 h-60 md:w-280px md:h-280px rounded-2xl overflow-hidden relative">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

                <div className="flex p-1 bg-black absolute bottom-0 left-0 rounded-2xl rounded-tl-none">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      icon="material-symbols:star-rounded"
                      width="20"
                      height="20"
                      className="text-yellow"
                    />
                  ))}
                </div>
              </div>

              <div className="tst-content pt-2 relative">
                <img src={quote} alt="quote" className="w-16 h-16 absolute right-0 top-0 "/>
                <h2 className="text-4xl font-kaushan! text-secondary">
                  {item.name}
                </h2>
                <span className="text-yellow text-lg font-semibold">Travelor</span>
                <p className="pt-5 text-[20px] font-medium text-secondary/80">
                  I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.
                </p>
              </div>    
            </div>
            ))}
        </div>



      </div>
    </>
  )
}

export default Testimonials