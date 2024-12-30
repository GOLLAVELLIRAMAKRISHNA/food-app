import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeorder/PlaceOrder';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';
import LoginPopUp from './components/loginpopup/LoginPopUp';
import LoadAnimation from './components/loadanimation/LoadAnimation';

function App() {

  const [showLogin, setShowLogin] = useState(false);
  const [loadEffect, setLoadEffect] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadEffect(false)
    }, 4000)
  }, [])

  return (
    <>
      {
        loadEffect ? <LoadAnimation /> :
          <div className='fade-in-effect'>
            {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
            <Navbar setShowLogin={setShowLogin} />
            <div className="app">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/place' element={<PlaceOrder />} />
              </Routes>
            </div>
            <Footer />
          </div>
      }
    </>
  )
}

export default App;
