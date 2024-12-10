# 프로젝트 진행 순서.

- [x] 1. 프로젝트 생성 
- [X] 2. 프로젝트 초기화 - `npm init -y`
- [X] 3. ESM - package.json 수정 -> type:module, scripts 수정
- [X] 4. 필요한 패키지 설치 - `npm i express`, `npm i -D nodemon`
- [x] 5. server.js 파일 생성 및 초기화 코드 작성 
- [x] 6. 선수 데이터 생성 
- [x] 7. 선수 데이터 불러오기 - CRUD - Read
- [x] 8. 선수 데이터 생성하기 - CRUD - Create
- [x] 9. 특정 선수 데이터 삭제    - CRUD - Delete
- [x] 10. 특정 선수 데이터 update    - CRUD - Update
- [x] 11. 폴더분리. mvc 
- [x] 12. 선수 삭제시 데이터에서 삭제 되지 않는 에러 발생  

<br />

---

<br />

<!-- # h1 -->
<!-- ## h2 -->
<!-- ### h3 -->
<!-- ###### h6 -->

# Git으로 프로젝트 GitHub에 올리기

## Local - 내 컴퓨터 
- [x] 1. `git init` - 프로젝트를 git으로 관리 한다는 뜻
- [x] 2. `git ignore` - git으로 관리 하지 않는 파일들
  - [x] 2.1. `touch .gitignore` 
- [x] 3. git add - `git add .`
- [x] 4. git commit - `git commit -m "메세지"`
- [x] 5. 내 로컬 git이랑 <----> github 레포지토리랑 연결한다.
- [x] 6. `git push` - 내 컴퓨터에서 github레포티토리로 파일을 올린다.
  
<br />

  ## GitHub - 클라우드
- [x] 1. github로 가서 repository를 만든다.
- [x] 2. 레포지토리 만들고 아래 커맨드 복복 후 local에서 git push 하면되는데 이미 커맨드에 있다. 
  ```bash
  git remote add origin git@github.com:jyh7a/player-curd-mvc-pattern.git
  git branch -M main
  git push -u origin main
  ```