import { useNavigate, Link } from 'react-router-dom';
import "../styles/NotFound.css"; // Create this CSS file for styling
import logo from '../assets/react.svg'; // Use your project logo

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      {/* Small Navbar for the 404 page */}
      <header className="navbar" style={{backgroundColor: '#417D48', position: 'absolute', top: 0, width: '100%'}}>
        <div className="nav-logo" style={{padding: '1rem 4rem'}}>
          <img src={logo} alt="Logo" style={{width: 50}}/>
        </div>
      </header>

      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <div className="notfound-divider"></div>
        <h2>Ối! Bạn bị lạc đường rồi...</h2>
        <p>
          Có vẻ như bạn đã rẽ nhầm lối vào một ngõ cụt trong làng Ước Lễ. 
          Đừng lo, hãy để chúng tôi dẫn bạn quay lại con đường chính nhé!
        </p>

        <div className="notfound-actions">
          <button className="btn-back-outline" onClick={() => navigate(-1)}>
            ← Quay lại trang trước
          </button>
          <Link to="/">
            <button className="btn-register-brown">Về trang chủ</button>
          </Link>
        </div>
      </div>

      <div className="village-decoration">🌳 🏘️ 🌳</div>
    </div>
  );
}