import React from 'react'
import titleShape from "../assets/Title-Shape.png";
import sectionbanner from "../assets/servicedetails-page-banner.jpg";
import { Link } from "react-router-dom";

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
    </>
  )
}

export default PricingPlan