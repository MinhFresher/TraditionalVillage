import "../styles/Articlepage.css";
import logo from '../assets/react.svg';
import mainImg from '../assets/lang-uoc-le-1.jpg';
import activity1 from "../assets/activities1.jpg"
import activity2 from "../assets/activities2.jpg"
import activity3 from "../assets/lang-uoc-le-5.jpg"
import uocle1 from '../assets/lang-uoc-le-5_1675866390.jpeg';
import uocle2 from '../assets/lang-uoc-le-8_1675866479.jpeg';
import uocle3 from '../assets/lang-uoc-le-6_1675866417.jpg';
import uocle4 from '../assets/history.jpg';

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ArticlePage() {
  // Dummy data for the news/blog layout
  const featuredArticles = [
    { title: "Trải nghiệm làm Giò Chả truyền thống cùng nghệ nhân", size: "large", img: activity1 },
    { title: "Khám phá kiến trúc cổng làng cổ kính rêu phong", size: "small", img: activity2 },
    { title: "Tham gia phiên chợ quê sáng sớm tại Đình làng", size: "small", img: activity3 }
  ];

  const recentArticles = [
    { title: "Hành trình tìm về cội nguồn: Gặp gỡ những bậc cao niên trong làng", date: "Monday | December 19, 2025", img: uocle4, category: "VĂN HÓA" },
    { title: "Thưởng thức ẩm thực đồng quê bên rặng tre xanh", date: "Tuesday | December 20, 2025", img: uocle1, category: "ẨM THỰC" },
    { title: "Lớp học làm lồng đèn truyền thống cho trẻ em", date: "Wednesday | December 21, 2025", img: uocle2, category: "TRẢI NGHIỆM" },
    { title: "Đạp xe dạo quanh những cánh đồng lúa chín", date: "Thursday | December 22, 2025", img: uocle3, category: "TRẢI NGHIỆM" }
  ];

  const popularArticles = [
    { title: "Top 5 địa điểm check-in không thể bỏ lỡ khi ghé thăm", date: "Monday | December 19, 2025", img: uocle4 },
    { title: "Lịch trình du lịch trong ngày hoàn hảo cho gia đình", date: "Sunday | December 18, 2025", img: uocle1 },
    { title: "Bí quyết chọn mua đặc sản mang về làm quà", date: "Friday | December 16, 2025", img: uocle2 },
    { title: "Lễ hội truyền thống: Lịch tổ chức và những điều cần biết", date: "Wednesday | December 14, 2025", img: uocle3 }
  ];

  const [activeTab, setActiveTab] = useState("TẤT CẢ");
  const navigate = useNavigate();

  const [notification, setNotification] = useState("");
   const handleNewsletterSignup = () => {
    setNotification("Cảm ơn bạn đã đăng ký nhận thông tin!");
    setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
  };

  const handleArticleClick = (article) => {
    navigate("/news-detail", { state: { article } });
  };

  const tabs = ["TẤT CẢ", "TRẢI NGHIỆM", "ẨM THỰC", "VĂN HÓA", "LỄ HỘI"];

  const filteredArticles = activeTab === "TẤT CẢ" 
    ? recentArticles 
    : recentArticles.filter(article => article.category === activeTab);
  return (
    <div className="activities-container">
      {/* Navbar */}
      <header className="navbar light-navbar" style={{backgroundColor: '#417D48'}}>
        <div className="nav-logo">
          <img src={logo} alt="Logo" style={{width: 50}}/>
        </div>
        <nav className="nav-links">
          <a href="/">Trang chủ</a>
          <a href="/introduce">Giới thiệu</a>
          <a href="/products">Sản phẩm</a>
          <a href="/activities">Hoạt động</a>
          <a href="/news" className="active">Tin tức</a>
          <a href="/gallery">Hình ảnh</a>
        </nav>
        <div className="nav-actions">
          <Link to="/login"><button className="btn-login-light">Đăng nhập</button></Link>
          <Link to="/register"><button className="btn-register-brown">Đăng ký</button></Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="activities-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${mainImg})`, marginTop: 100 }}>
        <h1>Hoạt động &amp; Trải nghiệm<br/>Đắm mình vào cuộc sống làng quê truyền thống</h1>
      </section>

      {/* Main Blog Content */}
      <section className="blog-section">
        
        {/* Top Featured Grid */}
        <div className="featured-grid">
          <div className="feature-main" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${featuredArticles[0].img})` }} onClick={() => handleArticleClick(featuredArticles[0])}>
            <h2>{featuredArticles[0].title}</h2>
          </div>
          <div className="feature-sidebar">
            <div className="feature-sub" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${featuredArticles[1].img})` }} onClick={() => handleArticleClick(featuredArticles[1])}>
              <h3>{featuredArticles[1].title}</h3>
            </div>
            <div className="feature-sub" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${featuredArticles[2].img})` }} onClick={() => handleArticleClick(featuredArticles[2])}>
              <h3>{featuredArticles[2].title}</h3>
            </div>
          </div>
        </div>

        {/* Layout split: Main Content (Left) & Sidebar (Right) */}
        <div className="content-layout">
          
          {/* Left Column: Recent Articles */}
          <div className="main-column">
            <div className="tabs-container">
              {tabs.map((tab) => (
                <span 
                  key={tab}
                  className={`tab ${activeTab === tab ? "active" : ""}`} 
                  onClick={() => setActiveTab(tab)}
                  style={{ cursor: 'pointer' }}
                >
                  {tab}
                </span>
              ))}
            </div>

            <div className="recent-grid">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article, index) => (
                  <div className="recent-card" key={index} onClick={() => handleArticleClick(article)}>
                    <img src={article.img} alt="Article Thumbnail" />
                    <div className="recent-info">
                      <h3>{article.title}</h3>
                      <span className="date">{article.date}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">Hiện chưa có bài viết cho mục này.</div>
              )}
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-header">
              <div className="sidebar-indicator"></div>
              <h3>POPULAR</h3>
            </div>
            
            <div className="popular-list">
              {popularArticles.map((article, index) => (
                <div className="popular-item" key={index} onClick={() => handleArticleClick(article)}>
                  <img src={article.img} alt="Popular Thumbnail" />
                  <div className="popular-info">
                    <h4>{article.title}</h4>
                    <span className="date">{article.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Placeholder for an ad or wider featured image at the bottom of the sidebar */}
            <div className="sidebar-banner">
              <img src={mainImg} alt="Advertisement or Feature" />
            </div>
          </aside>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer activities-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <p>Chúng tôi mang đến trải nghiệm tham quan thuận tiện nhất, với kế hoạch chu đáo và người dẫn đường thấu hiểu văn hóa địa phương.</p>
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