import Joi from 'joi';
import { MESSAGES } from '../../constants/message.constant.js';
import { MIN_RESUME_LENGTH } from '../../constants/resume.constant.js';

// 조이 오브젝트라는 메서드 이용해서 타이틀과 컨텐트를 검증할 스키마를 만든다.
const schema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': MESSAGES.RESUMES.COMMON.TITLE.REQUIRED,
  }),
  content: Joi.string().min(MIN_RESUME_LENGTH).required().messages({
    'any.required': MESSAGES.RESUMES.COMMON.CONTENT.REQUIRED,
    'string.min': MESSAGES.RESUMES.COMMON.CONTENT.MIN_LENGTH,
  }),
});

// createResumeValidator 를 진짜로 실행할 수 있는 벨리데이트 함수를 만들었다.
export const createResumeValidator = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
