// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// my imports
import { Hero } from './Hero';
import { SideNavSocials } from './SideNavSocials';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <SideNavSocials />
      <Hero 
      name="Suraj"
      tagline="I build fast & accessible web apps with React & TypeScript."
      ctaText="Learn More"
      scrollText='Scroll down to learn more.'
      // ctaHref="#projects"
      />
    </>
  )
}

export default App

// exforlater
{/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
