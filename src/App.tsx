import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MapVisualization from './components/MapVisualization';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Community from './pages/Community';
import MyPage from './pages/MyPage';
import MapPage from './pages/MapPage';
import NavigationBar from './components/NavigationBar';
import './App.css';

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에서 로그인 상태 확인
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  return (
    <div className="main-container">
      <div className="top-bar">
        <div className="logo">PointWise</div>
        <div className="top-right">
        </div>
      </div>
      <NavigationBar currentPage="home" />
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
    <Router basename="/pointwise-react">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/community" element={<Community />} />
          <Route path="/map" element={<MapPage />} />
          <Route 
            path="/mypage" 
            element={
              localStorage.getItem('isLoggedIn') === 'true' ? (
                <MyPage />
              ) : (
                <Navigate to="/login" state={{ from: '/mypage' }} replace />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;