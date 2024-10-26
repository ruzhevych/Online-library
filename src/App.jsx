import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import BooksTable from './components/BooksTable'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mybooks" element={<BooksTable />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
