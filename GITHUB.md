# GitHub 연결

## 1. GitHub에서 저장소 만들기

1. https://github.com/new 접속
2. **Repository name**: `insagirok`
3. **Public** 선택
4. **Create repository** 클릭 (README, .gitignore 추가 안 해도 됨)

---

## 2. 원격 설정 및 푸시

터미널에서 아래를 실행하세요. **YOUR_GITHUB_USERNAME** 을 본인 GitHub 아이디로 바꾸세요.

```bash
cd /Users/central/Desktop/insagirok

# 원격 URL을 본인 계정으로 변경
git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/insagirok.git

# 푸시
git push -u origin main
```

로그인 창이 뜨면 GitHub 계정으로 로그인하거나, Personal Access Token을 사용하면 됩니다.

---

## 3. 이미 저장소가 있다면

이미 `insagirok` 저장소를 만들어 두었다면, 위의 **2번**만 실행하면 됩니다 (원격 URL만 본인 아이디로 수정).
