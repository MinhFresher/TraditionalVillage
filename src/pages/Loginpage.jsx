import "../styles/Authpage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Dummy credentials
  const validEmail = "a@gmail.com";
  const validPassword = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      setError("");
      navigate("/");
    } else {
      setError("Email hoặc mật khẩu không đúng.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Đăng nhập</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Nhập email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Mật khẩu</label>
        <input
          type="password"
          id="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="btn-login-1" type="submit">Đăng nhập</button>
        {error && <div className="error-message" style={{color: 'red', marginTop: 8}}>{error}</div>}
      </form>
      <p>Bạn chưa có tài khoản? <a href="/register">Đăng ký</a></p>
    </div>
  );
}
