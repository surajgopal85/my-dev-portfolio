import React, { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

type HeroProps = {
  name: string
  tagline: string
  ctaText: string
  scrollText: string
}

export const Hero: React.FC<HeroProps> = ({ name, tagline, ctaText, scrollText }) => {
    const [isScrollVisible, setIsScrollVisible] = useState(false);

  const handleTypewriterDone = () => {
    console.log('Typewriter finished!');
    setIsScrollVisible(true);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center text-light-text px-4 sm:px-8 pt-24 pb-12 overflow-hidden">
      {/* ... keep all your existing JSX exactly the same, just remove the button onClick or make it do nothing ... */}
      
      <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-purple rounded-full filter blur-3xl opacity-20"
      ></motion.div>
      <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue rounded-full filter blur-3xl opacity-20"
      ></motion.div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold leading-tight z-10">
        Hey, I'm <span className="text-accent-blue transition-colors duration-300">{name}</span>
      </h1>

      <motion.p
        className="mt-6 text-lg sm:text-xl md:text-2xl text-subtle-text max-w-3xl px-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Typewriter
          words={[tagline]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={20}
          delaySpeed={1500}
          onLoopDone={handleTypewriterDone}
        />
      </motion.p>

      {isScrollVisible && (
        <motion.p
          className="mt-8 text-md sm:text-lg text-subtle-text z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {scrollText}
        </motion.p>
      )}

      {/* Either remove this button or make it do nothing for now */}
      <motion.button
        className="mt-12 py-3 px-8 
                   bg-transparent text-light-text 
                   text-lg rounded-full hover:bg-light-text hover:text-dark-bg 
                   transition-all duration-300 font-medium z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {ctaText}
      </motion.button>
    </section>
  );
}