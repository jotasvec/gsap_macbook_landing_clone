import React from 'react'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import Footer from './components/footer.jsx'
import gsap from "gsap";
import { ScrollTrigger, SplitText } from 'gsap/all'
import Showcase from './components/Showcase.jsx'
import Highlights from './components/Highlights.jsx'
import Performance from './components/Performance.jsx'
import Features from './components/Features.jsx'


// gsap should be available for the entire app
gsap.registerPlugin(ScrollTrigger) 

const App = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        <ProductViewer />
        <Showcase />
        <Performance />
        <Features />
        <Highlights />
        <Footer />
    </main>
  )
}

export default App;