// src/routes/posts.router.js

// 숙제입니다.

// 게시물 작성
router.post("/", (req, res) => {
    res.send("게시물 작성 엔드포인트");
  });
  
  // 게시물 목록 조회
  router.get("/", (req, res) => {
    res.send("게시물 목록 조회 엔드포인트");
  });
  
  // 게시물 상세 조회
  router.get("/:postId", (req, res) => {
    res.send("게시물 상세 조회 엔드포인트");
  });
  
  // 게시물 수정
  router.patch("/:postId", (req, res) => {
    res.send("게시물 수정 엔드포인트");
  });
  
  // 게시물 삭제
  router.delete("/:postId", (req, res) => {
    res.send("게시물 삭제 엔드포인트");
  });