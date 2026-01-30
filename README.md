# insagirok

인사기록 관리 시스템 (관리자 전용). 직원별 문제 발언·행동 기록, 팀/직원 설정, 관리자 계정 관리.

## 연결된 서비스

- **Supabase** (프로젝트: insagirok)  
  - URL·anon key: `js/supabase-config.js`  
  - 테이블: `admin_accounts`, `teams`, `employees`, `hr_records`  
  - 현재 앱은 localStorage 사용 중이며, Supabase 테이블은 추후 연동용으로 준비되어 있습니다.

- **GitHub**  
  - 저장소 이름: `insagirok`  
  - 아래 명령으로 원격 추가 후 푸시하세요.

- **Vercel**  
  - 프로젝트: insagirok  
  - 이 저장소를 Vercel에 연결하면 자동 배포됩니다.

## GitHub 연결

```bash
git init
git add .
git commit -m "Initial commit: insagirok"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/insagirok.git
git push -u origin main
```

(GitHub에서 `insagirok` 저장소를 만든 뒤 `YOUR_USERNAME`을 본인 아이디로 바꾸세요.)

## Vercel 배포

1. [Vercel](https://vercel.com) 로그인 후 **Add New Project**
2. **Import Git Repository**에서 `insagirok` 저장소 선택
3. Framework Preset: **Other** (또는 자동 감지)
4. Deploy

또는 Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 로컬 실행

별도 빌드 없이 `index.html`, `admin.html`을 브라우저에서 직접 열면 됩니다.

- 기본 관리자: 아이디 `admin` / 비밀번호 `admin123`  
  (최초 로그인 후 어드민 페이지에서 관리자 추가·삭제 가능)
