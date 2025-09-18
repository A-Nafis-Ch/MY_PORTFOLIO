import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id="Projects" className="text-white w-full md:w-3/4 mx-auto p-5 md:p-10">

      {/* Section Heading */}
      <h1 className="text-lg md:text-2xl font-bold tracking-tighter text-center mb-8">
        PROJECTS
      </h1>

      {/* Project Cards Container */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        <ProjectCard title="Foody Zone" img="../src/assets/Food Website/HomePage.png" desc="Food Selling Website built with React, HTML, CSS, JS, and Styled-Components." srcCode="https://github.com/A-Nafis-Ch/Foody-Zone-Website-Project.git" demo="#" />
        <ProjectCard title="Twitter X Clone Tailwind CSS" img="../src/assets/Twitter X Clone/Twitter_X.png" desc="Twitter X Clone Project done using raw html file with TailwindCss." srcCode="https://github.com/A-Nafis-Ch/Twitter-X-Clone-" demo="#"  />
        <ProjectCard title="Spotify Clone" img="../src/assets/Spotify Clone/Spotify_Clone.png" desc="Spotify Clone using html, css and JavaScript." srcCode="https://github.com/A-Nafis-Ch/Spotify_Clone" demo="#"  />
        {/* add more <ProjectCard /> as needed */}
      </div>

    </div>
  )
}

export default Projects
