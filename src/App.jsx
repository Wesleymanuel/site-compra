import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Componentes/Login'

function App() {

  return (
    <BrowserRouter basename='/site-compra'>
      <Routes>
        <Route path='/header' element={<Header/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
