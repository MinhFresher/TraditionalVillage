import "../styles/Productspage.css";
import exampleImg from '../assets/example.png'; 
import mainImg from '../assets/Hero-image.webp';
import giolua from '../assets/gio.webp';
import giobo from '../assets/giobo.jpg';
import gioxao from '../assets/gioxao.jpg';
import chaque from '../assets/chque.png';
import chamo from '../assets/chamo.jpg';
import chacom from '../assets/chacom.jpg';
import uocle1 from '../assets/activities2.jpg';
import uocle2 from '../assets/lang-uoc-le-5.jpg';
import uocle3 from '../assets/lang-uoc-le-3.jpg';
import logo from '../assets/react.svg';

import { Link, useNavigate} from "react-router-dom";

import { useState, useEffect } from 'react';

export default function ProductPage() {
  // 1. Data Arrays
  const [products] = useState([
    { name: "Giò Lụa", price: "50.000 đ", oldPrice: "80.000 đ", reviews: 235, desc: "Giò Lụa: Món ăn truyền thống, thơm ngon.", img: giolua },
    { name: "Giò Bò", price: "80.000 đ", oldPrice: "120.000 đ", reviews: 729, desc: "Giò Bò: Đậm đà hương vị bò, giàu dinh dưỡng.", img: giobo },
    { name: "Giò Xào", price: "120.000 đ", oldPrice: "200.000 đ", reviews: 825, desc: "Giò Xào: Hương vị đặc trưng, giòn sần sật.", img: gioxao },
    { name: "Chả Quế", price: "50.000 đ", oldPrice: "80.000 đ", reviews: 248, desc: "Chả Quế: Thơm mùi quế, mềm và hấp dẫn.", img: chaque },
    { name: "Chả Mỡ", price: "50.000 đ", oldPrice: "80.000 đ", reviews: 1256, desc: "Chả Mỡ: Béo ngậy, giòn rụm, cực kỳ bắt cơm.", img: chamo },
    { name: "Chả Cốm", price: "120.000 đ", oldPrice: "200.000 đ", reviews: 895, desc: "Chả Cốm: Hương vị cốm xanh Hà Nội đặc trưng.", img: chacom },
    { name: "Chả Quế", price: "50.000 đ", oldPrice: "80.000 đ", reviews: 248, desc: "Chả Quế: Thơm mùi quế, mềm và hấp dẫn.", img: chaque },
    { name: "Chả Mỡ", price: "50.000 đ", oldPrice: "80.000 đ", reviews: 1256, desc: "Chả Mỡ: Béo ngậy, giòn rụm, cực kỳ bắt cơm.", img: chamo },
    { name: "Chả Cốm", price: "120.000 đ", oldPrice: "200.000 đ", reviews: 895, desc: "Chả Cốm: Hương vị cốm xanh Hà Nội đặc trưng.", img: chacom },
  ]);

  const testimonials = [
    { name: "Sarah Johnson", text: "Tôi hoàn toàn yêu thích Túi vải Cotton hữu cơ của mình!" },
    { name: "Mark Anderson", text: "Bàn chải đánh răng tre thực sự thay đổi cuộc chơi!" },
    { name: "Emily Lee", text: "Tôi vừa mua Ba lô làm từ sợi gai dầu, nó thật tuyệt vời." },
    { name: "Nguyen An", text: "Sản phẩm giò chả rất ngon và đúng vị truyền thống." },
    { name: "Minh Thu", text: "Giao hàng nhanh, đóng gói cẩn thận, sẽ ủng hộ tiếp." },
    { name: "Hoàng Nam", text: "Chả cốm ở đây là ngon nhất mình từng ăn." }
  ];

  const articles = [
    { title: "Hướng tới sự bền vững", subtitle: "Sức mạnh của các sản phẩm thân thiện với môi trường", img: uocle1 },
    { title: "Sống bền vững đơn giản", subtitle: "Greenify giúp bạn tạo sự khác biệt như thế nào", img: uocle2 },
    { title: "Hướng dẫn mua sắm thân thiện với môi trường", subtitle: "Giảm dấu chân carbon của bạn", img: uocle3 }
  ];

  // 2. States
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); // DEFAULT 6 PRODUCTS
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    // Navigate to checkout and pass the product data in the "state"
    navigate("/checkout", { state: { product } });
  };

  const handleArticleDetail = (article) => {
    // Navigate to article detail and pass the data
    navigate("/news-detail", { state: { article } });
  };

  const [notification, setNotification] = useState("");

  const handleNewsletterSignup = () => {
    setNotification("Cảm ơn bạn đã đăng ký nhận thông tin!");
    setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
  };

  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevents page reload
    if (email) {
      setShowToast(true);
      setEmail(""); // Clear the input
      
      // Auto-hide the notification after 4 seconds
      setTimeout(() => setShowToast(false), 4000);
    }
  };

  // 3. Logic for Filtering
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // 4. Handlers
  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3); // Load 3 more each time
  };
  const handleShowLess = () => {
    setVisibleCount(6); // Reset back to default
    // Optional: Scroll back to the top of the products so the user isn't lost
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  // Auto-play Slider Logic (3 items at a time)
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => 
        // Logic: Stop sliding when the last 3 cards are in view
        prev >= testimonials.length - 3 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="product-page-container">
      {/* Navbar */}
      <header className="navbar light-navbar" style={{backgroundColor: '#417D48'}}>
        <div className="nav-logo">
            <img src={logo} alt="Logo" style={{width: 50}}/>
        </div>
        <nav className="nav-links">
          <Link to="/">Trang chủ</Link>
          <Link to="/introduce" >Giới thiệu</Link>
          <Link to="/products" className="active">Sản phẩm</Link>
          <Link to="/activities">Hoạt động</Link>
          <Link to="/news">Tin tức</Link>
          <Link to="/gallery">Hình ảnh</Link>
        </nav>
        <div className="nav-actions">
          <Link to="/login"><button className="btn-login-light">Đăng nhập</button></Link>
          <Link to="/register"><button className="btn-register-brown">Đăng ký</button></Link>
        </div>
      </header>

      {/* Search Bar */}
      <section className="search-section" style={{marginTop: 100}}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={search}
            onChange={e => {
                setSearch(e.target.value);
                setVisibleCount(6); // Reset visibility when searching
            }}
          />
          <button className="search-btn" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section" id="products">
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, visibleCount).map((product, index) => (
              <div className="product-wrapper" key={index}>
                <div className="product-card">
                  <div className="product-card-inner">
                    <div className="product-card-front">
                      <img src={product.img} alt={product.name} />
                    </div>
                    <div className="product-card-back">
                      <p>{product.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-pricing">
                    <span className="current-price">{product.price}</span>
                    <span className="old-price">{product.oldPrice}</span>
                  </div>
                  <span className="reviews">{product.reviews} Reviews</span>
                  <button className="btn-buy" onClick={() => handleBuyNow(product)}>
                    MUA NGAY
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#888', padding: '2rem' }}>
              Không tìm thấy sản phẩm phù hợp.
            </div>
          )}
        </div>
        
        {/* VIEW MORE / SHOW LESS BUTTONS */}
        <div className="see-more-container" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '2rem' }}>
          
          {/* Show "View More" if we haven't reached the end of the list */}
          {visibleCount < filteredProducts.length && (
            <button className="btn-see-more" onClick={handleShowMore}>
              XEM THÊM SẢN PHẨM
            </button>
          )}

          {/* Show "Show Less" only if the user has expanded the list beyond 6 */}
          {visibleCount > 6 && (
            <button 
              className="btn-see-more" 
              onClick={handleShowLess}
              style={{ backgroundColor: '#6c757d' }} // Give it a different color so it looks like a secondary action
            >
              THU GỌN
            </button>
          )}

          

        </div>
      </section>

      {/* About Us Banner */}
      <section className="about-banner" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${exampleImg})` }}>
        <div className="about-banner-content">
          <h2>About us</h2>
          <p className="about-intro">
            We are more than just an e-commerce website; we are a passionate community dedicated to fostering a sustainable and eco-friendly lifestyle.
          </p>

          {/* This part only shows if isAboutExpanded is true */}
          {isAboutExpanded && (
            <div className="mission-vision-grid" style={{ animation: 'fadeIn 0.5s ease' }}>
              <div className="mv-card">
                <h3>Mission</h3>
                <p>"To be the leading platform for sustainable living..."</p>
              </div>
              <div className="mv-card">
                <h3>Vision</h3>
                <p>"To create a greener future for generations to come..."</p>
              </div>
            </div>
          )}

          {/* Toggle button */}
          <button 
            className="btn-buy" 
            onClick={() => setIsAboutExpanded(!isAboutExpanded)}
            style={{ marginTop: '20px' }}
          >
            {isAboutExpanded ? "THU GỌN" : "ĐỌC THÊM"}
          </button>
        </div>
      </section>

      {/* Testimonials Slider (Fixed for 3-card view) */}
      <section className="testimonials-section-light">
        <h2>ĐÁNH GIÁ CỦA KHÁCH HÀNG</h2>
        <div className="testimonials-window">
          <div
            className="testimonials-track"
            style={{ 
                transform: `translateX(-${testimonialIndex * 33.333}%)`, 
                transition: 'transform 0.5s ease-in-out',
                display: 'flex' 
            }}
          >
            {testimonials.map((test, index) => (
              <div className="testimonial-card-outline" key={index} style={{ flex: '0 0 33.333%' }}>
                <div className="stars">★★★★★</div>
                <img src={exampleImg} alt={test.name} className="reviewer-img" />
                <h3>{test.name}</h3>
                <p>"{test.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="articles-section">
        <h2>Bài viết</h2>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div className="article-card" key={index}>
              <img src={article.img} alt={article.title} />
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.subtitle}</p>
                {/* Updated button with onClick */}
                <button 
                  className="btn-buy" 
                  onClick={() => handleArticleDetail(article)}
                >
                  ĐỌC THÊM
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section" style={{ backgroundImage: `linear-gradient(rgba(51,51,51,0.8), rgba(51,51,51,0.8)), url(${mainImg})` }}>
        <div className="newsletter-box">
          <div className="newsletter-text">
            <h2>Đăng ký để nhận quảng cáo</h2>
            <p>Tham gia để nhận những ưu đãi hấp dẫn!</p>
          </div>
          
          {/* Wrap in a form to handle 'Enter' key and 'submit' event */}
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input type="text" placeholder="Nhập tên" required />
            <input 
              type="email" 
              placeholder="Nhập email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="btn-buy">Đăng ký</button>
          </form>
        </div>
      </section>
      {showToast && (
        <div className="toast-notification">
          <div className="toast-icon">✔</div>
          <div className="toast-text">
            <h4>Đăng ký thành công!</h4>
            <p>Cảm ơn bạn đã quan tâm đến Ước Lễ.</p>
          </div>
          <button className="toast-close" onClick={() => setShowToast(false)}>✕</button>
        </div>
      )}

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <p>Chúng tôi mang đến trải nghiệm tham quan Ước Lễ thuận tiện nhất, với kế hoạch chu đáo và người dẫn đường thấu hiểu văn hóa địa phương.</p>
            <nav className="footer-nav">
               <Link to="/">Trang chủ</Link>
              <Link to="/introduce" >Giới thiệu</Link>
              <Link to="/products" >Sản phẩm</Link>
              <Link to="/activities">Hoạt động</Link>
              <Link to="/news">Tin tức</Link>
          <Link to="/gallery">Hình ảnh</Link>
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