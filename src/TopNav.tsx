import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import headshot from './assets/images/suraj-gopal-headshot.jpeg';

type TopNavProps = {
    onNavLinkClick: (id: string) => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onNavLinkClick }) => {
    return (
        // wrap in Framer motion
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 p-4 bg-dark-bg bg-opacity-70 backdrop-blur-md flex justify-between items-center"
        >
            <div className="text-light-text text-xl font-display font-bold">
                <img
                    src={headshot}
                    alt="Suraj Gopal Headshot"
                    className="w-12 h-12 rounded-full object-cover border border-subtle-text"
                />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 text-subtle-text">
                <button onClick={() => onNavLinkClick('about')} className="hover:text-accent-blue transition-colors duration-200 text-lg">About</button>
                <button onClick={() => onNavLinkClick('projects')} className="hover:text-accent-blue transition-colors duration-200 text-lg">Projects</button>
                <button onClick={() => onNavLinkClick('contact')} className="hover:text-accent-blue transition-colors duration-200 text-lg">Contact</button>
            </div>

            {/* icons */}
            <div className="flex space-x-6">
                <a
                    href="https://www.linkedin.com/in/suraj-s-gopal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-subtle-text hover:text-accent-blue transition-colors duration-200 text-xl"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/surajgopal85"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-subtle-text hover:text-accent-blue transition-colors duration-200 text-xl"
                >
                    <FaGithub />
                </a>
                <a
                    href="mailto:surajcancode@gmail.com"
                    aria-label="Email"
                    className="text-subtle-text hover:text-accent-blue transition-colors duration-200 text-xl"
                >
                    <FaEnvelope />
                </a>
            </div>
        </motion.nav>
    )
}