// src/routes/users.router.js

// 숙제입니다.

// 유저 정보 조회
router.get('/users/:userId', authMiddleware, async (req, res) => {
    // 유저 정보 조회 로직
    // 실제 로직은 작성하지 않습니다.
    const { userId } = req.params;
  res.send(`프로필 조회: ${userId}`);
  })