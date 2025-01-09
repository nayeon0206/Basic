// 팔로우 추가
router.post("/:userId/follow", (req, res) => {
    res.send("팔로우 추가 엔드포인트");
  });
  
  // 언팔로우
  router.delete("/:userId/follow", (req, res) => {
    res.send("언팔로우 엔드포인트");
  });