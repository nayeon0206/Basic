import userRepositiory from "../repositiories/user.repositiory.js";

// 1계층. 컨트롤러(서비스를 사용한다.)
// 2. 서비스 (레퍼지토리를 사용한다.)
// 3. 레퍼지토리(orm을 사용한다.)

class AuthService {
    #repository

    constructor(repository) {
        this.#repository = repository; //auth서비스 안에있는 레퍼지토리를 가져온다.
    }

    // signUp(여기 들어오는 데이터는 컨트롤러에서 들어온다)
    // signUp(회원가입을 할 때 필요한 데이터)
    signUp = async ({email, password, name}) => {
        // 레포지토리를 호출해서 회원가입을 시킨다.
        const user = await this.#repository.createUser({email, password, name});
        return user;
    }
}
export default new AuthService(userRepositiory);