
import './App.css';
import Navbar from './components/Navbar/Navbar';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';

import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import banner_mens from './components/Assets/banner_mens.png'
import banner_women from './components/Assets/banner_women.png'
import banner_kids from './components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<ShopCategory banner={banner_mens} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={banner_women} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid"/>}/>
        <Route path="/product" element={<product/>}>
          <Route path=':productId' element={<product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
