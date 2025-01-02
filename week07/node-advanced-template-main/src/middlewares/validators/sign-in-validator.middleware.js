import Joi from 'joi';
// joi를 불러온다.
// i는 데이터 검증(validation)을 위한 라이브러리로, 객체의 구조와 값을 정의하고 확인할 수 있다.
import { MESSAGES } from '../../constants/message.constant.js';
// 애플리케이션에서 사용하는 메시지 상수를 가져온다.
// 여기서는 인증과 관련된 오류 메시지를 사용한다.

const schema = Joi.object({
  // Joi를 사용하여 요청 본문(req.body)의 데이터 구조를 정의
  email: Joi.string().email().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.EMAIL.REQUIRED,
    // 이메일 필드가 누락되었을 때 사용할 사용자 정의 오류 메시지.
    'string.email': MESSAGES.AUTH.COMMON.EMAIL.INVALID_FORMAT,
     // 이메일 형식이 잘못되었을 때 사용할 사용자 정의 오류 메시지.
  }),
  password: Joi.string().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.PASSWORD.REQURIED,
  }),
});
// 요청(req.body)에 대해 email과 password 필드가 있는지, 올바른 형식인지 확인하는 스키마

export const signInValidator = async (req, res, next) => {
   // 로그인 요청의 유효성을 검증하는 미들웨어를 정의
  try {
    await schema.validateAsync(req.body);
    // req.body를 `schema`에 따라 비동기로 검증
    next();
  } catch (error) {
    // 데이터가 유효하지 않으면 Joi가 오류를 생성
    next(error);
  }
};
