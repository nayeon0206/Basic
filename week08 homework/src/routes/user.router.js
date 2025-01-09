// src/routes/users.router.js

// 숙제입니다.

// 유저 정보 조회
router.get('/users/:userId', authMiddleware, async (req, res) => {
    // 유저 정보 조회 로직
    // 실제 로직은 작성하지 않습니다.
    const { userId } = req.params;// 경로 매개변수에서 사용자 ID 추출
  res.send(`프로필 조회: ${userId}`);
  })

  // PATCH 엔드포인트: 특정 사용자의 정보 수정
  router.patch("/users/:userId", (req, res) => {
    const { userId } = req.params;// 경로 매개변수에서 사용자 ID 추출
    res.send(`프로필 수정: ${userId}`);
  });
  
  router.post("/users/:userId", (req, res) => {
    const { userId } = req.params;// 경로 매개변수에서 사용자 ID 추출
    res.send(`회원 탈퇴: ${userId}`);
  });