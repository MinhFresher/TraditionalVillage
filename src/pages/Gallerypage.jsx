import "../styles/Gallerypage.css";

// Import your actual images here
import galleryMain from '../assets/Hero-image.webp';
import galleryImg1 from '../assets/lang-uoc-le-1.jpg';
import galleryImg2 from '../assets/lang-uoc-le-3.jpg';
import galleryImg3 from '../assets/lang-uoc-le-5.jpg';
import galleryImg4 from '../assets/history.jpg';
import galleryImg5 from '../assets/lang-uoc-le-5_1675866390.jpeg';
import galleryImg6 from '../assets/lang-uoc-le-6_1675866417.jpg';
import galleryImg7 from '../assets/lang-uoc-le-8_1675866479.jpeg';
import galleryImg8 from '../assets/activities2.jpg';
import logo from '../assets/react.svg';

import { Link } from "react-router-dom";
import { useState } from "react";

export default function GalleryPage() {
  // Array to map through the gallery images cleanly
  const galleryImages = [
    galleryImg1, galleryImg2, galleryImg3, galleryImg4, 
    galleryImg5, galleryImg6, galleryImg7, galleryImg8
  ];

  const [selectedImg, setSelectedImg] = useState(null);
  const [notification, setNotification] = useState("");

  const handleNewsletterSignup = () => {
    setNotification("Cảm ơn bạn đã đăng ký nhận thông tin!");
    setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setIsModalOpen(false);
    setShowToast(true);
    
    // Auto-hide toast after 4s
    setTimeout(() => setShowToast(false), 4000);
  };
  return (
    <div className="gallery-page-container">
      {/* Header & Navbar */}
      <div className="gallery-header-bg" >
        <header className="navbar transparent-navbar" style={{backgroundColor: '#417D48'}}>
          <div className="nav-logo">
            <img src={logo} alt="Logo" style={{width: 50}}/>
          </div>
          <nav className="nav-links">
            <Link to="/">Trang chủ</Link>
            <Link to="/introduce">Giới thiệu</Link>
            <Link to="/products">Sản phẩm</Link>
            <Link to="/activities">Hoạt động</Link>
            <Link to="/news">Tin tức</Link>
            <Link to="/gallery" className="active">Hình ảnh</Link>
          </nav>
          <div className="nav-actions">
            <Link to="/login"><button className="btn-login-light">Đăng nhập</button></Link>
            <Link to="/register"><button className="btn-register-brown">Đăng ký</button></Link>
          </div>
        </header>
      </div>

      <div className="gallery-title-wrapper">
        <h1>Phương tiện</h1>
        <p>Khám phá bộ sưu tập hình ảnh và video của chúng tôi</p>
      </div>

      <main className="gallery-main-content">
        {/* Main Highlight Image */}
        <section className="gallery-highlight" style={{marginTop: 10}}>
          <img src={galleryMain} alt="Featured Village View" className="highlight-img" />
        </section>

        {/* CSS Grid Image Gallery */}
        <section className="image-grid">
          {galleryImages.map((imgSrc, index) => (
            <div 
              className="grid-item" 
              key={index} 
              onClick={() => setSelectedImg(imgSrc)} // Set the image to preview
            >
              <img src={imgSrc} alt={`Gallery item ${index + 1}`} />
              <div className="hover-overlay">
                <span>Xem ảnh</span>
              </div>
            </div>
          ))}
        </section>

        {selectedImg && (
          <div className="lightbox-overlay" onClick={() => setSelectedImg(null)}>
            <button className="lightbox-close">✕</button>
            <img src={selectedImg} alt="Preview" className="lightbox-img" />
          </div>
        )}

        {/* Featured Video Section */}
        <section className="featured-video-section">
          <h2>Video Toàn Cảnh Làng Ước Lễ</h2>
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_T-lmVhPn-s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Media CTA Section */}
        <section className="media-cta-section">
          <div className="cta-content">
            <h2>Bạn cần hình ảnh và video có độ phân giải cao?</h2>
            <p>Liên hệ với chúng tôi để nhận bộ tài liệu báo chí và hình ảnh chuyên nghiệp</p>
          </div>
          <button className="btn-request-media" onClick={() => setIsModalOpen(true)}>
            Gửi yêu cầu
          </button>
        </section>
        {showToast && (
          <div className="toast-notification">
            <div className="toast-icon">✔</div>
            <div className="toast-text">
              <h4>Yêu cầu đã gửi!</h4>
              <p>Chúng tôi sẽ phản hồi qua email trong vòng 24h.</p>
            </div>
          </div>
        )}

        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>✕</button>
              <h2 style={{ color: '#417D48', marginBottom: '10px' }}>Yêu cầu tư liệu Media</h2>
              <p>Vui lòng để lại thông tin, chúng tôi sẽ gửi link tải bản HD cho bạn.</p>
              
              <form className="booking-form" onSubmit={handleRequestSubmit}>
                <label>Tên đơn vị / Cá nhân:</label>
                <input type="text" placeholder="Ví dụ: VTV, Báo Mới,..." required />
                
                <label>Email nhận tài liệu:</label>
                <input type="email" placeholder="email@vi-du.com" required />
                
                <label>Mục đích sử dụng:</label>
                <textarea 
                  placeholder="Ví dụ: Viết bài giới thiệu du lịch, làm phóng sự..." 
                  style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd', minHeight: '80px' }}
                  required
                ></textarea>
                
                <button type="submit" className="btn-submit-booking">GỬI YÊU CẦU</button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer gallery-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <p>Chúng tôi mang đến trải nghiệm tham quan Ước Lễ thuận tiện nhất, với kế hoạch chu đáo và người dẫn đường thấu hiểu văn hóa địa phương.</p>
            <nav className="footer-nav">
              <Link to="/">Trang chủ</Link>
              <Link to="/introduce">Giới thiệu</Link>
              <Link to="/products">Sản phẩm</Link>
              <Link to="/news">Tin tức</Link>
              <Link to="/activities">Hoạt động</Link>
            </nav>
          </div>
          <div className="footer-newsletter">
            <h4>Cập nhật thông tin mới nhất</h4>
            <div className="newsletter-input">
              <input type="email" placeholder="Nhập email của bạn" />
              <button onClick={handleNewsletterSignup}>Đăng ký</button>
            </div>
            {notification && <p className="notification-message">{notification}</p>}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Minh All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/404">Terms</Link>
            <Link to="/404">Privacy</Link>
            <Link to="/404">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}