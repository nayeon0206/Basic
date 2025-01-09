import express from 'express';
//express 도구를 가져온다. express 는 서버를 만들기 위해 도와주는 도구입니다.
import { authRouter } from './auth.router.js';
//./auth.router.js 파일을 가져온다.
import { usersRouter } from './users.router.js';
// ./users.router.js 파일을 가져온다.
import { resumesRouter } from './resumes.router.js';
// ./resumes.router.js 파일을 가져온다.
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js';
// 인증된 요청만 처리하도록 보장하는 미들웨어를 가져온다.

const apiRouter = express.Router();
// API 관련 모든 경로를 관리하는 메인 라우터 객체를 생성
// 이 라우터는 인증, 사용자, 이력서와 같은 하위 라우터를 포함한다.

apiRouter.use('/auth', authRouter);
// '/auth' 경로로 시작하는 요청은 authRouter에서 처리하도록 연결
apiRouter.use('/users', usersRouter);
// '/users' 경로로 시작하는 요청은 usersRouter에서 처리하도록 연결
apiRouter.use('/resumes', requireAccessToken, resumesRouter);
// '/resumes' 경로로 시작하는 요청은 requireAccessToken 미들웨어를 먼저 실행
// 미들웨어를 통과한 후 resumesRouter에서 요청을 처리
export { apiRouter };
