import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import styles from './MyPage.module.css';

const categories = ['통계자료 업로드', '저장된 장소', '분석결과', '저장한 게시물'];

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('통계자료 업로드');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로컬 개발 환경을 위한 간단한 로그인 상태 확인
    const checkLoginStatus = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn) {
        console.log('로그인이 필요합니다.');
        navigate('/login');
        return;
      }
      setIsLoggedIn(true);
    };

    checkLoginStatus();
  }, [navigate]);

  // 로그인하지 않은 경우 로딩 화면 표시
  if (!isLoggedIn) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>페이지를 불러오는 중...</p>
      </div>
    );
  }

  const renderContent = () => {
    switch (selectedCategory) {
      case '통계자료 업로드':
        return (
          <div className={styles.uploadSection}>
            <h2>통계자료 업로드</h2>
            <div className={styles.uploadBox}>
              <div className={styles.uploadArea}>
                <div className={styles.uploadIcon}>📁</div>
                <p>파일을 드래그하거나 클릭하여 업로드</p>
                <button className={styles.uploadButton}>파일 선택</button>
              </div>
            </div>
          </div>
        );
      case '저장된 장소':
        return (
          <div className={styles.savedPlacesSection}>
            <h2>저장된 장소</h2>
            <div className={styles.placesGrid}>
              {/* 저장된 장소 목록 */}
              <div className={styles.placeCard}>
                <h3>장소 1</h3>
                <p>주소: 서울시 강남구</p>
                <p>카테고리: 음식</p>
              </div>
              <div className={styles.placeCard}>
                <h3>장소 2</h3>
                <p>주소: 서울시 서초구</p>
                <p>카테고리: 카페</p>
              </div>
            </div>
          </div>
        );
      case '분석결과':
        return (
          <div className={styles.analysisSection}>
            <h2>분석결과</h2>
            <div className={styles.analysisGrid}>
              {/* 분석 결과 차트나 그래프 */}
              <div className={styles.analysisCard}>
                <h3>방문 통계</h3>
                <div className={styles.chartPlaceholder}>차트 영역</div>
              </div>
              <div className={styles.analysisCard}>
                <h3>카테고리 분포</h3>
                <div className={styles.chartPlaceholder}>차트 영역</div>
              </div>
            </div>
          </div>
        );
      case '저장한 게시물':
        return (
          <div className={styles.savedPostsSection}>
            <h2>저장한 게시물</h2>
            <div className={styles.postsList}>
              {/* 저장한 게시물 목록 */}
              <div className={styles.postCard}>
                <h3>게시글 제목 1</h3>
                <p>작성자: 홍길동</p>
                <p>날짜: 2024-03-20</p>
              </div>
              <div className={styles.postCard}>
                <h3>게시글 제목 2</h3>
                <p>작성자: 김철수</p>
                <p>날짜: 2024-03-19</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleLogout = () => {
    // 로그아웃 처리 로직
    console.log('로그아웃');
  };

  return (
    <div className={styles.mypageRoot}>
      <div className={styles.topBar}>
        <div className={styles.logo}>PointWise</div>
        <div className={styles.topRight}>
        </div>
      </div>
      <NavigationBar currentPage="mypage" />
      <div className={styles.content}>
        <div className={styles.mypageMain}>
          {/* 좌측 카테고리 */}
          <aside className={styles.categoryPanel}>
            <div className={styles.categoryTitle}>마이페이지</div>
            {categories.map(cat => (
              <div 
                key={cat} 
                className={`${styles.categoryBox} ${selectedCategory === cat ? styles.active : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </div>
            ))}
          </aside>
          {/* 메인 컨텐츠 */}
          <section className={styles.mainSection}>
            {renderContent()}
          </section>
        </div>
      </div>
    </div>
  );
};

export default MyPage; 