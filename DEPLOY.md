# GitHub 푸시 & Vercel 배포

## "No Production Deployment" 가 나올 때

Vercel 프로젝트는 만들었는데 **프로덕션 도메인이 트래픽을 서빙하지 않는** 상태라면, 아래 중 하나로 **한 번이라도 배포**를 해 주세요.

### A. Vercel 대시보드에서 배포

1. https://vercel.com 로그인 후 **insagirok** 프로젝트 선택
2. **Deployments** 탭 클릭
3. **Redeploy** 또는 **Create Deployment** 가 있으면 클릭
4. 또는 **Settings** → **Git** 에서 GitHub 저장소가 연결돼 있다면, **main** 브랜치에 푸시하면 자동으로 프로덕션 배포가 생성됩니다.

### B. 터미널에서 Vercel CLI로 배포

```bash
cd /Users/central/Desktop/insagirok
npx vercel login    # 브라우저에서 로그인 (최초 1회)
npx vercel --prod   # 프로덕션 배포
```

배포가 끝나면 **Production Domain** 이 활성화됩니다.

---

## 1. GitHub 푸시

현재 원격이 `https://github.com/central/insagirok.git` 로 설정되어 있습니다.  
**본인 GitHub 아이디**로 저장소를 쓰려면 아래처럼 바꾼 뒤 푸시하세요.

### 1) GitHub에서 저장소 만들기

- https://github.com/new 에서 **Repository name**: `insagirok`
- Public 선택 후 **Create repository** (README 추가 안 해도 됨)

### 2) 원격 URL 수정 후 푸시

```bash
cd /Users/central/Desktop/insagirok

# YOUR_GITHUB_USERNAME 을 본인 GitHub 아이디로 바꾸세요
git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/insagirok.git
git push -u origin main
```

GitHub 로그인(또는 토큰)이 필요하면 터미널에서 안내에 따라 진행하면 됩니다.

---

## 2. Vercel 배포

### 방법 A – GitHub 연동 (권장)

1. 위에서 **GitHub에 푸시**까지 완료
2. https://vercel.com 로그인
3. **Add New** → **Project**
4. **Import** 목록에서 `insagirok` 저장소 선택
5. **Deploy** (설정 그대로 두고 진행해도 됨)
6. 이후 `main` 에 푸시할 때마다 자동 배포됩니다.

### 방법 B – Vercel CLI

```bash
cd /Users/central/Desktop/insagirok
npx vercel login   # 최초 1회, 브라우저에서 로그인
npx vercel         # 미리보기 배포
npx vercel --prod  # 프로덕션 배포
```

첫 실행 시 프로젝트 이름 등 질문에 답하면 됩니다.
