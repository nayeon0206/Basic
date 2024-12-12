// @prisma/client라는 모듈/라이브러리 -> PrismaClient Class를 가져온다.
// PrismaClient class인 이유? -> new PrismaClient(); -> PrismaClient Class구나
import { PrismaClient } from '@prisma/client';

// PrismaClient class로 생성한 객체(인스턴스)가 prisma변수에 들어간다.await
// 결국 이 과정을 거쳐서 prisma라는 db를 동작시키는 인스턴스를 얻어서 사용한다.
const prisma = new PrismaClient();

const newUser = await prisma.user.create({
  data: {
    name: "윤형근",
    gender: "남자"
  }
});

console.log(newUser);