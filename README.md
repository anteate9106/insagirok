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
  - GitHub(anteate9106/insagirok) 연결 시 main 푸시마다 자동 배포됩니다.

## GitHub 연결

저장소가 이미 초기화되어 있습니다. GitHub에서 `insagirok` 저장소를 만든 뒤 아래만 실행하세요.

```bash
git remote add origin https://github.com/YOUR_USERNAME/insagirok.git
git push -u origin main
```

(YOUR_USERNAME을 본인 GitHub 아이디로 바꾸세요.)

## Vercel 배포

**방법 1 – Git 연동 (권장)**  
1. GitHub에 `insagirok` 푸시 후 [Vercel](https://vercel.com) 로그인  
2. **Add New Project** → **Import Git Repository**에서 `insagirok` 선택  
3. Framework Preset: **Other** → Deploy  
4. 이후 `main` 브랜치에 푸시할 때마다 자동 배포됩니다.

**방법 2 – Vercel CLI**  
```bash
npm i -g vercel
cd /path/to/insagirok
vercel
```

## 로컬 실행

별도 빌드 없이 `index.html`, `admin.html`을 브라우저에서 직접 열면 됩니다.

- 기본 관리자: 아이디 `admin` / 비밀번호 `admin123`  
  (최초 로그인 후 어드민 페이지에서 관리자 추가·삭제 가능)
