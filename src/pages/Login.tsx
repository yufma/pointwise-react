import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Paper,
  Link,
  Snackbar,
  Alert
} from '@mui/material';
import { Visibility, VisibilityOff, Home as HomeIcon } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 로컬 개발 환경을 위한 간단한 로그인 처리
    if (formData.email && formData.password) {
      // 사용자 정보 가져오기
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === formData.email && u.password === formData.password);
      
      if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify({
          name: user.name,
          email: user.email
        }));
        
        setSnackbar({
          open: true,
          message: '로그인 성공!',
          severity: 'success'
        });
        
        // 이전 페이지로 리다이렉트
        setTimeout(() => {
          const from = location.state?.from || '/';
          navigate(from);
        }, 1000);
      } else {
        setSnackbar({
          open: true,
          message: '이메일 또는 비밀번호가 올바르지 않습니다.',
          severity: 'error'
        });
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <IconButton onClick={() => navigate('/')} color="primary">
              <HomeIcon />
            </IconButton>
            <Typography component="h1" variant="h5">
              로그인
            </Typography>
            <Box sx={{ width: 40 }} /> {/* 균형을 위한 빈 공간 */}
          </Box>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2">
              계정이 없으신가요?{' '}
              <Link
                component="button"
                variant="body2"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/signup');
                }}
                sx={{
                  textDecoration: 'none',
                  color: '#1976d2',
                  fontWeight: 500,
                  cursor: 'pointer',
                  border: 'none',
                  background: 'none',
                  padding: 0,
                  '&:hover': {
                    color: '#1565c0',
                    textDecoration: 'underline'
                  }
                }}
              >
                회원가입
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login; 