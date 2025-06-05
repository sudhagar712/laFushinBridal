import React from 'react'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>

    </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
