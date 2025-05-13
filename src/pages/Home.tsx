import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Paper,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

const Home: React.FC = () => {
  const navigate = useNavigate();
  // 로그인 상태 관리 (초기값: false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그아웃 버튼 클릭 시
  const handleLogout = () => {
    setIsLoggedIn(false);
    // 추가로 로그아웃 처리 로직(토큰 삭제 등) 구현 가능
  };

  // (예시) 로그인 버튼: 실제로는 로그인 페이지에서 처리
  const handleLogin = () => {
    navigate('/login');
    setIsLoggedIn(true); // 실제 서비스에서는 로그인 성공 시에만 true로 변경
  };

  return (
    <Box sx={{ minHeight: '100vh', background: '#F8FAFC', position: 'relative', width: '100vw', overflowX: 'auto' }}>
      {/* 상단바 */}
      <AppBar position="static" sx={{ background: '#0099FF', height: 60, boxShadow: 'none', justifyContent: 'center' }}>
        <Toolbar sx={{ minHeight: 60, px: 2, position: 'relative' }}>
          <Typography
            sx={{
              fontFamily: 'Josefin Sans, sans-serif',
              fontWeight: 700,
              fontSize: 28,
              lineHeight: '28px',
              color: '#fff',
              position: 'absolute',
              left: 16,
              top: 16,
            }}
          >
            PointWise
          </Typography>
          <IconButton
            edge="end"
            sx={{
              position: 'absolute',
              right: 24,
              top: 8,
              width: 44,
              height: 44,
              color: '#fff',
            }}
          >
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 네비게이션바 */}
      <Box
        sx={{
          width: '100%',
          height: 45,
          background: '#fff',
          borderBottom: '1px solid #E8E8E8',
          boxShadow: 'inset 0px 4px 4px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Typography sx={{ position: 'absolute', left: 200, top: 10, fontFamily: 'Josefin Sans', fontWeight: 100, fontSize: 20 }}>
          지도
        </Typography>
        <Typography sx={{ position: 'absolute', left: 300, top: 10, fontFamily: 'Josefin Sans', fontWeight: 100, fontSize: 20 }}>
          통계자료 업로드
        </Typography>
        <Typography sx={{ position: 'absolute', left: 480, top: 10, fontFamily: 'Josefin Sans', fontWeight: 100, fontSize: 20 }}>
          종류별 분석
        </Typography>
        {!isLoggedIn ? (
          <Button
            variant="outlined"
            size="small"
            sx={{ position: 'absolute', left: 1000, top: 6, width: 110, height: 28, fontSize: 20, fontFamily: 'Josefin Sans', fontWeight: 100 }}
            onClick={handleLogin}
          >
            로그인
          </Button>
        ) : (
          <Button
            variant="outlined"
            size="small"
            sx={{ position: 'absolute', left: 1000, top: 6, width: 110, height: 28, fontSize: 20, fontFamily: 'Josefin Sans', fontWeight: 100 }}
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
          >
            로그아웃
          </Button>
        )}
      </Box>

      {/* 검색/지도/필터 영역 */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        {/* 상단 검색창 */}
        <Paper elevation={3} sx={{ p: 1.5, display: 'flex', gap: 1.5, alignItems: 'center', mb: 2 }}>
          <TextField label="주소" variant="outlined" size="small" sx={{ width: '200px' }} />
          <TextField label="업종" variant="outlined" size="small" sx={{ width: '200px' }} />
          <Button variant="contained" color="primary" size="small">검색</Button>
        </Paper>
        {/* 본문: 사이드바 + 지도 */}
        <Box sx={{ position: 'relative', height: 700 }}>
          {/* 왼쪽 사이드바 */}
          <Box sx={{ width: 400, height: 500, background: '#E0F2FE', borderRadius: 2, position: 'absolute', left: 16, top: 16 }}>
            {/* 위치 검색 */}
            <Typography sx={{ position: 'absolute', left: 24, top: 32, fontFamily: 'Josefin Sans', fontWeight: 100, fontSize: 20 }}>
              위치 검색
            </Typography>
            <Box sx={{ position: 'absolute', left: 24, top: 60, width: 350, height: 48, background: '#fff', borderRadius: 1 }} />
            {/* 업종 선택 */}
            <Typography sx={{ position: 'absolute', left: 24, top: 120, fontFamily: 'Josefin Sans', fontWeight: 100, fontSize: 20 }}>
              업종 선택
            </Typography>
            {/* 업종 카테고리 */}
            <Box sx={{ position: 'absolute', left: 24, top: 150, display: 'flex', gap: 1.5 }}>
              <Box sx={{ width: 80, height: 80, background: '#FFFDFD', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ fontWeight: 600, fontSize: 20 }}>카페</Typography>
              </Box>
              <Box sx={{ width: 80, height: 80, background: '#FFFDFD', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ fontWeight: 600, fontSize: 20 }}>음식</Typography>
              </Box>
              <Box sx={{ width: 80, height: 80, background: '#FFFDFD', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ fontWeight: 600, fontSize: 20 }}>편의점</Typography>
              </Box>
              <Box sx={{ width: 80, height: 80, background: '#FFFDFD', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ fontWeight: 600, fontSize: 20 }}>기타</Typography>
              </Box>
            </Box>
            {/* 입지 레벨 */}
            <Typography sx={{ position: 'absolute', left: 24, top: 260, fontFamily: 'Josefin Sans', fontWeight: 100, fontSize: 20 }}>
              입지 레벨
            </Typography>
            {/* 레벨 바 */}
            <Box sx={{
              position: 'absolute', left: 24, top: 290, width: 360, height: 36,
              background: 'linear-gradient(90deg, #4000FF 0%, #0059DF 18.75%, #62FF00 38.46%, #FFD900 57.21%, #FF8C00 79.33%, #FF0000 100%)',
              borderRadius: '50px'
            }} />
            {/* 레벨 숫자 */}
            <Typography sx={{ position: 'absolute', left: 24, top: 340, fontWeight: 600, fontSize: 20 }}>1</Typography>
          </Box>
          {/* 지도 영역 */}
          <Box sx={{ position: 'absolute', left: 440, top: 0, width: 700, height: 700, background: '#D9D9D9', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: 96, color: '#000' }}>지도</Typography>
          </Box>
        </Box>
      </Container>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h2" 
            align="center" 
            gutterBottom 
            sx={{ 
              mb: 6,
              fontWeight: 'bold',
              color: '#1976d2'
            }}
          >
            주요 기능
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/feature1.jpg"
                  alt="기능 1"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    간편한 사용
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    누구나 쉽게 사용할 수 있는 직관적인 인터페이스
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/feature2.jpg"
                  alt="기능 2"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    빠른 속도
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    최적화된 성능으로 빠른 서비스 제공
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/feature3.jpg"
                  alt="기능 3"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    안정적인 서비스
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    24시간 안정적인 서비스 운영
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 