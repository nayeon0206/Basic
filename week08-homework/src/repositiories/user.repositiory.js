import { prisma } from "../utils/prisma.util.js";

// prisma.user.create(data)
// orm이란? 데이터베이스에게 실제로 명령을 내리는 것
// 우리가 사용하는 orm은 prisma라서 import 해온 것

class UserRepository{
    #orm;
    // prisma 또는 orm이라고 넣어줘도됨
    constructor(prisma){
        this.#orm = prisma
    }

    createUser = async ({email, password, name}) => {
        const user = await prisma.user.create({
            data: {
                email,
                password,
                name,
            },
        });
        return user;
    }
}

export default new UserRepository(prisma);