import React from 'react'
    import { BrowserRouter, Routes, Route } from 'react-router-dom'
    import Home from './pages/Home'
    import Blog from './pages/Blog'
    import Contact from './pages/Contact'
    import Navbar from './components/Navbar'
    import Footer from './components/Footer'

    function App() {
      return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )
    }

    export default App
