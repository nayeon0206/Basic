import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { signUpValidator } from '../middlewares/validators/sign-up-validator.middleware.js';
import { signInValidator } from '../middlewares/validators/sign-in-validator.middleware.js';
import { prisma } from '../utils/prisma.util.js';
import {
  ACCESS_TOKEN_EXPIRES_IN,
  HASH_SALT_ROUNDS,
} from '../constants/auth.constant.js';
import { ACCESS_TOKEN_SECRET } from '../constants/env.constant.js';

const authRouter = express.Router();
// 인증(Authentication) 관련 엔드포인트를 처리할 라우터를 생성
authRouter.post('/sign-up', signUpValidator, async (req, res, next) => {
  // 회원가입(Sign-up) 요청을 처리하는 POST 엔드포인트.
  // `signUpValidator` 미들웨어를 먼저 실행하여 요청 데이터의 유효성을 검증
  try {
    const { email, password, name } = req.body;
 // 요청 본문에서 이메일, 비밀번호, 이름을 추출
    const existedUser = await prisma.user.findUnique({ where: { email } });
    // 데이터베이스에서 입력된 이메일과 동일한 사용자가 있는지 확인

    // 이메일이 중복된 경우
    if (existedUser) {
      return res.status(HTTP_STATUS.CONFLICT).json({
        status: HTTP_STATUS.CONFLICT,
         // HTTP 상태 코드 409(CONFLICT)로 응답
        message: MESSAGES.AUTH.COMMON.EMAIL.DUPLICATED,
      });
    }

    const hashedPassword = bcrypt.hashSync(password, HASH_SALT_ROUNDS);
    // 비밀번호를 해시(Hash)하여 안전하게 저장
    // `HASH_SALT_ROUNDS`는 해싱에 사용되는 반복 횟수
    const data = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    // 데이터베이스에 새 사용자를 생성
    // 비밀번호는 해시된 값으로 저장

    data.password = undefined;
    // 응답에 비밀번호 해시가 포함되지 않도록 제거

    return res.status(HTTP_STATUS.CREATED).json({
      status: HTTP_STATUS.CREATED,
      message: MESSAGES.AUTH.SIGN_UP.SUCCEED,
      // 회원가입 성공 메시지를 반환
      data,
    });
  } catch (error) {
    next(error);
  }
});

authRouter.post('/sign-in', signInValidator, async (req, res, next) => {
   // 로그인(Sign-in) 요청을 처리하는 POST 엔드포인트.
   // `signInValidator` 미들웨어를 먼저 실행하여 요청 데이터의 유효성을 검증
  try {
    const { email, password } = req.body;
    // 요청 본문에서 이메일과 비밀번호를 추출
    const user = await prisma.user.findUnique({ where: { email } });
    // 데이터베이스에서 입력된 이메일과 일치하는 사용자를 검색
    const isPasswordMatched =
      user && bcrypt.compareSync(password, user.password);
    // 데이터베이스에서 가져온 비밀번호 해시와 사용자가 입력한 비밀번호를 비교
    // 사용자 정보가 없거나 비밀번호가 일치하지 않으면 `false`를 반환
    if (!isPasswordMatched) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({
        status: HTTP_STATUS.UNAUTHORIZED,
        message: MESSAGES.AUTH.COMMON.UNAUTHORIZED,
      });
    }

    const payload = { id: user.id };
    // JWT(Json Web Token) 생성 시 사용할 사용자 식별자를 페이로드에 포함

    const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    });
    // JWT를 생성
    // ACCESS_TOKEN_SECRET: JWT 서명에 사용되는 비밀 키.
    // ACCESS_TOKEN_EXPIRES_IN: 토큰 만료 시간.
    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.AUTH.SIGN_IN.SUCCEED,
      data: { accessToken },
       // 클라이언트에 JWT 액세스 토큰을 응답으로 제공
    });
  } catch (error) {
    next(error);
  }
});

export { authRouter };
