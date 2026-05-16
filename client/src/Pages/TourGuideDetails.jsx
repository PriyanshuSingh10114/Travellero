import React from 'react'
import titleShape from "../assets/Title-Shape.png";
import sectionbanner from "../assets/servicedetails-page-banner.jpg";
import { Link, useParams } from "react-router-dom";
import {Icon} from "@iconify/react";

import teams from "../Data/Teams.json"

const TourGuideDetails = () => {

    const {id} = useParams();
    const team = teams.find(
        (item)=>item.id===parseInt(id)
    );

    if(!team){
        return <h2 className='text-center mt-20'>
            Teams Not Found
        </h2>
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
                <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">{team.name}
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
                        <Link to="/services" className="cursor-pointer text-sm lg:text-lg font-medium text-secondary">Team</Link>
                    </li>
                    <span className='text-secondary'>/</span>
                    <li>
                        <Link to={team.id} className="cursor-pointer text-sm lg:text-lg font-medium text-secondary">{team.name}</Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className='flex flex-col bg-[#daeeef] sm:p-10 rounded-lg'>
            <div className='bg-white px-[2%] sm:px-[8%] py-[6%] md:py-[8%] rounded-2xl flex justify-between items-start gap-10 relative flex-col lg:flex-row'>
                <div
                    key={team.id}
                    className="tem-item bg-white [box-shadow:0px_18px_18px_rgba(0,106,114,0.1)] p-3.5 rounded-2xl h-full lg:sticky lg:left-0 left:top-0 lg:min-w-[30%] w-full lg:w-[30%]"
                    >
                    <div className="team-img rounded-2xl overflow-hidden group">
                        <img src={team.image} alt="team-img" className="group-hover:scale-110 transition-all duration-300" />
                    </div>

                    <div className="team-content text-center pt-5">
                        <ul className="flex justify-center mb-2">
                            <li className="social-icon inline-flex h-11 w-11 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
                                <Link to="https://x.com/" className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]">
                                    <Icon icon="codicon:twitter" width="24" height="24" />
                                </Link>
                            </li>

                            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
                            <Link to="https://www.facebook.com/" className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]">
                            <Icon icon="mdi:facebook" width="24" height="24" />
                            </Link>
                            </li>

                            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
                            <Link to="https://www.instagram.com/" className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]">
                            <Icon icon="mingcute-instagram-line" width="24" height="24" />
                            </Link>
                            </li>

                            <li className="social-icon inline-flex h-11.5 w-11.5 bg-yellow me-2.5 rounded-[50%] overflow-hidden justify-center items-center transition-all duration-500 ease-in-out group hover:rounded-[10px] hover:shadow-lg">
                            <Link to="https://www.youtube.com/" className="h-9 w-9 flex justify-center items-center bg-secondary text-white text-[18px] rounded-[50%] transition-all duration-500 ease-in-out group-hover:text-yellow group-hover:rounded-[10px]">
                            <Icon icon="line-md:youtube" width="24" height="24" />
                            </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className='w-full lg:w-[70%] flex flex-col'>
                    <h3 className='text-secondary text-4xl font-bold pb-2'>About</h3>
                    <p className='text-md text-secondary/80 tracking-wide pb-5'>
                    I am a professional who enhances travel experiences by leading individuals or groups through destinations, providing insightful commentary, logistical support, and cultural interpretation. Here's a complete overview:
                    </p>
                    <ul className='tour-guide-list'>
                        <li>
                            <span>Age:</span>
                            {team.Age}
                        </li>
                        <li>
                            <span>Education:</span>
                            {team.Education}
                        </li>
                        <li>
                            <span>Job Title:</span>
                            {team.jobtitle}
                        </li>
                        <li>
                            <span>Location:</span>
                            {team.Location}
                        </li>
                        <li>
                            <span>Experiences:</span>
                            {team.Experiences}
                        </li>
                        <li>
                            <span>Contact:</span>
                            {team.Contact}
                        </li>
                        <li>
                            <span>Email:</span>
                            {team.Email}
                        </li>
                    </ul>

                    <h3 className='text-secondary text-4xl font-bold pb-2'>Essential Skills</h3>

                    <ul className='space-y-4 mb-5'>

                        <li className='flex items-center gap-2 text-gray-500/80 font-light'>
                            <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className='text-yellow'>
                            </Icon>
                            Communications & Storytelling
                        </li>

                        <li className='flex items-center gap-2 text-gray-500/80 font-light'>
                            <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className='text-yellow'>
                            </Icon>
                            Leadership & group management
                        </li>

                        <li className='flex items-center gap-2 text-gray-500/80 font-light'>
                            <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className='text-yellow'>
                            </Icon>
                            Time coordination & logistics
                        </li>

                        <li className='flex items-center gap-2 text-gray-500/80 font-light'>
                            <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className='text-yellow'>
                            </Icon>
                            Multilingual ability
                        </li>

                        <li className='flex items-center gap-2 text-gray-500/80 font-light'>
                            <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className='text-yellow'>
                            </Icon>
                            Cultural sensitivity
                        </li>

                        <li className='flex items-center gap-2 text-gray-500/80 font-light'>
                            <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className='text-yellow'>
                            </Icon>
                            First aid & safety awareness (especially for adventure guides)
                        </li>

                    </ul>

                    <h3 className='text-secondary text-4xl font-bold pb-2'>Certifications & Training</h3>

                    <ul className='space-y-4 mb-5'>
                        <li className='flex items-center gap-2 text-gray-500/80 font-light'>
                            <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className='text-yellow'>
                            </Icon>
                            <div className=''>
                                <span className='text-secondary font-medium'>India:</span>
                            </div>
                            Ministry of Tourism offers licenses via IITTM and regional programs
                        </li>

                        <li className='flex items-center gap-2 text-gray-500/80 font-light'>
                            <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className='text-yellow'>
                            </Icon>
                            <div className=''>
                                <span className='text-secondary font-medium'>Global:</span>
                            </div>
                            WFTGA (World Federation of Tourist Guide Associations) sets international standards
                        </li>

                        <li className='flex items-center gap-2 text-gray-500/80 font-light'>
                            <Icon icon="fluent:arrow-circle-right-16-regular" width="24" height="24" className='text-yellow'>
                            </Icon>
                            <div className=''>
                                <span className='text-secondary font-medium'>Specialized Courses:</span>
                            </div>
                            Adventure guiding, museum interpretation, eco-tourism, etc.
                        </li>


                    </ul>

                </div>

            </div>
        </div>
    </>
  )
}

export default TourGuideDetails