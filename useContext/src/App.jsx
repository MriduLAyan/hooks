import React from 'react'
import './App.css'
import Footer from './component/Footer'
import Profile from './component/Profile'

function App() {

  // useContext is a React Hook that allows you access from any component without explicitly passing it down through props al every level.
  // useContext is used to manage Global data in the React App.

  return (
    <>
     <Profile/>
     <Footer/>
    </>
  )
}

export default App
