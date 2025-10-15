import React from 'react'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import Footer from './components/footer.jsx'


const App = () => {
  return (
    <main>
        <NavBar />
        <p>what is going on</p>
        <Hero />
        <ProductViewer />
        <Footer />
    </main>
  )
}

export default App;