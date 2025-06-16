import './App.css'
import React, { useRef } from 'react';
import { About } from './About';
import { TopNav } from './TopNav';
import { PortfolioMain } from './PortfolioMain';
import { Hero } from './Hero';
// import { SideNavSocials } from './SideNavSocials';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    // init null, eventually references a div for scroll
    let ref: React.RefObject<HTMLDivElement> | null = null;
    // switchboard to handle :)
    switch (id) {
      case 'about':
        ref = aboutRef;
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
      <div id='about' ref={aboutRef}>
        <About />
      </div>
      <PortfolioMain />
    </div>
  )
}

export default App;
