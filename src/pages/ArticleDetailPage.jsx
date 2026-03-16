import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/Articlepage.css"; // Reuse your existing styles for footer/navbar
import { useEffect } from 'react';
export default function ArticlesDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [article]);

    if (!article) {
        return <div style={{ padding: '150px', textAlign: 'center' }}>Bài viết không tồn tại.</div>;
    }
  

  return (
    <div className="news-detail-wrapper">
      {/* Re-use your Navbar here or a simple Back Button */}
      <div style={{ padding: '20px', maxWidth: '1000px', margin: '80px auto 0' }}>
        <button onClick={() => navigate(-1)} className="btn-back">← Quay lại tin tức</button>
      </div>

      <article className="news-article-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px 100px' }}>
        <span className="detail-category" style={{ color: '#417D48', fontWeight: 'bold', textTransform: 'uppercase' }}>
          {article.category || "TIN TỨC"}
        </span>
        <h1 style={{ fontSize: '2.5rem', margin: '1rem 0', lineHeight: '1.2' }}>{article.title}</h1>
        <p className="detail-date" style={{ color: '#666', marginBottom: '2rem' }}>{article.date || "March 16, 2026"}</p>

        <img 
          src={article.img} 
          alt={article.title} 
          style={{ width: '100%', borderRadius: '15px', marginBottom: '2rem', maxHeight: '500px', objectFit: 'cover' }} 
        />

        <div className="article-body-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
          <p>Làng Ước Lễ từ lâu đã nổi tiếng với nét đẹp cổ kính và nghề làm giò chả truyền thống. Trong bài viết này, chúng ta sẽ cùng đi sâu vào những giá trị di sản mà người dân nơi đây đang nỗ lực bảo tồn...</p>
          
          <h2 style={{ marginTop: '2rem' }}>Nét đẹp truyền thống</h2>
          <p>Mỗi góc phố, mỗi cổng làng đều mang trong mình một câu chuyện lịch sử. Khách du lịch khi ghé thăm không chỉ được thưởng thức ẩm thực mà còn được đắm mình vào không gian văn hóa đặc sắc của vùng đồng quê Bắc Bộ.</p>
          
          <blockquote style={{ borderLeft: '4px solid #FFCE31', paddingLeft: '20px', margin: '30px 0', fontStyle: 'italic', color: '#555' }}>
            "Ước Lễ không chỉ là một cái tên, đó là tâm hồn của nghệ thuật ẩm thực Việt Nam."
          </blockquote>
          
          <p>Hy vọng qua bài viết này, bạn sẽ có cái nhìn rõ nét hơn và sớm có kế hoạch ghé thăm ngôi làng xinh đẹp này trong tương lai gần.</p>
        </div>
      </article>
    </div>
  );
}