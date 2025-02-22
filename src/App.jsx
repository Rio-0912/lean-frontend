import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Refoodie from './Pages/Refoodie'
import Carbon from './Pages/Carbon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/refoodie" element={<Refoodie />} />
        <Route path="/carbon" element={<Carbon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
