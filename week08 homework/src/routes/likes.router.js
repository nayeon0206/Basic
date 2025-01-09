

//POST 엔드포인트: 특정 게시물에 좋아요 추가
router.post("/:postId/likes", (req, res) => {
    const { postId } = req.params;
    res.send(`게시물 좋아요: ${postId}`);
  });
  
// DELETE 엔드포인트: 특정 게시물의 좋아요 취소
  router.delete("/:postId/likes", (req, res) => {
    const { postId } = req.params;
    res.send(`게시물 좋아요 취소: ${postId}`);
  });