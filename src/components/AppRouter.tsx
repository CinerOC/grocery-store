import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// pages
import IntroductionPage from '../pages/Introduction/IntroductionPage'
import ProductsPage from '../pages/Products/ProductsPage'
import NewsPage from '../pages/News/NewsPage'
import ProfilePage from '../pages/Profile/ProfilePage'
import CartPage from '../pages/Cart/CartPage'
import LoginPage from '../pages/Login/LoginPage'

//components
import DisplayNavbar from './DisplayNavbar'
import Navbar from './UI/Navbar/Navbar'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <DisplayNavbar>
        <Navbar />
      </DisplayNavbar>
    
      <Routes>
        <Route path="/introduction" element={<IntroductionPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/" element={<Navigate to="introduction" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter