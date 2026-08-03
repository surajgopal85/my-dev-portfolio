import './App.css'
import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TopNav } from './TopNav';
import { PortfolioMain } from './PortfolioMain';
import { Hero } from './Hero';
import { Experience } from './Experience';
import { AutoScapesCaseStudy } from './AutoScapesCaseStudy';

function HomePage() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    if (id === 'experience' && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <>
      <TopNav onNavLinkClick={scrollToSection} />
      <Hero
        name="Suraj"
        tagline="I build fast & accessible web apps across the front and backend."
        ctaText=""
        scrollText='Click sections in nav to learn more.'
      />
      <div className='flex flex-col justify-center'>
        <div className='flex flex-col justify-center items-center' ref={experienceRef}>
          <Experience />
        </div>
        <div id='projects' ref={projectsRef}>
          <PortfolioMain />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className='min-h-screen bg-dark-bg text-light-text font-sans'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/autoscapes" element={<AutoScapesCaseStudy />} />
      </Routes>
    </div>
  )
}

export default App;
