require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// MongoDB 연결
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pointwise')
  .then(() => console.log('MongoDB 연결 성공'))
  .catch(err => console.error('MongoDB 연결 실패:', err));

// 라우트 설정
app.use('/api', authRoutes);

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다`);
}); 