import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import BooksTable from './components/BooksTable'
import Home from './components/Home'
import CreateBook from './components/CreateBook'
import BookInfo from './components/BookInfo'
import MyBookInfo from './components/MyBookInfo'
import EditBook  from './components/EditBook'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mybooks" element={<BooksTable />} />
          <Route path="create" element={<CreateBook />} />
          <Route path="mybooks/:id" element={<BookInfo />} />
          <Route path="/mybooks/edit/:id" element={<EditBook />} />
          <Route path="/mybooks/books/:id" element={<MyBookInfo />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
