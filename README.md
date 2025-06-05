# Pointwise Backend

이 프로젝트는 Pointwise 애플리케이션의 백엔드 서버입니다.

## 기술 스택

- FastAPI
- SQLAlchemy
- SQLite
- JWT 인증
- Python 3.8+

## 설치 방법

1. 저장소 클론
```bash
git clone [repository-url]
cd pointwise/backend/backend
```

2. 가상환경 생성 및 활성화
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

3. 의존성 설치
```bash
pip install -r requirements.txt
```

4. 환경 변수 설정
`.env` 파일을 생성하고 다음 내용을 추가합니다:
```
SECRET_KEY=your-secret-key
```

## 실행 방법

```bash
python main.py
```

서버는 기본적으로 `http://localhost:3001`에서 실행됩니다.

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