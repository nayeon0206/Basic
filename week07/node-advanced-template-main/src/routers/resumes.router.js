import express from 'express';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { createResumeValidator } from '../middlewares/validators/create-resume-validator.middleware.js';
import { prisma } from '../utils/prisma.util.js';
import { updateResumeValidator } from '../middlewares/validators/update-resume-validator.middleware.js';

const resumesRouter = express.Router();

// 이력서 생성
resumesRouter.post('/', createResumeValidator, async (req, res, next) => {
  try {
    const user = req.user;
    const { title, content } = req.body;
    const authorId = user.id;

    const data = await prisma.resume.create({
      data: {
        authorId,
        title,
        content,
      },
    });

    return res.status(HTTP_STATUS.CREATED).json({
      status: HTTP_STATUS.CREATED,
      message: MESSAGES.RESUMES.CREATE.SUCCEED,
      data,
    });
  } catch (error) {
    next(error);
  }
});

// 이력서 목록 조회
resumesRouter.get('/', async (req, res, next) => {
  try {
    const user = req.user;
    const authorId = user.id;

    let { sort } = req.query;

    sort = sort?.toLowerCase();

    if (sort !== 'desc' && sort !== 'asc') {
      sort = 'desc';
    }

    let data = await prisma.resume.findMany({
      where: { authorId },
      orderBy: {
        createdAt: sort,
      },
      include: {
        author: true,
      },
    });

    data = data.map((resume) => {
      return {
        id: resume.id,
        authorName: resume.author.name,
        title: resume.title,
        content: resume.content,
        status: resume.status,
        createdAt: resume.createdAt,
        updatedAt: resume.updatedAt,
      };
    });

    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.READ_LIST.SUCCEED,
      data,
    });
  } catch (error) {
    next(error);
  }
});

// 이력서 상세 조회
resumesRouter.get('/:id', async (req, res, next) => {
  try {
    const user = req.user;
    const authorId = user.id;

    const { id } = req.params;

    let data = await prisma.resume.findUnique({
      where: { id: +id, authorId },
      include: { author: true },
    });

    if (!data) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        status: HTTP_STATUS.NOT_FOUND,
        message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
      });
    }

    data = {
      id: data.id,
      authorName: data.author.name,
      title: data.title,
      content: data.content,
      status: data.status,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.READ_DETAIL.SUCCEED,
      data,
    });
  } catch (error) {
    next(error);
  }
});

// 이력서 수정
resumesRouter.put('/:id', updateResumeValidator, async (req, res, next) => {
  try {
    const user = req.user;
    const authorId = user.id;

    const { id } = req.params;

    const { title, content } = req.body;

    let existedResume = await prisma.resume.findUnique({
      where: { id: +id, authorId },
    });

    if (!existedResume) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        status: HTTP_STATUS.NOT_FOUND,
        message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
      });
    }

    const data = await prisma.resume.update({
      where: { id: +id, authorId },
      data: {
        ...(title && { title }),
        ...(content && { content }),
      },
    });

    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.UPDATE.SUCCEED,
      data,
    });
  } catch (error) {
    next(error);
  }
});

// 이력서 삭제
resumesRouter.delete('/:id', async (req, res, next) => {
  try {
    const user = req.user;
    const authorId = user.id;

    const { id } = req.params;

    let existedResume = await prisma.resume.findUnique({
      where: { id: +id, authorId },
    });

    if (!existedResume) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        status: HTTP_STATUS.NOT_FOUND,
        message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
      });
    }

    const data = await prisma.resume.delete({ where: { id: +id, authorId } });

    return res.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: MESSAGES.RESUMES.DELETE.SUCCEED,
      data: { id: data.id },
    });
  } catch (error) {
    next(error);
  }
});

export { resumesRouter };
