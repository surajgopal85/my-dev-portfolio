import React, { useState, useRef } from 'react'
// import myHeadshot from './assets/images/suraj-gopal-headshot.jpeg';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

type HeroProps = {
  name: string
  tagline: string
  ctaText: string
  scrollText: string
//   ctaHref: string
}

export const Hero: React.FC<HeroProps> = ({ name, tagline, ctaText, scrollText }) => {
    // const [isTypingDone, setIsTypingDone] = useState(false);
    const [isScrollVisible, setIsScrollVisible] = useState(false);
    const targetDivRef = useRef(null);

  // Trigger when typing is done
  const handleTypewriterDone = () => {
    // setIsTypingDone(true);
    console.log('Typewriter finished!'); // Log when typing finishes
    setIsScrollVisible(true);
    // setTimeout(() => {
    //   console.log('Showing scroll message'); // Log when scroll message should show
    //   setIsScrollVisible(true); // Set state to show scroll message
    // }, 500); // Slight delay before showing the "scroll down" text
  };

  const handleClick = (e: React.MouseEvent) => {
    console.log(`mouse clicked!`);
    console.log('scroll to div using useRef');
  }


  return (
    <section className="flex flex-col items-center justify-center h-screen text-center text-white py-20 px-8 font-font-display space-y-4">        
      <h1 className="mt-24 text-5xl font-semibold hover:text-yellow-400 transition-colors duration-300">Hey, I'm {name}</h1>
      {/* <p className="mt-4 text-lg text-gray-400"> */}
        {/* Typewriter animation for tagline */}
        <motion.p
            className="mt-4 text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} // Fade in once typing is done
            transition={{ duration: 1 }}
        >
            <Typewriter
                words={[tagline]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={1000}
                onLoopDone={() => {
                    console.log('onLoopDone triggered!');
                    handleTypewriterDone();
                  }}
                // onDone={onTypewriterDone} // Callback when typing is finished
                />
        </motion.p>
        {/* Scroll-down message */}
        {isScrollVisible && (
            <motion.p
            className="mt-4 text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >
            {scrollText}
            </motion.p>
        )}
      <button onClick={handleClick}
      className="mt-8 py-3 px-6 
      bg-transparent border-2 border-white text-white 
      text-lg rounded-full hover:bg-white hover:text-gray-900 
      transition-all duration-300">{ctaText}</button>
      {/* <a
        href={ctaHref}
        className="bg-cta-bg text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        {ctaText}
      </a> */}
      {/* <div ref={targetDivRef}>
        <About />
      </div>
      <div>
        <PortfolioOverview />
      </div> */}
    </section>
  )
}
