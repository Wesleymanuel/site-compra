import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Componentes/Login'
import Cart from './Componentes/Cart'
import Card1 from './assets/Cards/Card1'
import Header1 from './Header1'

function App() {

  return (
    <BrowserRouter basename='/site-compra'>
      <Routes>
        <Route path='*' element={<Header1/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/card1' element={<Card1/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
