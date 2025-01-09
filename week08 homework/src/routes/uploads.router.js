
// POST 엔드포인트: 특정 사용자의 프로필 사진 업로드
router.post("/users/:userId/profile-image", (req, res) => {
    const { userId } = req.params;
    res.send(`프로필 사진 업로드: ${userId}`);
  });

// POST 엔드포인트: 특정 게시물의 이미지 업로드
  router.post("/posts/:postId/image", (req, res) => {
    const { postId } = req.params;
    res.send(`게시물 이미지 업로드: ${postId}`);
  });