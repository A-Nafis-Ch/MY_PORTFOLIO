import React from 'react'

const Navbar = () => {


  return (
    <nav className="text-white flex flex-col md:flex-row md:justify-between p-4">

      <span className="text-xl font-bold tracking-wide p-3"> &lt; &gt;<span className='text-[#6C63FF]'>FRONTEND DEV</span>&lt;/&gt;</span>

      <ul className="flex flex-col md:flex-row gap-4 text-lg w-full md:w-auto md:items-center">
        <li><a href="#About" className="block border text-center md:border-0">About</a></li>
        <li><a href="#Experience" className="block border text-center md:border-0">Experience</a></li>
        <li><a href="#Projects" className="block border text-center md:border-0">Projects</a></li>
        <li><a href="#Contact" className="block border text-center md:border-0">Contact</a></li>
      </ul>

    </nav>

  )
}

export default Navbar
