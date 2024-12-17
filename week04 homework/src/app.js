// ESM 모듈 방식입니다.
import express from 'express';
import playerRouter from './routes/player.router.js';

const app = express();
const port = 3000;

// express settings
// JSON요청을 받아 들인다.
app.use(express.json());

// router 연결
app.use('/api', playerRouter);

app.get('/', (req, res) => {
  res.send('안녕하세요 홈페이지입니다.');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
