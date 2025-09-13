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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        {/* add more <ProjectCard /> as needed */}
      </div>

    </div>
  )
}

export default Projects
