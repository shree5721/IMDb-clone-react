import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/header/Header'
import Home from './Pages/home/Home'
import Movielist from './Components/movieList/Movielist'
import Moviedetail from './Pages/movieDetail/Moviedetail'
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='movie/:id' element={<Moviedetail/>}></Route>
        <Route path='movies/:type' element={<Movielist/>}></Route>
        <Route path='*' element={<h2>Something went wrong</h2>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App