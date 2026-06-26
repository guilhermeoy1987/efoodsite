import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
<<<<<<< HEAD
import 'react-toastify/dist/ReactToastify.css'

import Home from './Pages/Home'
import Perfil from './Pages/Perfil'
import Footer from './Footer'
import { store } from './store'
import { Provider } from 'react-redux'
import Cart from './Cart'
=======

import Home from './Pages/Home'
import Perfil from './Pages/Perfil'
import Footer from './Components/Footer'
import { store } from './store'
import { Provider } from 'react-redux'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout' // 1. ADICIONE ESTE IMPORT AQUI!
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
        <Footer />
        <Cart />
<<<<<<< HEAD
=======
        <Checkout /> {/* 2. ADICIONE O COMPONENTE AQUI! */}
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)
        <ToastContainer position="bottom-right" autoClose={3000} />
      </BrowserRouter>
    </Provider>
  )
}

export default App
