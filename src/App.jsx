import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Componentes/Login'
import Cart from './Componentes/Cart'

function App() {

  return (
    <BrowserRouter basename='/site-compra'>
      <Routes>
        <Route path='/header' element={<Header/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
