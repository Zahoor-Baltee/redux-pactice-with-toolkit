import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Profile from './assets/componant/Profile'
import Login from './assets/componant/Login'
import ChangeColor from './assets/componant/ChangeColor'


function App() {

  return (
    <div className="App">
      <Profile/>
      <Login/>
      <ChangeColor/>

    </div>
  )
}

export default App
