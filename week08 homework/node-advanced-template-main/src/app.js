//express 도구를 가져온다. express 는 서버를 만들기 위해 도와주는 도구입니다.
import express from 'express';
// constant 라는 상수를 정의하는 폴더에서 환경변수중에 SERVER_PORT 가져온다. SERVER_PORT는 3000이다.
import { SERVER_PORT } from './constants/env.constant.js'; // 
// import dotenvObj from './constants/env.constant.js';
// middleware 폴더에서 error 만 처리하는 middleware 파일에서 errorHandler 만 가져온다.
import { errorHandler } from './middlewares/error-handler.middleware.js';
// constants 상수를 정의하는 폴더에서 http-status 상태를 관리하는 파일에서 HTTP_STATUS 만 가져온다. 상태를 관리하는 객체다.
import { HTTP_STATUS } from './constants/http-status.constant.js';
// routers 폴더에서 index.js 는 라우터를 관리하는 파일에 api 라우터를 가지고 온다. api 라우터는 express 라우터이다.
import { apiRouter } from './routers/index.js';

// express 를 실행해서 app 서버를 만들었다.
const app = express();

// use 미들웨어를 정의한다. express.json 을 사용할 수 있게 한다.
// express.json 을 사용하면 클라이언트가 json 요청으로 데이터를 보낼 때 서버가 파싱해서 req.body 에 데이터를 넣는다.
app.use(express.json());
// Express에서 사용되는 미들웨어로, HTML 폼 데이터를 처리하기 위해 설정됩니다.
// 클라이언트가 전송한 URL-encoded 데이터를 처리하고, 이를 서버에서 쉽게 접근할 수 있도록 req.body 객체에 파싱해 넣어줍니다.
// 폼이라는 것이 input이나 textarear 같은 태그들이 폼 태그다.
app.use(express.urlencoded({ extended: true }));

// get 메서드로 /health-check 요청이 왔을 때 I'm healthy를 전달해준다.
app.get('/health-check', (req, res) => {
  return res.status(HTTP_STATUS.OK).send(`I'm healthy.`);
});

// 접두사를 /api로 고정하고 있고, apirouter 를 사용할 수 있게 해준다.
app.use('/api', apiRouter);

// errorHandler 미들웨어를 사용한다. 에러 처리하는 미들웨어이다.
app.use(errorHandler);

// listen 메서드를 통해서 서버포트에서 내 프로그램을 실행한다. 실행이되면 콜백함수가 실행이되면서 콘솔로그가 찍힌다.
app.listen(SERVER_PORT, () => {
  console.log(`서버가 ${SERVER_PORT}번 포트에서 실행 중입니다.`);
});
