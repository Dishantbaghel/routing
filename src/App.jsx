import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Messages from './pages/Messages'
import DisplayMsg from './pages/DisplayMsg'

const App = () => {
  return (
    <div>
    <nav>
      <Navbar/>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/messages' element={<Messages/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Message/:msgId' element={<DisplayMsg/>} />
    </Routes>
    </div>
  )
}

export default App