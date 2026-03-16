

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// ScrollToTop component
import { useEffect } from 'react';
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}
import Homepage from './pages/Homepage';
import IntroducePage from './pages/IntroducePage';
import ProductPage from './pages/Producpage';
import Articlepage from './pages/Articlepage';
import ActivitiesPage from './pages/Activititiespage';
import GalleryPage from './pages/Gallerypage';
import LoginPage from './pages/Loginpage';
import RegisterPage from './pages/Registerpage';
import CheckoutPage from './pages/Checkoutpage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/introduce" element={<IntroducePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/news" element={<Articlepage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/news-detail" element={<ArticleDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
