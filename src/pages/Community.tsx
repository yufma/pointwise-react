import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import styles from './Community.module.css';
import { useNavigate } from 'react-router-dom';

const categories = ['정보 공유', '질문', '자유', '공지'];

const dummyPosts = [
  { id: 1, title: '첫 번째 게시글', author: '관리자', date: '2024-05-18', comments: 2, category: '공지' },
  { id: 2, title: '두 번째 게시글', author: '홍길동', date: '2024-05-17', comments: 5, category: '정보 공유' },
  { id: 3, title: '질문 있습니다', author: '김철수', date: '2024-05-16', comments: 1, category: '질문' },
  { id: 4, title: '자유롭게 이야기해요', author: '이영희', date: '2024-05-15', comments: 0, category: '자유' },
  { id: 5, title: '공지사항입니다', author: '관리자', date: '2024-05-14', comments: 3, category: '공지' },
  { id: 6, title: '정보 공유합니다', author: '박민수', date: '2024-05-13', comments: 2, category: '정보 공유' },
];

const popularPosts = [
  { id: 1, title: '🔥 인기 게시글 1', author: '인기작성자1', date: '2024-05-18', views: 1234, likes: 56 },
  { id: 2, title: '🔥 인기 게시글 2', author: '인기작성자2', date: '2024-05-17', views: 987, likes: 45 },
  { id: 3, title: '🔥 인기 게시글 3', author: '인기작성자3', date: '2024-05-16', views: 876, likes: 34 },
];

const Community: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('정보 공유');

  const handleLogout = () => {
    // 로그아웃 처리 로직
    console.log('로그아웃');
  };

  return (
    <div className={styles.communityRoot}>
      <div className={styles.topBar}>
        <div className={styles.logo}>PointWise</div>
        <div className={styles.topRight}>
        </div>
      </div>
      <NavigationBar currentPage="community" />
      <div className={styles.content}>
        <div className={styles.communityMain}>
          {/* 좌측 카테고리 */}
          <aside className={styles.categoryPanel}>
            <div className={styles.categoryTitle}>커뮤니티</div>
            {categories.map(cat => (
              <div 
                className={
                  styles.categoryBox + (selectedCategory === cat ? ' ' + styles.active : '')
                }
                key={cat}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </div>
            ))}
          </aside>
          {/* 게시글 리스트 */}
          <section className={styles.boardSection}>
            <div className={styles.boardHeader}>
              <h2>커뮤니티</h2>
              <button className={styles.writeBtn} onClick={() => alert('글쓰기 기능 준비중!')}>➕ 글쓰기</button>
            </div>
            <table className={styles.boardTable}>
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>날짜</th>
                  <th>댓글</th>
                </tr>
              </thead>
              <tbody>
                {dummyPosts.filter(post => post.category === selectedCategory).map(post => (
                  <tr key={post.id} className={styles.boardRow}>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td>{post.date}</td>
                    <td>{post.comments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        {/* 실시간 인기 게시글 섹션 */}
        <section className={styles.popularSection}>
          <div className={styles.popularHeader}>
            <h2>🔥 실시간 인기 게시글</h2>
            <span className={styles.updateTime}>10분 전 업데이트</span>
          </div>
          <div className={styles.popularGrid}>
            {popularPosts.map(post => (
              <div key={post.id} className={styles.popularCard}>
                <h3>{post.title}</h3>
                <div className={styles.popularInfo}>
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <div className={styles.popularStats}>
                  <span>👁️ {post.views}</span>
                  <span>❤️ {post.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community; 