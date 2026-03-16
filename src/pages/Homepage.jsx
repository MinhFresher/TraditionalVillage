import "../styles/Homepage.css"
// Import your actual images here
import heroBg from '../assets/Hero-image.webp';
import dinhLangBg from '../assets/lang-uoc-le-5_1675866390.jpeg';
import choBg from '../assets/lang-uoc-le-6_1675866417.jpg';
import chuaSoBg from '../assets/lang-uoc-le-8_1675866479.jpeg';
import aboutImage from '../assets/lang-uoc-le-1.jpg';
import avatarJordan from '../assets/example.png';
import avatarTaylor from '../assets/example.png';
import avatarAvery from '../assets/example.png';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Homepage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [notification, setNotification] = useState("");

  const carouselItems = [
    { image: dinhLangBg, title: "Ước Lễ", description: "Đình làng" },
    { image: choBg, title: "Ước Lễ", description: "Chợ truyền thống" },
    { image: chuaSoBg, title: "Ước Lễ", description: "Chùa Sổ" },
    { image: aboutImage, title: "Ước Lễ", description: "Cảnh đẹp khác" },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  const visibleItems = [
    carouselItems[activeIndex],
    carouselItems[(activeIndex + 1) % carouselItems.length],
    carouselItems[(activeIndex + 2) % carouselItems.length],
  ];

  const handleNewsletterSignup = () => {
    setNotification("Cảm ơn bạn đã đăng ký nhận thông tin!");
    setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
  };

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section 
        className="hero-section" 
        style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url(${heroBg})` }}
      >
        <header className="navbar">
          <div className="nav-logo">
            <img src={heroBg} alt="Logo" style={{width: 50}}/>
          </div>
          <nav className="nav-links">
            <a href="/" className="active">Trang chủ</a>
            <a href="/introduce">Giới thiệu</a>
            <a href="/products">Sản phẩm</a>
            <a href="/activities">Hoạt động</a>
            <a href="/news">Tin tức</a>
            <a href="/gallery">Hình ảnh</a>
          </nav>
          <div className="nav-actions">
            <Link to="/login"><button className="btn-login">Đăng nhập</button></Link>
            <Link to="/register"><button className="btn-register">Đăng ký</button></Link>
          </div>
        </header>

        <div className="hero-content">
          <h1 className="hero-title">Khám phá vẻ đẹp &amp;<br/>văn hóa làng Ước Lễ</h1>
          <Link to="/activities"><button className="btn-primary">Khám phá ngay</button></Link>
        </div>
        
        <p className="hero-subtitle">
          Embark on a journey through Norway’s stunning fjords, vibrant cities, and Northern Lights. Your gateway to unforgettable experiences!
        </p>
      </section>

      {/* Architecture / Destinations Section */}
      <section className="destinations-section">
        <div className="section-header">
          <h2>Chiêm ngưỡng kiến trúc cổ kính và độc đáo vẫn giữ nét truyền thống sau hàng trăm năm</h2>
          <p>Tìm hiểu về những địa điểm, kiến trúc nổi tiếng chỉ với một chạm</p>
        </div>

        {/* --- NEW WRAPPER GIVING STRUCTURE TO ARROWS --- */}
        <div className="destinations-carousel-wrapper">
          
          <button className="carousel-arrow left-arrow" onClick={handlePrev} aria-label="Previous">❮</button>

          <div className="cards-grid">
            {visibleItems.map((item, index) => (
              <div
                key={index}
                className="destination-card"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="card-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-arrow right-arrow" onClick={handleNext} aria-label="Next">❯</button>
          
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-content">
          <h2>Chào mừng đến với làng Ước Lễ</h2>
          <p className="about-description">
            Khi nhắc đến những ngôi làng cổ kính mang đậm dấu ấn văn hóa Bắc Bộ, người ta không thể không nhắc tới Làng Ước Lễ. Nằm ẩn mình tại vùng đất Thanh Oai, Hà Nội, Ước Lễ vượt ra ngoài khuôn khổ của một địa danh hành chính đơn thuần; nó là một không gian lưu giữ ký ức, nơi thời gian dường như ngưng đọng trên từng mái đình, cổng làng rêu phong và trong từng nếp nhà truyền thống.
          </p>
          <div className="about-feature">
            <div className="feature-icon"></div>
            <h3>Hiểu thêm về lịch sử của làng chúng tôi</h3>
          </div>
        </div>
        <div className="about-image-wrapper">
          <img src={aboutImage} alt="Làng Ước Lễ" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Lắng nghe những đánh giá, chia sẻ từ du khách về trải nghiệm tại Ước Lễ!</h2>
        
        <div className="testimonials-window">
          {/* The track must wrap every single card to move them together */}
          <div className="testimonials-track">
            
            {/* 1. Jordan */}
            <div className="testimonial-card">
              <p className="quote">"I didn’t just visit Norway—I experienced its soul..."</p>
              <div className="user-info">
                <img src={avatarJordan} alt="Jordan Blake" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover' }} />
                <div><h4>Jordan Blake</h4><span>Co-Founder, SnapWave</span></div>
              </div>
            </div>

            {/* 2. Taylor */}
            <div className="testimonial-card">
              <p className="quote">"With this platform, I discovered hidden gems..."</p>
              <div className="user-info">
                <img src={avatarTaylor} alt="Taylor Morgan" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover' }} />
                <div><h4>Taylor Morgan</h4><span>Co-Founder, ClipNest</span></div>
              </div>
            </div>

            {/* 3. Avery */}
            <div className="testimonial-card">
              <p className="quote">"Exploring the vibrant culture of Norway..."</p>
              <div className="user-info">
                <img src={avatarAvery} alt="Avery Chen" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover' }} />
                <div><h4>Avery Chen</h4><span>Co-Founder, TrendSphere</span></div>
              </div>
            </div>

            {/* --- DUPLICATES (Must be exactly the same for seamless loop) --- */}
            
            <div className="testimonial-card">
              <p className="quote">"I didn’t just visit Norway—I experienced its soul..."</p>
              <div className="user-info">
                <img src={avatarJordan} alt="Jordan Blake" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover' }} />
                <div><h4>Jordan Blake</h4><span>Co-Founder, SnapWave</span></div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="quote">"With this platform, I discovered hidden gems..."</p>
              <div className="user-info">
                <img src={avatarTaylor} alt="Taylor Morgan" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover' }} />
                <div><h4>Taylor Morgan</h4><span>Co-Founder, ClipNest</span></div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="quote">"Exploring the vibrant culture of Norway..."</p>
              <div className="user-info">
                <img src={avatarAvery} alt="Avery Chen" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover' }} />
                <div><h4>Avery Chen</h4><span>Co-Founder, TrendSphere</span></div>
              </div>
            </div>

          </div> {/* End of Track */}
        </div> {/* End of Window */}
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-box">
          <div className="cta-text">
            <h2>Sẵn sàng khám phá Ước Lễ?</h2>
            <p>Bắt đầu hành trình khám phá Làng Ước Lễ ngay hôm nay: Lên kế hoạch dễ dàng, đặt dịch vụ thuận tiện và tận hưởng những trải nghiệm đáng nhớ tại làng cổ.</p>
          </div>
          <div className="cta-actions">
            <Link to="/introduce"><button className="btn-secondary">Tìm hiểu thêm</button></Link>
            <Link to="/activities"><button className="btn-primary-dark">Khám phá ngay</button></Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <p>Chúng tôi mang đến trải nghiệm tham quan Ước Lễ thuận tiện nhất, với kế hoạch chu đáo và người dẫn đường thấu hiểu văn hóa địa phương.</p>
            <nav className="footer-nav">
              <a href="/">Trang chủ</a>
              <a href="/introduce">Giới thiệu</a>
              <a href="/products">Sản phẩm</a>
              <a href="/news">Tin tức</a>
              <a href="/activities">Hoạt động</a>
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
            <a href="/404">Terms</a>
            <a href="/404">Privacy</a>
            <a href="/404">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}