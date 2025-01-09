import jwt from 'jsonwebtoken';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { ACCESS_TOKEN_SECRET } from '../constants/env.constant.js';
import { prisma } from '../utils/prisma.util.js';

export const requireAccessToken = async (req, res, next) => {
  try {
    // 인증 정보 파싱
    const authorization = req.headers.authorization;
    // const authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzM2MzkwMjE5LCJleHAiOjE3MzY0MzM0MTl9.e7bj0O_a4mxkKs9DdZMNL3pm8Ypyp2-3uaYWO4sUgbI"
   

    // Authorization이 없는 경우
    if (!authorization) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({
        status: HTTP_STATUS.UNAUTHORIZED,
        message: MESSAGES.AUTH.COMMON.JWT.NO_TOKEN,
      });
    }

    // JWT 표준 인증 형태와 일치하지 않는 경우
    const [type, accessToken] = authorization.split(' ');
    // type = Bearer
    // accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzM2MzkwMjE5LCJleHAiOjE3MzY0MzM0MTl9.e7bj0O_a4mxkKs9DdZMNL3pm8Ypyp2-3uaYWO4sUgbI

    if (type !== 'Bearer') {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({
        status: HTTP_STATUS.UNAUTHORIZED,
        message: MESSAGES.AUTH.COMMON.JWT.NOT_SUPPORTED_TYPE,
      });
    }

    // AccessToken이 없는 경우
    if (!accessToken) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({
        status: HTTP_STATUS.UNAUTHORIZED,
        message: MESSAGES.AUTH.COMMON.JWT.NO_TOKEN,
      });
    }

    let payload;
    try {
      payload = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
      // payload = { userid: 1, ~~~}
    } catch (error) {
      // AccessToken의 유효기한이 지난 경우
      if (error.name === 'TokenExpiredError') {
        return res.status(HTTP_STATUS.UNAUTHORIZED).json({
          status: HTTP_STATUS.UNAUTHORIZED,
          message: MESSAGES.AUTH.COMMON.JWT.EXPIRED,
        });
      }
      // 그 밖의 AccessToken 검증에 실패한 경우
      else {
        return res.status(HTTP_STATUS.UNAUTHORIZED).json({
          status: HTTP_STATUS.UNAUTHORIZED,
          message: MESSAGES.AUTH.COMMON.JWT.INVALID,
        });
      }
    }

    // Payload에 담긴 사용자 ID와 일치하는 사용자가 없는 경우
    const { id } = payload;
    // const { id } = { id: 103 }
    // user테이블에서 id가 103인 유저를 찾아서 가져온다.
    const user = await prisma.user.findUnique({
      where: { id },
      omit: { password: true }, //omit = 비밀번호를 제외한다.
    });

    if (!user) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({
        status: HTTP_STATUS.UNAUTHORIZED,
        message: MESSAGES.AUTH.COMMON.JWT.NO_USER,
      });
    }
    // req 클라이언트가 보낸 객체
    /*
    req {
      url,
      method,
      user: {
        name:"정영훈",
        age: "30",
        nickname:"jyh7"
      }
    }
    */
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
