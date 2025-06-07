import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './routes/home/Home'
import Unknown from './routes/unknown/Unknown'





function App() {
  
  return (
    <>
      
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="*" element={<Unknown />} /> */}
      </Routes>
      {/* <Home></Home> */}
     
    </>
  )
}

export default App
