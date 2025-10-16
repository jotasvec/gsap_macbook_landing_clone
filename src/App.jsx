import React from 'react'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import Footer from './components/footer.jsx'
import gsap from "gsap";
import { ScrollTrigger, SplitText } from 'gsap/all'


// gsap should be available for the entire app
gsap.registerPlugin(ScrollTrigger) 

const App = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        <ProductViewer />
        <Footer />
    </main>
  )
}

export default App;