// 1. 컨트롤러
// 2. 서비스
// 3. 레퍼지토리

import { prisma } from "../utils/prisma.util.js";

class UserRepositiory {
    #orm

    constructor(prisma) {
        this.#orm = prisma
    }

    signUp = async ({email, password, name }) => {
        const user = await this.#orm.user.create({
            data: {
                email,
                password,
                name,
            },
        });
        return user;
    }
}

export default new UserRepositiory(prisma);