import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home, Jobsform, Scholarshipsform, Login, Signup} from '../exports'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/jobsform' element={<Jobsform />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/scholarshipsform' element={<Scholarshipsform />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
