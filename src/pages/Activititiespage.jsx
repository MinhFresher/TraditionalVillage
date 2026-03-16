import "../styles/Activitiespage.css";
// Import your actual images here
import mainImg from '../assets/activities.jpg';
import cardImg1 from '../assets/activities1.jpg';
import cardImg2 from '../assets/activities1.jpg';
import cardImg3 from '../assets/activities2.jpg';
import cardImg4 from '../assets/activities2.jpg';
import cardSmall1 from '../assets/Hero-image.webp';
import cardSmall2 from '../assets/Hero-image.webp';
import cardSmall3 from '../assets/Hero-image.webp';
import logo from '../assets/react.svg';
import cardSmall4 from '../assets/Hero-image.webp';

import { useState } from "react";
import { Link } from "react-router-dom";

export default function ActivitiesPage() {
  // Array for the smaller workshop cards to keep the code DRY
  const workshops = [
    {
      title: "Nghệ thuật làm Giò Chả truyền thống",
      desc: "Trực tiếp học cách giã giò, gói lá chuối và luộc giò theo công thức gia truyền của các nghệ nhân làng Ước Lễ.",
      duration: "3 tiếng",
      price: "250.000 đ",
      mainImage: cardImg1,
      subImage: cardSmall1
    },
    {
      title: "Tour tham quan Cổng làng & Kiến trúc cổ",
      desc: "Khám phá lịch sử hàng trăm năm của chiếc cổng làng đẹp nhất Việt Nam và các ngôi nhà cổ trong vùng.",
      duration: "2 tiếng",
      price: "150.000 đ",
      mainImage: cardImg2,
      subImage: cardSmall2
    },
    {
      title: "Trải nghiệm Đan tre & Thủ công mỹ nghệ",
      desc: "Tự tay đan những vật dụng bằng tre nứa nhỏ xinh dưới sự hướng dẫn của các thợ thủ công lành nghề.",
      duration: "1.5 tiếng",
      price: "120.000 đ",
      mainImage: cardImg3,
      subImage: cardSmall3
    },
    {
      title: "Lớp học nấu ăn: Món ngon vùng Kinh Kỳ",
      desc: "Học cách chế biến các món đặc sản địa phương và thưởng thức bữa trưa ấm cúng tại nhà dân.",
      duration: "4 tiếng",
      price: "400.000 đ",
      mainImage: cardImg4,
      subImage: cardSmall4
    }
  ];

  const [selectedActivity, setSelectedActivity] = useState(null); // To store which activity is being booked
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState("");
   const handleNewsletterSignup = () => {
    setNotification("Cảm ơn bạn đã đăng ký nhận thông tin!");
    setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
  };

  return (
    <div className="activities-booking-container">
      {/* Header Section */}
      <div className="activities-header-bg">
        <header className="navbar transparent-navbar">
          <div className="nav-logo">
            <img src={logo} alt="Logo" style={{width: 50}}/>
          </div>
          <nav className="nav-links">
            <a href="/">Trang chủ</a>
            <a href="/introduce">Giới thiệu</a>
            <a href="/products">Sản phẩm</a>
            <a href="/activities" className="active">Hoạt động</a>
            <a href="/news">Tin tức</a>
            <a href="/gallery">Hình ảnh</a>
          </nav>
          <div className="nav-actions">
            <Link to="/login"><button className="btn-login-light">Đăng nhập</button></Link>
            <Link to="/register"><button className="btn-register-brown">Đăng ký</button></Link>
          </div>
        </header>

        <div className="activities-title-wrapper">
          <h1 style={{marginTop: 50}}>Hoạt động &amp; Trải nghiệm<br />Đắm mình vào cuộc sống làng quê truyền thống</h1>
        </div>
      </div>

      {/* Main Workshops Content */}
      <main className="workshops-main-content" style={{marginTop: 20}}>
        {/* Featured Workshop - Synchronized with theme */}
        <section className="featured-workshop">
          <img src={mainImg} alt="Featured" className="featured-workshop-img" />
          <div className="featured-workshop-details">
            <h2>Hành trình khám phá di sản Ước Lễ</h2>
            <p>Trải nghiệm trọn vẹn một ngày làm dân làng Ước Lễ: thăm cổng làng cổ, học làm giò chả và thưởng thức trà chiều tại nhà cổ.</p>
            <div className="featured-bottom-row">
              <img src={cardSmall1} alt="Thumbnail" className="featured-thumbnail" />
              <button 
                className="btn-participate-large"
                onClick={() => { setSelectedActivity({title: "Hành trình di sản", price: "500.000 đ", duration: "Cả ngày"}); setShowModal(true); }}
              >
                Tham gia ngay
              </button>
            </div>
          </div>
        </section>

        {/* Workshop Grid */}
       <section className="workshop-grid">
          {workshops.map((workshop, index) => (
            <div className="workshop-card" key={index}>
              <img src={workshop.mainImage} alt={workshop.title} className="workshop-card-img" />
              <div className="workshop-card-body">
                <div style={{display: 'flex', justifyContent: 'space-between', color: '#417D48', fontWeight: 'bold', marginBottom: '10px'}}>
                  <span>{workshop.duration}</span>
                  <span>{workshop.price}</span>
                </div>
                <h3>{workshop.title}</h3>
                <p>{workshop.desc}</p>
                <div className="workshop-card-footer">
                  <button className="btn-participate-small" onClick={() => { setSelectedActivity(workshop); setShowModal(true); }}>
                    Tham gia ngay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Plan Your Visit Section */}
        <section className="plan-visit-section">
          <h2>Lên kế hoạch cho chuyến đi của bạn</h2>
          
          <div className="info-cards-container">
            {/* Card 1: Booking */}
            <div className="info-card">
              <h3>Thông tin đặt chỗ</h3>
              <ul>
                <li>Khuyến khích đặt trước 24h cho các hoạt động workshop.</li>
                <li>Khách tham quan tự do không cần đặt lịch trước.</li>
                <li>Ưu đãi giảm giá 15% cho đoàn đi trên 10 người.</li>
                <li>Có hỗ trợ hướng dẫn viên riêng theo yêu cầu.</li>
              </ul>
            </div>
            
            {/* Card 2: What to Bring */}
            <div className="info-card">
              <h3>Hành trang chuẩn bị</h3>
              <ul>
                <li>Giày đi bộ hoặc giày thể thao thoải mái.</li>
                <li>Máy ảnh hoặc điện thoại đầy pin để check-in.</li>
                <li>Nón, ô (dù) và kem chống nắng.</li>
                <li>Tinh thần hào hứng khám phá văn hóa!</li>
              </ul>
            </div>

            {/* Card 3: New - Location & Hours */}
            <div className="info-card">
              <h3>Vị trí & Giờ mở cửa</h3>
              <ul>
                <li><strong>Địa chỉ:</strong> Làng Ước Lễ, Tân Ước, Thanh Oai, Hà Nội.</li>
                <li><strong>Mở cửa:</strong> 08:00 - 17:00 (Hàng ngày).</li>
                <li><strong>Gửi xe:</strong> Bãi đỗ xe miễn phí ngay cổng làng.</li>
              </ul>
            </div>
          </div>

          <div className="cta-banner-green">
            <div className="cta-banner-text">
              <h2>Sẵn sàng trải nghiệm văn hóa?</h2>
              <p>Hãy để chúng tôi giúp bạn có một chuyến đi đáng nhớ tại làng cổ Ước Lễ.</p>
            </div>
            <button className="btn-contact-white" onClick={() => window.location.href = 'tel:0123456789'}>
              Gọi ngay để tư vấn
            </button>
          </div>
        </section>
      </main>
      
      {showModal && selectedActivity && (
        <div className="modal-overlay">
          <div className="booking-modal">
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>✕</button>
            
            <h2>Đăng ký: {selectedActivity.title}</h2>
            <p>Giá: <strong>{selectedActivity.price}</strong> | Thời lượng: {selectedActivity.duration}</p>
            
            <form className="booking-form">
              <label>Ngày tham gia:</label>
              <input type="date" required />
              
              <label>Số lượng người:</label>
              <input type="number" placeholder="Ví dụ: 2" min="1" required />
              
              <label>Số điện thoại:</label>
              <input type="text" placeholder="Nhập số điện thoại của bạn" required />
              
              <button 
                type="submit" 
                className="btn-submit-booking"
                onClick={(e) => { 
                  e.preventDefault(); 
                  alert("Cảm ơn! Chúng tôi sẽ liên hệ sớm để xác nhận đơn đặt chỗ."); 
                  setShowModal(false); 
                }}
              >
                XÁC NHẬN ĐẶT CHỖ
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Footer */}
      <footer className="footer activities-footer">
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