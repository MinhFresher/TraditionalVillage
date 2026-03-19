import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/logo.png'; // Your logo/hero image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevents the background from scrolling when the menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className="navbar">

      {/* Hamburger Button - Stays top right on mobile */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Dark Overlay when drawer is open */}
      <div 
        className={`nav-drawer-overlay ${isMenuOpen ? 'open' : ''}`} 
        onClick={closeMenu}
      ></div>

      <div className="nav-logo">
        <img src={heroBg} alt="Logo" style={{ width: 50 }} />
      </div>

      {/* Main Navigation / Drawer */}
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Trang chủ</Link>
        <Link to="/introduce" onClick={closeMenu}>Giới thiệu</Link>
        <Link to="/products" onClick={closeMenu}>Sản phẩm</Link>
        <Link to="/activities" onClick={closeMenu}>Hoạt động</Link>
        <Link to="/news" onClick={closeMenu}>Tin tức</Link>
        <Link to="/gallery" onClick={closeMenu}>Hình ảnh</Link>

        {/* Action Buttons inside Drawer for Mobile */}
        <div className="drawer-actions mobile-only">
          <Link to="/login" onClick={closeMenu}><button className="btn-login">Đăng nhập</button></Link>
          <Link to="/register" onClick={closeMenu}><button className="btn-register">Đăng ký</button></Link>
        </div>
      </nav>

      {/* Action Buttons for Desktop */}
      <div className="nav-actions desktop-only">
        <Link to="/login"><button className="btn-login">Đăng nhập</button></Link>
        <Link to="/register"><button className="btn-register">Đăng ký</button></Link>
      </div>
    </header>
  );
};

export default Navbar;