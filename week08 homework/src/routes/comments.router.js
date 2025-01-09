
// POST 엔드포인트: 특정 게시물에 댓글 작성
router.post("/:postId", (req, res) => {
    const { postId } = req.params;
    res.send(`댓글 작성: 게시물 ID ${postId}`);
  });
  
// PATCH 엔드포인트: 특정 게시물의 댓글 수정
  router.patch("/:postId/comments", (req, res) => {
    const { postId, commentId } = req.params;
    res.send(`댓글 수정: 게시물 ID ${postId}, 댓글 ID ${commentId}`);
  });

// DELETE 엔드포인트: 특정 게시물의 댓글 삭제
  router.delete("/:postId/comments", (req, res) => {
    const { postId, commentId } = req.params;
    res.send(`댓글 삭제: 게시물 ID ${postId}, 댓글 ID ${commentId}`);
  });