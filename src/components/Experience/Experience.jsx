import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { PiXLogoBold } from "react-icons/pi";

const Experience = () => {
  return (
    <div>
      {/* Header */}
      <div className="header text-lg md:text-2xl font-bold tracking-tight text-white flex justify-center items-center mt-10 md:mt-20">
        EXPERIENCE
      </div>

      {/* Section */}
      <div
        className="experience section p-6 md:p-20 flex flex-col md:flex-row gap-10 md:gap-x-[450px] items-center md:items-start"
        id="experience"
      >
        {/* Icons */}
        <div className="expicons w-full md:w-[300px] grid grid-cols-3 gap-x-6 gap-y-4  md:ml-12 text-center">
          <FaHtml5 size={40} className="mx-auto" color="#F06529" />
          <FaCss3Alt size={40} className="mx-auto" color="dodgerblue" />
          <FaJsSquare size={40} className="mx-auto" color="orange" />
          <FaReact size={40} className="mx-auto" color="#61DBFB" />
          <RiTailwindCssFill size={40} className="mx-auto" color="#5637E7" />
          <RiNextjsFill size={40} className="mx-auto" color="#000000" />
          <SiMongodb size={40} className="mx-auto col-span-3 md:col-span-1" color="#3FA037" />
        </div>

        {/* Experience Card */}
        <div className="expcards flex justify-center md:justify-start">
          <div className="card1 text-white bg-[#0D0D0D]/30 w-[200px] md:w-[250px] opacity-90 p-4 flex flex-row items-start gap-4 rounded-lg">
            {/* Logo */}
            <div>
              <PiXLogoBold size={35} color="#d11837ff" />
            </div>

            {/* Text */}
            <div>
              <h1 className="font-bold text-sm md:text-lg tracking-tighter">X Index Companies</h1>
              <p className="text-[10px] md:text-sm">Feb 2024 - Continuing</p>
              <ul className="text-[10px] md:text-sm tracking-tighter space-y-1">
                <li>- Jr. Executive IT</li>
                <li>- IT Infrastructure Engineer</li>
                <li>- Frontend Web Dev</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
