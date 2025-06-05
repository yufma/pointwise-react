import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NavigationBar.module.css';

interface NavigationBarProps {
  currentPage?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ currentPage }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleMypageClick = () => {
    if (isLoggedIn) {
      navigate('/mypage');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.navLeft}>
        <div 
          className={`${styles.navItem} ${currentPage === 'home' ? styles.active : ''}`} 
          onClick={() => navigate('/')}
        >
          홈
        </div>
        <div 
          className={`${styles.navItem} ${currentPage === 'map' ? styles.active : ''}`} 
          onClick={() => navigate('/map')}
        >
          지도
        </div>
        <div 
          className={`${styles.navItem} ${currentPage === 'community' ? styles.active : ''}`} 
          onClick={() => navigate('/community')}
        >
          커뮤니티
        </div>
        <div 
          className={`${styles.navItem} ${currentPage === 'mypage' ? styles.active : ''}`} 
          onClick={handleMypageClick}
        >
          마이페이지
        </div>
      </div>
      <div className={styles.navRight}>
        {isLoggedIn ? (
          <button className={styles.authButton} onClick={handleLogout}>로그아웃</button>
        ) : (
          <button className={styles.authButton} onClick={() => navigate('/login')}>로그인</button>
        )}
      </div>
    </div>
  );
};

export default NavigationBar; 