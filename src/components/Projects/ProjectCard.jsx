import React from 'react'

const ProjectCard = () => {
  return (
    <div className="bg-[#0D0D0D]/30 w-[150px] md:w-[250px] h-[400px] p-5 text-white flex flex-col justify-between rounded-lg shadow-lg">

      {/* Top: Image */}
      <div className="proImg w-full h-[150px]">
        <img
          src="../src/assets/projectdemo.jpg"
          alt="Project Preview"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Middle: Title + Description */}
      <div className="flex flex-col gap-2">
        <h1 className="text-sm md:text-lg font-bold tracking-tight">Project Title</h1>
        <p className="text-[10px] md:text-sm text-gray-300 leading-snug line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, accusamus.
          Et asperiores illum officia enim, dolore, iusto, dolor provident pariatur nihil itaque temporibus quis.
        </p>
      </div>

      {/* Bottom: Buttons */}
      <div className="flex gap-2">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm px-3 py-1 rounded">
          GitHub
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white text-xs md:text-sm px-3 py-1 rounded">
          Live Demo
        </button>
      </div>
    </div>

  )
}

export default ProjectCard
