import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import MapVisualization from './components/MapVisualization';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import './App.css';

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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

  return (
    <div className="main-container">
      <div className="top-bar">
        <div className="logo">PointWise</div>
        <div className="top-right">
          {isLoggedIn ? (
            <button className="auth-button" onClick={handleLogout}>로그아웃</button>
          ) : (
            <button className="auth-button" onClick={() => navigate('/login')}>로그인</button>
          )}
          <div className="more-icon">
            <div className="vector"></div>
            <div className="vector"></div>
            <div className="vector"></div>
          </div>
        </div>
      </div>
      
      <div className="nav-bar">
        <div className="nav-item">홈</div>
        <div className="nav-item">지도</div>
        <div className="nav-item">커뮤니티</div>
        <div className="nav-item">마이페이지</div>
      </div>

      <div className="main-content">
        <div className="left-panel">
          <div className="section-title">검색</div>
          <div className="search-box"></div>
          
          <div className="section-title">카테고리</div>
          <div className="category-boxes">
            <div className="category-box">음식</div>
            <div className="category-box">카페</div>
            <div className="category-box">문화</div>
            <div className="category-box">쇼핑</div>
            <div className="category-box">숙박</div>
            <div className="category-box">기타</div>
          </div>

          <div className="section-title">난이도</div>
          <div className="level-slider"></div>
          <div className="level-labels">
            <span>쉬움</span>
            <span>보통</span>
            <span>어려움</span>
          </div>
        </div>

        <div className="map-area">
          <MapVisualization />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={() => {}} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;