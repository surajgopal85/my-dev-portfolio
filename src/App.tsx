// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// my imports
import { About } from './About';
import { PortfolioOverview } from './PortfolioOverview';
import { Hero } from './Hero';
import { SideNavSocials } from './SideNavSocials';

function App() {

  return (
    <div className='min-h-screen bg-dark-bg text-light-text font-sans'>
      <SideNavSocials />
      <Hero 
      name="Suraj"
      tagline="I build fast & accessible web apps with React & TypeScript."
      ctaText="Learn More"
      scrollText='Scroll down to learn more.'
      // ctaHref="#projects"
      />
      {/* <About /> */}
      <PortfolioOverview />
    </div>
  )
}

export default App;
