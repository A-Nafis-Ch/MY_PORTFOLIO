import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div
      id="Projects"
      className="text-white w-full md:w-3/4 mx-auto p-5 md:p-10"
    >
      <h1 className="text-lg md:text-2xl font-bold tracking-tighter text-center mb-8">
        PROJECTS
      </h1>

      {/* Carousel Container */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={slideLeft}
          className="absolute left-2 md:left-5 z-50 bg-[#111]/70 p-3 rounded-full cursor-pointer"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Cards Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar mx-auto w-[90%] md:w-[70%] justify-center py-4"
        >
          <ProjectCard
            title="Foody Zone"
            img="/Food Website/HomePage.png"
            desc="Food Selling Website built with React + Styled Components."
            srcCode="https://github.com/A-Nafis-Ch/Foody-Zone-Website-Project.git"
            demo="#"
          />

          <ProjectCard
            title="Twitter X Clone"
            img="/Twitter X Clone/Twitter_X.png"
            desc="Twitter X Clone using HTML + TailwindCSS."
            srcCode="https://github.com/A-Nafis-Ch/Twitter-X-Clone-"
            demo="https://a-nafis-ch.github.io/Twitter-X-Clone/"
          />

          <ProjectCard
            title="Spotify Clone"
            img="/Spotify Clone/Spotify_Template.jpg"
            desc="Spotify Web UI Clone using HTML CSS and JS."
            srcCode="https://github.com/A-Nafis-Ch/Spotify__Clone_Website.git"
            demo="#"
          />




          {/* You can add more cards here */}
        </div>

        {/* Right Arrow */}
        <button
          onClick={slideRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#111]/80 p-3 rounded-full cursor-pointer"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
