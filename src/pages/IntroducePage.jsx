import "../styles/Introducepage.css";
import exampleImg1 from '../assets/lang-uoc-le-1.jpg';
import exampleImg2 from '../assets/activities2.jpg';
import logo from '../assets/react.svg';
import exampleImg3 from '../assets/cho-lang-uoc-le-1.webp';
import claimImage from '../assets/claim.png';
import historyImg from '../assets/history.jpg';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function IntroducePage() {
  const [notification, setNotification] = useState("");

  const handleNewsletterSignup = () => {
    setNotification("Cảm ơn bạn đã đăng ký nhận thông tin!");
    setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
  };

  return (
    <div className="introduce-container">
      {/* Navbar & Hero Section */}
      <section className="intro-hero-section">
        <header className="navbar intro-navbar">
          <div className="nav-logo">
            <img src={logo} alt="Logo" style={{width: 50}}/>
          </div>
          <nav className="nav-links">
            <a href="/">Trang chủ</a>
            <a href="/introduce" className="active">Giới thiệu</a>
            <a href="/products">Sản phẩm</a>
            <a href="/activities">Hoạt động</a>
            <a href="/news">Tin tức</a>
            <a href="/gallery">Hình ảnh</a>
          </nav>
          <div className="nav-actions">
            <Link to="/login"><button className="btn-login-light">Đăng nhập</button></Link>
            <Link to="/register"><button className="btn-register-brown">Đăng ký</button></Link>
          </div>
        </header>

        <div className="intro-hero-content">
          <div className="intro-hero-text">
            <h1>Ước Lễ,<br />Tân Ước, Thanh Oai</h1>
            <p>
              Làng Ước Lễ là một trong những điểm đến mà du khách không thể bỏ qua khi <strong>du lịch Hà Nội</strong>.
            </p>
            <Link to="https://dichvucong.gov.vn/p/home/dvc-tthc-thu-tuc-hanh-chinh-chi-tiet.html?ma_thu_tuc=120933"><div className="cert-badge">Chứng nhận</div></Link>
          </div>
          
          <div className="intro-hero-images">
            <div className="image-column">
              <img src={exampleImg1} alt="Làng Ước Lễ 1" className="img-small" />
              <img src={exampleImg2} alt="Làng Ước Lễ 2" className="img-small" />
            </div>
            <img src={exampleImg3} alt="Làng Ước Lễ 3" className="img-tall" />
          </div>
        </div>
      </section>

      {/* Village Overview Section */}
      <section className="village-overview">
        <div className="overview-text">
          <h2>Làng Ước Lễ, thuộc huyện Thanh Oai, Hà Nội, là một biểu tượng sống của kiến trúc cổ truyền và di sản ẩm thực Việt Nam.</h2>
          <p>
            Làng nổi tiếng khắp cả nước với nghề làm Giò Chả Ước Lễ gia truyền, một hương vị tinh hoa được lưu giữ qua hàng trăm năm. Bước qua Cổng làng cổ kính, bạn sẽ khám phá những ngôi nhà mái ngói rêu phong và Đình làng uy nghiêm, nơi lưu giữ tinh hoa văn hóa và nếp sống cộng đồng thanh bình. Ước Lễ không chỉ là nơi sinh sống, mà còn là một trang sử đẹp đẽ và ấm áp về tình người, nghề truyền thống.
          </p>
        </div>
        <div className="overview-video">
          <div className="video-wrapper">
            {/* Sử dụng iframe để nhúng video YouTube */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_T-lmVhPn-s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="styled-video-iframe"
            ></iframe>
            
            {/* Lưu ý: Khi dùng iframe YouTube, nút Play mặc định của YouTube sẽ xuất hiện. 
                Nếu bạn muốn giữ overlay tự chế, bạn cần dùng thêm logic JavaScript 
                nhưng cách tốt nhất là để YouTube tự xử lý. */}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section">
        <h2>Giá trị cốt lõi của chúng tôi</h2>
        <img src={claimImage} alt="Giá trị cốt lõi" className="core-values-img" />
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2>Hành trình Xuyên Thời gian</h2>
        <div className="timeline-list">
          {[1700, 1800, 1900, 2000].map((year) => (
            <div className="timeline-item" key={year}>
              <div className="timeline-year">{year}s</div>
              <div className="timeline-content">
                <h3>Thành lập</h3>
                <p>Làng được thành lập bởi những người định cư tìm kiếm đất đai màu mỡ và tài nguyên thiên nhiên. Những ngôi nhà truyền thống đầu tiên được xây dựng bằng vật liệu địa phương.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lịch sử công ty & Phần đánh giá */}
      <section className="history-section">
        <div className="history-content">
          <div className="history-text">
            <h2>Lịch sử làng nghề</h2>
            <p>
              Làng cổ Ước Lễ từ lâu đã nổi tiếng là cái nôi của nghệ thuật làm giò chả truyền thống Việt Nam. 
              Trải qua hàng thế kỷ hình thành và phát triển, những bí quyết gia truyền đã được các thế hệ nghệ nhân 
              nơi đây gìn giữ như một báu vật của dòng họ. Không chỉ đơn thuần là một món ăn, giò chả Ước Lễ còn 
              kết tinh cả cái tâm, sự tỉ mỉ và niềm tự hào dân tộc trong từng thớ thịt, miếng chả thơm ngon.
              <br /><br />
              Ngày nay, chúng tôi tiếp tục hành trình viết nên câu chuyện lịch sử đó bằng việc kết hợp giữa công thức 
              nguyên bản và quy chuẩn sản xuất hiện đại. Mỗi sản phẩm ra đời không chỉ giữ vững hương vị đặc trưng, 
              giòn dai tự nhiên mà còn cam kết tuyệt đối về an toàn thực phẩm. Chúng tôi tin rằng, việc bảo tồn những 
              giá trị cốt lõi chính là con đường tốt nhất để đưa đặc sản quê hương vươn xa hơn trong tương lai.
            </p>
          </div>
          <img src={historyImg} alt="Lịch sử làng Ước Lễ" className="history-img" />
        </div>

        <hr className="history-divider" />

        <div className="founder-quote">
          <p className="quote-text">
            “Sử dụng nền tảng này đã hoàn toàn thay đổi cách tôi tiếp cận thói quen hàng ngày của mình. Hướng dẫn rõ ràng và dễ dàng thực hiện, giúp tôi duy trì sự nhất quán dễ dàng hơn rất nhiều. Tôi cảm thấy kiểm soát tốt hơn thói quen và tiến trình của mình. Mỗi bước nhỏ đã cộng lại thành những cải thiện đáng kể. Sự hỗ trợ và thông tin chi tiết đã giữ tôi có động lực trên đường đi. Tôi thực sự cảm thấy khỏe mạnh và tự tin hơn mỗi ngày.”
          </p>
          <div className="quote-author">
            <h4>Loe Markdo</h4>
            <span>Đồng sáng lập công ty</span>
          </div>
        </div>
      </section>

      {/* Phần Sứ mệnh Cộng đồng */}
      <section className="mission-section">
        <div className="mission-header">
          <h2>Sống với sứ mệnh của chúng tôi</h2>
          <p>Cộng đồng của chúng tôi đang tạo ra những cải thiện sức khỏe lâu dài mỗi ngày.</p>
        </div>
        
        <div className="mission-grid">
          <div className="mission-card">
            <div className="quote-marks"></div>
            <p>"Nền tảng này giúp tôi dễ dàng duy trì mục tiêu của mình. Hướng dẫn rõ ràng, và những bước nhỏ hàng ngày thực sự cộng lại. Tôi cảm thấy tự tin hơn trong thói quen của mình hơn bao giờ hết."</p>
            <h4>- Mack suio Joe</h4>
          </div>
          <div className="mission-card">
            <div className="quote-marks"></div>
            <p>"Sự hỗ trợ và thông tin chi tiết đã giữ tôi tập trung và có trách nhiệm. Tiến bộ cảm thấy có thể đạt được, và cuối cùng tôi đang thấy kết quả mà tôi có thể duy trì. Tôi cảm thấy khỏe mạnh và tràn đầy năng lượng mỗi ngày."</p>
            <h4>- Antonio Loeki</h4>
          </div>
          <div className="mission-card">
            <div className="quote-marks"></div>
            <p>"Tôi yêu cách chương trình đơn giản và đầy động lực. Mỗi bài học và mẹo đều cảm thấy thực tế, và tôi có thể thấy những cải thiện thực sự trong thói quen hàng ngày của mình. Nó đã thay đổi cuộc chơi cho tôi."</p>
            <h4>- Lio mick doekil</h4>
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