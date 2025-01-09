import 'dotenv/config';
// dotenv 라이브러리를 가져온다.
// 이 라이브러리는 `.env` 파일에 정의된 환경 변수를 Node.js 애플리케이션에서 사용할 수 있도록 로드한다.
// `config` 메서드는 dotenv를 초기화하고 환경 변수를 설정

export const SERVER_PORT = process.env.SERVER_PORT;
// 환경 변수 `SERVER_PORT`를 가져와서 상수로 내보낸다.
// 서버가 실행될 포트를 지정하는 변수
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
// 환경 변수 `ACCESS_TOKEN_SECRET`를 가져와서 상수로 내보낸다.
// 이 값은 JWT(Json Web Token)를 서명하고 검증하는 데 사용되는 비밀 키

// const dotenvObj = {
//     SERVER_PORT:process.env.SERVER_PORT,
//     ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET
// }

// {SERVER_PORT, ACCESS_TOKEN_SECRET}

export default dotenvObj;