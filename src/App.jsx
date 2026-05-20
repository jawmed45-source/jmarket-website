import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Agency from "./pages/Agency"
import Projects from "./pages/Projects"
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'
import Contact from './pages/Contact'
import Blog from './pages/Blog'



const App = () => {

  

  return (
    <div className='text-white overflow-x-hidden'>

      
      <Navbar />
      <FullScreenNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agency' element={<Agency />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
