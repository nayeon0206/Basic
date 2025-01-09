import Joi from 'joi';
// Joi 라이브러리를 가져온다.
// Joi는 데이터 구조와 값을 검증하는 라이브러리로, 요청 데이터(req.body)의 유효성을 확인할 때 사용
import { MESSAGES } from '../../constants/message.constant.js';
// 플리케이션에서 사용하는 메시지 상수를 ../../constants/message.constant.js 파일을 통해 가져온다.
// 사용자 정의 오류 메시지를 설정하기 위해 사용
import { MIN_PASSWORD_LENGTH } from '../../constants/auth.constant.js';
// 비밀번호의 최소 길이를 정의한 상수를 ../../constants/auth.constant.js파일을 통해 가져온다.
// 이 값은 비밀번호 검증 규칙에서 사용

const schema = Joi.object({
   // Joi 객체를 사용하여 요청(req.body)에 대한 검증 스키마를 정의합니다.
  email: Joi.string().email().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.EMAIL.REQUIRED,
     // 이메일 필드가 요청 데이터에 포함되지 않은 경우의 오류 메시지.
    'string.email': MESSAGES.AUTH.COMMON.EMAIL.INVALID_FORMAT,
    // 이메일 형식이 잘못된 경우의 오류 메시지.
  }),
  password: Joi.string().required().min(MIN_PASSWORD_LENGTH).messages({
    'any.required': MESSAGES.AUTH.COMMON.PASSWORD.REQURIED,
    // 비밀번호 필드가 누락된 경우의 오류 메시지.
    'string.min': MESSAGES.AUTH.COMMON.PASSWORD.MIN_LENGTH,
    // 비밀번호가 설정된 최소 길이보다 짧은 경우의 오류 메시지.
  }),
  passwordConfirm: Joi.string().required().valid(Joi.ref('password')).messages({
    'any.required': MESSAGES.AUTH.COMMON.PASSWORD_CONFIRM.REQURIED,
    // 비밀번호 확인 필드가 누락된 경우의 오류 메시지.
    'any.only': MESSAGES.AUTH.COMMON.PASSWORD_CONFIRM.NOT_MACHTED_WITH_PASSWORD,
    // 비밀번호 확인이 비밀번호와 일치하지 않는 경우의 오류 메시지.
  }),
  name: Joi.string().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.NAME.REQURIED,
    // 이름 필드가 누락된 경우의 오류 메시지.
  }),
});
// 요청 데이터(req.body)에 대해 email, password, passwordConfirm, name 필드를 검증하는 스키마

export const signUpValidator = async (req, res, next) => {
  // 회원가입 요청 데이터를 검증하는 미들웨어 함수입니다.
  try {
    await schema.validateAsync(req.body);
    // 요청 본문(req.body)을 schema를 기반으로 비동기 방식으로 검증
    next();
  } catch (error) {
     // 데이터가 유효하지 않을 경우 Joi가 생성한 오류를 Express의 오류 처리기로 전달
    next(error);
  }
};
