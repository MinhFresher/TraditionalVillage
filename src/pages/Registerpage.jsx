import "../styles/Authpage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function RegisterPage() {
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login");
    }
    

    return (
        <div className="auth-container">
        <h2>Đăng ký</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Họ và tên</label>
            <input type="text" id="name" placeholder="Nhập họ và tên" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Nhập email" required />
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" id="password" placeholder="Nhập mật khẩu" required />
            <button className="btn-register-1" type="submit">Đăng ký</button>
        </form>
        <p>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>

        </div>
  );
}
