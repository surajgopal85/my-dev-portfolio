import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

type TopNavProps = {
    onNavLinkClick: (id: string) => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onNavLinkClick }) => {
    return (
        // wrap in Framer motion
        <motion.nav>
            <div className="text-light-text text-xl font-display font-bold">
                Suraj Gopal
            </div>
        </motion.nav>
    )
}