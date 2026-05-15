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
    </>
  )
}

export default Testimonials