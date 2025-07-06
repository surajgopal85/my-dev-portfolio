import './App.css'
import React, { useRef } from 'react';
// import { About } from './About';
import { TopNav } from './TopNav';
import { PortfolioMain } from './PortfolioMain';
import { Hero } from './Hero';
import { Experience } from './Experience';
// import { SideNavSocials } from './SideNavSocials';

function App() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    // init null, eventually references a div for scroll
    let ref: React.RefObject<HTMLDivElement> | null = null;
    // switchboard to handle :)
    switch (id) {
      case 'experience':
        ref = experienceRef;
        break;
      case 'project':
        ref = projectsRef;
        break;
      case 'contact':
        ref = contactRef;
        break;
      default:
        break;
    }

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div className='min-h-screen bg-dark-bg text-light-text font-sans'>
      <TopNav onNavLinkClick={scrollToSection}/>
      {/* <SideNavSocials /> */}
      <Hero 
      name="Suraj"
      tagline="I build fast & accessible web apps with React & TypeScript."
      ctaText="Learn More"
      scrollText='Scroll down to learn more.'
      // ctaHref="#projects"
      />
      <div className='flex flex-col justify-center'>
        <div id='experience' className='flex flex-col justify-center items-center' ref={experienceRef}>
          <Experience />
        </div>
        {/* <div className='flex flex-col justify-center items-center' id='experience'>
          <Experience />
        </div> */}
        <div>
          <PortfolioMain />
        </div>
      </div>
    </div>
  )
}

export default App;
