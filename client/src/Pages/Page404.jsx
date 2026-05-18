import React from 'react'
import titleShape from "../assets/Title-Shape.png";
import sectionbanner from "../assets/service-page-banner.jpg";
import { Link,useParams } from "react-router-dom";

import cloudbg from "../assets/error-bg-cloud.png"
import ballon from "../assets/hotballon-error.png"
import Mainbtn from "../Components/Buttons/Mainbtn";

import errorbg from "../assets/error-bg.png"

const Page404 = () => {
  return (
    <>
        <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{
            backgroundImage: `url(${sectionbanner})`,
        }}
        >
            <div className="section-content z-0 text-center">
                <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">Page Not Found
                </h4>
                <ul className="flex items-center flex-wrap justify-center gap-2">
                <li>
                    <Link
                    to='/'
                    className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
                    >
                    </Link>
                </li>
                <span className='text-secondary'></span>
                <li>
                    <Link to='/pagenotfound' className="cursor-pointer text-sm lg:text-lg font-medium text-secondary">404-Not Found</Link>
                </li>
                </ul>
            </div>
        </div>

        <div
            className="404-page bg-[#EFFFFF] px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex justify-between items-center flex-wrap lg:flex-nowrap gap-10 bg-no-repeat bg-bottom"
            style={{ backgroundImage: `url(${cloudbg})` }}
            >

            <div className="content w-full lg:w-1/2">
                <div className="title">
                    <span className="block text-[40px] font-semibold tracking-wider text-secondary leading-none">
                        Oops!
                    </span>

                    <h1 className="flex items-center justify-center flex-wrap text-[180px] md:text-[220px] lg:text-[260px] font-semibold leading-[0.8] drop-shadow-[0px_26px_10px_rgba(6,97,104,0.26)] text-secondary">
                        4
                        <img
                            src={ballon}
                            alt="ballon"
                            className="w-140px md:w-180px lg:w-220px object-contain"
                        />
                        4
                    </h1>
                </div>
                <div className="page-not-found-title text-center mt-10">
                    <span className="block text-[40px] font-semibold text-secondary font-figtree">
                        Page Not Found
                    </span>
                    <p className="text-secondary text-lg lg:w-sm mx-auto pb-5">
                        The page you're looking for isn't available.
                        Try searching again or go back home.
                    </p>
                    <Mainbtn
                        text={"Back to Home"}
                        to="/home"
                    />
                </div>
            </div>
            <div className='error-img w-full lg:w-1/2'>
                <img src={errorbg} alt="error-img" className='w-full h-full'/>
            </div>
        </div>
    </>
  )
}

export default Page404