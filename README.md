# PointWise - 포인트 기반 커뮤니티 플랫폼

## 프로젝트 개요

PointWise는 사용자들이 포인트를 활용하여 정보를 공유하고 소통할 수 있는 커뮤니티 플랫폼입니다. 사용자들은 포인트를 통해 정보를 얻고, 질문하고, 답변하며 커뮤니티를 형성할 수 있습니다.

## 기술 스택

### 프론트엔드
- React
- TypeScript
- CSS Modules
- React Router

### 백엔드
- FastAPI
- SQLAlchemy
- SQLite
- JWT 인증
- Python 3.8+

## 설치 및 실행

### 프론트엔드
```bash
# 저장소 클론
git clone https://github.com/yufma/pointwise-react.git
cd pointwise-react

# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

### 백엔드
```bash
cd backend/backend

# 가상환경 생성 및 활성화
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# 의존성 설치
pip install -r requirements.txt

# 환경 변수 설정
# .env 파일을 생성하고 다음 내용을 추가:
# SECRET_KEY=your-secret-key

# 서버 실행
python main.py
```

## API 엔드포인트

### 회원가입
- **POST** `/register`
- 요청 본문:
  ```json
  {
    "name": "사용자이름",
    "email": "user@example.com",
    "password": "password123"
  }
  ```

### 로그인
- **POST** `/login`
- 요청 본문:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- 응답:
  ```json
  {
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "token_type": "bearer",
    "user": {
      "email": "user@example.com",
      "name": "사용자이름"
    }
  }
  ```

## 주요 기능

### 1. 커뮤니티 페이지
- 게시판 시스템
- 카테고리별 게시글 분류
- 게시글 목록 표시
- 글쓰기 기능

### 2. UI/UX 디자인
- 네비게이션 바
- 로고 디자인
- 반응형 디자인
- 시각적 효과

### 3. 사용자 인증
- 회원가입
- 로그인
- JWT 기반 인증
- 비밀번호 해싱

## 개발 환경 설정

### 프론트엔드
- Node.js 16.x 이상
- npm 8.x 이상
- React 18.x
- TypeScript 4.x

### 백엔드
- Python 3.8 이상
- FastAPI
- SQLAlchemy
- SQLite
