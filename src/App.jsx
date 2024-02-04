import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import HeroSection from './components/HeroSection'
import ProjectDetail from './components/ProjectDetail'
import { AnimatePresence } from 'framer-motion'

function App() {

  return (
    <>
      <BrowserRouter> <AnimatePresence initial={false}>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/project/:id' element={<ProjectDetail/>}/>
          </Routes>
        </AnimatePresence>
       </BrowserRouter>
    </>
  )
}

export default App
