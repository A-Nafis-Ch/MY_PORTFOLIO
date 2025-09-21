import React from 'react'

const ProjectCard = ({ title, img, desc, srcCode, demo }) => {
  return (
    <div className="bg-[#0D0D0D]/30 w-[150px] md:w-[250px] h-[400px] p-5 text-white flex flex-col justify-between rounded-lg shadow-lg">

      {/* Top: Image */}
      <div className="proImg w-full h-[150px]">
        <img
          src={img}
          alt="Project Preview"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Middle: Title + Description */}
      <div className="flex flex-col gap-2">
        <h1 className="text-sm md:text-lg font-bold tracking-tight">{title}</h1>
        <p className="text-[10px] md:text-sm text-gray-300 leading-snug line-clamp-3">
          {desc}
        </p>
      </div>

      {/* Bottom: Buttons */}
      <div className="flex justify-center items-center gap-2">
        <a href={srcCode} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 hover:bg-blue-700 px-2 md:px-4 md:py-2 rounded text-white text-sm">
            Github
          </button>
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
        <button className="bg-green-600 hover:bg-green-700 px-2 md:px-4 md:py-2 rounded text-white text-sm">
          Demo
        </button>
        </a>
      </div>
    </div>

  )
}

export default ProjectCard
