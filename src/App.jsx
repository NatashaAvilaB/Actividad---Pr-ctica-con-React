import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './componentes/Nav'
import Home from './componentes/Home'
import Profile from './componentes/Profile'
import Count from './componentes/Count'
import Footer from './componentes/Footer'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/count' element={<Count />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
