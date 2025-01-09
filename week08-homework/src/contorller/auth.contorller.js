import authService from "../services/auth.service.js";

// 컨트롤러
// 서비스
// 레퍼지토리

class Authcontroller {
    #service

    constructor(service) {
        this.#service = service;
    }

    signUp = async (req, res) => {
        const { email, password, name } = req.body;
        const user = await this.#service.signUp({email, password, name})
        return res.status(201).json({
            message : '회원가입 성공',
            user,
        });
    }
}

export default new Authcontroller(authService);