// 1. 컨트롤러
// 2. 서비스
// 3. 레퍼지토리
// 서비스 단계에서 레퍼지토리를 가져온다.
// AuthService클래스 생성하기
// 회원가입 하는 함수 생성
// 그 안에서 userRepositiory 인스턴스를 사용하면됨

import userRepositiory from "../repositiories/user.repositiory.js";

class AuthService {
    #repositiory

    constructor(userRepositiory) {
        this.#repositiory = userRepositiory
    }

    signUp = async({email, password, name }) => {
        const user = await this.#repositiory.signUp({
            email,
            password,
            name,
        });
    return user;
    };
}
export default new AuthService(userRepositiory);