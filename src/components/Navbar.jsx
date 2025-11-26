import React from "react";

const Navbar = () => {
  return (
    <nav className="text-white flex flex-col md:flex-row md:justify-between p-4">
      <span className="text-xl font-bold tracking-wide p-3">
        {" "}
        &lt; &gt;<span className="text-[#6C63FF]">FRONTEND DEV</span>&lt;/&gt;
      </span>

      <ul className="flex flex-col md:flex-row gap-4 text-lg w-full md:w-auto md:items-center">
        <li>
          <a
            href="#About"
            className="block border text-center md:border-0 hover:text-[20px] hover:text-[#6C63FF]"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Experience"
            className="block border text-center md:border-0 hover:text-[20px] hover:text-[#6C63FF]"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className="block border text-center md:border-0 hover:text-[20px] hover:text-[#6C63FF]"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Footer"
            className="block border text-center md:border-0 hover:text-[20px] hover:text-[#6C63FF]"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/Nafis_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block border text-center md:border-0 hover:text-[20px] hover:text-[#6C63FF]"
          >
            View CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
