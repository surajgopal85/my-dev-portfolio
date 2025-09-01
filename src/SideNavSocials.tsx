import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import myHeadshot from './assets/images/suraj-gopal-headshot.jpeg';

export const SideNavSocials: React.FC = () => {
    return (
        <div className='fixed top-6 left-6 flex flex-col items-center z-50'>
            <img
                src={myHeadshot}
                alt="My Headshot"
                // border-2 border-white 
                className="w-20 h-20 rounded-full object-cover shadow-md"
            />
            {/* Spacer */}
            <div className='m-16'></div>
            <div className="h-6" />

            {/* Social icons group */}
            <div className="flex flex-col items-center gap-12">
                <a
                href="https://www.linkedin.com/in/suraj-s-gopal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-blue-500 hover:text-blue-300 transition-colors duration-300 text-2xl"
                >
                <FaLinkedin />
                </a>
                <a
                href="https://github.com/surajgopal85"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
                >
                <FaGithub />
                </a>
                <a
                href="mailto:surajcancode@gmail.com"
                aria-label="Email"
                className="text-pink-400 hover:text-pink-200 transition-colors duration-300 text-2xl"
                >
                <FaEnvelope />
                </a>
            </div>
            {/* <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-indigo-200 transition-colors duration-300 text-2xl"
            >
                <FaLinkedin/>
            </a>
            <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="text-white hover:text-indigo-200 transition-colors duration-300 text-2xl"
            >
                <FaGithub/>
            </a>
            <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-indigo-200 transition-colors duration-300 text-2xl"
            >
                <FaEnvelope/>
            </a> */}
        </div>
    )
}