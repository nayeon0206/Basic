// 인메모리 데이터베이스
const players = [
    { id: 1, name: "차범근", speed: 100, shouting: 100, grade: "s" },
    { id: 2, name: "메시", speed: 100, shouting: 100, grade: "s" },
    { id: 3, name: "호날두", speed: 100, shouting: 100, grade: "s" }
  ];
  
  // 유틸 함수: ID로 선수 찾기 및 인덱스 찾기
  const findPlayerById = (id) => players.find(player => player.id === parseInt(id));
  const findPlayerIndexById = (id) => players.findIndex(player => player.id === parseInt(id));
  

//  1. 선수 목록 조회 (GET /players)
//모든 선수 정보를 반환

  router.get('/players', (req, res) => {
    res.status(200).json({ players });
  });
  

// 2. 선수 상세 조회 (GET /players/:playerId)
// 특정 선수 정보를 ID를 기반으로 반환

  router.get('/players/:playerId', (req, res) => {
    const player = findPlayerById(req.params.playerId);
  
    if (!player) {
      return res.status(404).json({ error: "선수 없음" });
    }
  
    res.status(200).json({ player });
  });
  
// 
// 3. 선수 생성 (POST /players)
// 새로운 선수를 추가합니다.
// 요청 바디: { name, speed, shouting, grade }
  router.post('/players', (req, res) => {
    const { name, speed, shouting, grade } = req.body;
  
    // 필수 필드 확인
    if (!name || typeof speed !== 'number' || typeof shouting !== 'number' || !grade) {
      return res.status(400).json({ error: "필수 필드 누락 또는 잘못된 데이터" });
    }
  
    // 새 선수 생성
    const newPlayer = {
      id: players.length ? players[players.length - 1].id + 1 : 1,
      name,
      speed,
      shouting,
      grade
    };
  
    players.push(newPlayer);
    res.status(201).json({ message: "선수 생성 성공", player: newPlayer });
  });
  

// 4. 선수 수정 (PATCH /players/:playerId)
// 특정 선수 정보를 수정합니다.
// 요청 바디: { name, speed, shouting, grade }

  router.patch('/players/:playerId', (req, res) => {
    const { playerId } = req.params;
    const { name, speed, shouting, grade } = req.body;
  
    const player = findPlayerById(playerId);
  
    if (!player) {
      return res.status(404).json({ error: "선수 없음" });
    }
  
    // 필드 업데이트
    if (name) player.name = name;
    if (speed) player.speed = speed;
    if (shouting) player.shouting = shouting;
    if (grade) player.grade = grade;
  
    res.status(200).json({ message: "선수 수정 성공", player });
  });
  
  /** 
   * 5. 선수 삭제 (DELETE /players/:playerId)
   * 특정 선수를 삭제합니다.
   */
  router.delete('/players/:playerId', (req, res) => {
    const playerIndex = findPlayerIndexById(req.params.playerId);
  
    if (playerIndex === -1) {
      return res.status(404).json({ error: "선수 없음" });
    }
  
    const [deletedPlayer] = players.splice(playerIndex, 1);
    res.status(200).json({ message: "선수 삭제 성공", player: deletedPlayer });
  });
  