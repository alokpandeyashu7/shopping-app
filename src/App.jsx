import Navbar from './components/Navbar/Navbar'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import ShopCategory from './Pages/ShopCategory'
import Cart from './Pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginSignup from './Pages/LoginSignup'
import Footer from './components/Footer/Footer'
import men_banners from './components/Assets/banner_mens.png'
import women_banners from './components/Assets/banner_women.png'
import kids_banners from './components/Assets/banner_kids.png'
import ShopContextProvider from './Context/ShopContext'  // ✅ ये important है

function App() {
  return (
    <>
      {/* ✅ ShopContextProvider को BrowserRouter के बाहर wrap करो */}
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/mens"
              element={<ShopCategory banner={men_banners} category="men" />}
            />
            <Route
              path="/womens"
              element={<ShopCategory banner={women_banners} category="women" />}
            />
            <Route
              path="/kids"
              element={<ShopCategory banner={kids_banners} category="kid" />}
            />
            {/* ✅ Product route को simple रखो */}
            <Route path="/product/:Product_ID" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </>
  )
}

export default App
