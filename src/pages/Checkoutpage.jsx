import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // Get the product passed from the previous page

  const [ordered, setOrdered] = useState(false);

  if (!product) {
    return <div style={{padding: '100px', textAlign: 'center'}}>Không có sản phẩm nào để thanh toán. <button onClick={() => navigate('/products')}>Quay lại</button></div>;
  }

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    setOrdered(true);
    
    // Simulate a network delay
    setTimeout(() => {
      alert("Đặt hàng thành công! Đang quay lại trang sản phẩm...");
      navigate("/products"); // Roll back to products
    }, 2000);
  };

  return (
    <div className="checkout-container" style={{ padding: '120px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Thanh toán đơn hàng</h2>
      
      <div className="order-summary" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <img src={product.img} alt={product.name} style={{ width: '80px', borderRadius: '8px' }} />
          <div>
            <h3 style={{ margin: 0 }}>{product.name}</h3>
            <p style={{ color: '#417D48', fontWeight: 'bold' }}>{product.price}</p>
          </div>
        </div>
      </div>

      {!ordered ? (
        <form onSubmit={handleCompleteOrder} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Họ và tên" required style={{ padding: '10px' }} />
          <input type="text" placeholder="Số điện thoại" required style={{ padding: '10px' }} />
          <input type="text" placeholder="Địa chỉ giao hàng" required style={{ padding: '10px' }} />
          <button type="submit" className="btn-buy" style={{ width: '100%', padding: '15px', backgroundColor: '#417D48', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            XÁC NHẬN ĐẶT HÀNG
          </button>
        </form>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h3>Đang xử lý đơn hàng...</h3>
          <div className="spinner"></div> {/* Add CSS for a spinner if you like */}
        </div>
      )}
    </div>
  );
}