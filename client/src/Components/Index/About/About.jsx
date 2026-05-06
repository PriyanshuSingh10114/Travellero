import React from 'react'
import icon1 from "../../../assets/travel-guide.png";
import icon2 from "../../../assets/mission-icon.png";
// import Mainbtn from "../../Buttons/Mainbtn";

// import authore1 from "../../../assets/pic1.jpg";
// import authore2 from "../../../assets/pic2.jpg";
// import authore3 from "../../../assets/pic3.jpg";

// import airplane from "../../../assets/airplane.png";
// import aboutimg1 from "../../../assets/about-image01.png";
// import aboutimg2 from "../../../assets/about-image02.png";
// import aboutimg3 from "../../../assets/about-image03.png";


const About = () => {
  return (
    <>
        <div className="px-[2%] md:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex justify-between items-start xl:flex-row flex-col gap-12 h-auto xl:h-250 bg-yellow-light">
            <div className="w-full xl:w-[50%] title relative h-full">
                <h1 className="text-secondary text-3xl md:text-4xl xl:text-5xl font-bold pb-3">
                We <span className="text-yellow">Recommend </span>
                Beautiful Destinations Every Month
                </h1>
                <p className='text-gray-500 pb-5'>
                  Travlla is a multi-award-winning strategy and content creation agency that specializes in travel marketing. They have one of the world's largest and most influential online travel communities, helping brands and tourism.
                </p>

                <ul className='space-y-5'>
                  <li className='flex items-center flex-wrap md:flex-nowrap border border-secondary/30 p-5 gap-5 rounded-xl'>
                    <img src={icon1} alt="icon-img" className='w-14 h-14'/>
                    <div>
                      <span className='text-xl font-semibold'>Trusted Travel Guide</span>
                      <p>
                        Provides reliable information to help travelers plan their trips efficiently and safely.
                      </p> 
                    </div>         
                  </li>

                  <li className='flex items-center flex-wrap md:flex-nowrap border border-secondary/30 p-5 gap-5 rounded-xl'>
                    <img src={icon2} alt="icon-img" className='w-14 h-14'/>
                    <div>
                      <span className='text-xl font-semibold'>Mission & Vision</span>
                      <p>
                        Aims to connect people to positive experience through travel, helping them see the world differently.
                      </p> 
                    </div>         
                  </li>
                </ul>

                

            </div>
        </div>
    </>
  )
}

export default About