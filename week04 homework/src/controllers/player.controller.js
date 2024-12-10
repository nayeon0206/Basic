import players from '../models/player.model.js';

const getPlayers = (req, res) => {
  res.json(players);
};

const createPlayer = (req, res) => {
  // 1. 데이터를 받아야한다
  // 2. 보내는 사람(Client) req 를 쓰자!
  // 3. req.body - 를 받기위한 express 셋팅
  // 4. 클라이언트 에게 받은 선수 데이터를 players 배열에 추가한다.

  const { name, speed, grade } = req.body;

  // players.push({ name: req.name, speed: req.speed, grade: req.grade });
  // players.push({ name: '박지성', speed: speed, grade: grade });
  players.push({ name, speed, grade });

  res.json(players);
};

const deletePlayer = (req, res) => {
  // filter 사용 - 그 선수가 아닌 사람들만 찾아낸다.
  // :name -> 박지성
  // ["손흥민", "박지성", "차범근"]
  // return player.name !== name;
  // ["손흥민", "차범근"]
  const { name } = req.params;
  // 기존 데이터만 지운다.
  // splice - splice(idx, 1)
  const idx = players.findIndex((player) => player.name === name);

  if (idx > -1) {
    players.splice(idx, 1);
  }

  console.log(players);
  res.json(players);
};

const updatePlayer = (req, res) => {
  const { name } = req.params;
  const { speed, grade } = req.body;

  // 1. 이름으로 선수를 검색해서 그 선수가 있는지 확인한다.
  // 2. 선수가 없으면 선수가 없다고 응답한다.
  // 3. 선수가 있으면 update 시킨다.

  const _players = players.filter((player) => {
    return player.name === name;
  });

  // 1. 이름으로 선수를 검색해서 그 선수가 있는지 확인한다.
  if (_players.length <= 0) {
    return res.status(404).json({ message: '찾는 선수가 없습니다.😵‍💫' });
  }

  // 2. 선수가 있다 update 가즈아.
  // 2.1. find로 해당 선수를 찾습니다.
  // 2.2. 그 선수 능력치를 업데이트 시킵니다.
  const player = players.find((player) => {
    return player.name === name;
  });
  // 2.3. if문으로 있는 속성만 업데이트 한다.
  if (speed) {
    player.speed = speed;
  }
  if (grade) {
    player.grade = grade;
  }

  res.json(player);
};

export { getPlayers, createPlayer, deletePlayer, updatePlayer };
