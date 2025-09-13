import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0D0D0D] text-white py-6 mt-10">
            <div id="Footer" className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left: Social Links */}
                <div className="flex gap-6 text-2xl">
                    <a
                        href="https://github.com/A-Nafis-Ch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/abdullah-nafis-chowdhury-7510611a8/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullahnafis256@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* Right: Tagline or Copyright */}
                <div className="text-sm text-gray-400 text-center md:text-right">
                    © {new Date().getFullYear()} Nafis Chowdhury • Built with React & Tailwind
                </div>
            </div>
        </footer>
    );
};

export default Footer;
