import Joi from 'joi';
import { MESSAGES } from '../../constants/message.constant.js';
import { MIN_RESUME_LENGTH } from '../../constants/resume.constant.js';

// 요청(req.body)의 구조를 검증하기 위한 Joi 스키마 정의.
const schema = Joi.object({
  title: Joi.string(),
  content: Joi.string().min(MIN_RESUME_LENGTH).messages({
    'string.min': MESSAGES.RESUMES.COMMON.CONTENT.MIN_LENGTH,
    // `content` 필드의 길이가 최소값(MIN_RESUME_LENGTH)보다 짧을 경우 반환할 사용자 정의 오류 메시지.
  }),
})
  .min(1)
  .messages({
    'object.min': MESSAGES.RESUMES.UPDATE.NO_BODY_DATA,
     // 요청 본문(req.body)에 최소 하나의 필드가 없을 경우 반환할 사용자 정의 오류 메시지.
  });

export const updateResumeValidator = async (req, res, next) => {
   // 이력서 업데이트 요청 데이터를 검증하기 위한 미들웨어 함수.
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
