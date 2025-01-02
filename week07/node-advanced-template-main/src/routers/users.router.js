// Express 라이브러리를 가져온다. express 는 서버를 만들기 위해 도와주는 도구
import express from 'express';
// 사용자가 유효한 액세스 토큰을 제공했는지 확인하는 미들웨어를 가져온다.
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js';
// HTTP 상태 코드를 저장한 상수 객체를 가져온다. 이 코드는 응답에서 상태 코드를 일관성 있게 사용하도록 도와준다.
// 예: HTTP_STATUS.OK는 200, HTTP_STATUS.BAD_REQUEST는 400과 같은 숫자를 의미한다.
import { HTTP_STATUS } from '../constants/http-status.constant.js';
// 응답에 포함할 메시지 상수를 가져온다. 
// 메시지는 코드에서 하드코딩하지 않고 상수로 관리하여 유지보수를 쉽게 하고 일관성을 제공
import { MESSAGES } from '../constants/message.constant.js';

// Express의 Router 객체를 생성
// 이 객체는 사용자 관련 경로(엔드포인트)를 정의하고, 별도의 모듈로 관리하기 위해 사용
const usersRouter = express.Router();

usersRouter.get('/me', requireAccessToken, (req, res, next) => {
  // '/me' 경로에 대한 GET 요청을 처리
  // `requireAccessToken` 미들웨어를 먼저 실행하여 유효한 토큰인지 확인한 후, 다음 처리로 넘어간다.
  try {
    const data = req.user;
    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.USERS.READ_ME.SUCCEED,
      data,
    });
  } catch (error) {
    next(error);
  }
});

export { usersRouter };
// 이 파일의 usersRouter 객체를 내보낸다다.