// 1. 컨트롤러
// 2. 서비스
// 3. 레퍼지토리
// 서비스를 가져온다
// AuthController.js
// req, res 하기

import authService from "../services/auth.service.js";

class AuthController {
    #service;

    constructor(authService) {
        this.#service = authService
    }
    signUp = (req, res) => {
        const{email, password, name} = req.body;

        const user = this.#service.signUp({
            email,
            password,
            name,
        });
        return res.status(201).json({user, message : "회원가입 완료"});
    }
}

export default new AuthController(authService);