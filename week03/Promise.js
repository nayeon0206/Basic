// 1. 보물 상자를 여는 Promise 함수를 만들어보세요.
// 2. 함수는 다음 조건을 만족해야 합니다:
//     1. 함수 이름은 findTreasure로 합니다.
//     2. 3초 동안 보물을 찾는 작업을 시뮬레이션합니다.
//     3. **10% 확률**로 성공하고, 90% 확률로 실패합니다.
//     4. 성공(resolve) 시 “축하합니다! 황금 보물을 발견했습니다!” 메시지를 반환.
//     5. 실패(reject) 시 “보물을 찾는 데 실패했습니다. 다시 시도하세요.” 메시지를 반환.
// 3. findTreasure를 호출한 뒤 .then()과 .catch()를 사용하여 성공과 실패 메시지를 출력하세요.
// 4. then, catch를 try/catch, async/await로 변경해보기. (이 부분은 스스로 공부해보세요!)


//함수 이름은 findTreasure로 합니다.
function findTreasure() {
    return new Promise((resolve, reject) => { //Promise를 반환해줘야 하기때문에 return을 쓴다.
    setTimeout(() => {
        //**10% 확률**로 성공하고, 90% 확률로 실패
        const success = Math.random() < 0.1;
        if (success) {
            resolve(`축하합니다! 황금 보물을 발견했습니다!`); //성공시 반환
        } else {
            reject(`보물을 찾는 데 실패했습니다. 다시 시도해주세요.`); //실패시 반환
        }
    },3000); // 3초 동안 보물을 찾는 작업
});
}

//findTreasure를 호출한 뒤 .then()과 .catch()를 사용하여 성공과 실패 메시지를 출력

findTreasure()
.then((message) => console.log(message))
.catch((error) => console.log(error));


// try/catch, async/await로 변경해보기

// async 키워드가 붙은 함수 안에서만 await을 사용할 수 있다.
async function Treasure() {
// try? await findTreasure() 를 호출하여 Promise가 성공(resolve)하면 반환되는 message 출력
    try {
        const message = await findTreasure(); // findTreasure()의 성공 결과를 기다림
        console.log(message); // 성공 시 메시지 출력
// catch? findTreasure()가 실패(reject)하면 catch 블록이 실행되면 error 메시지가 출력된다.
    } catch (error) {
        console.log(error); // 실패 시 메시지 출력
    }
}

// 함수 호출
Treasure();

//async 함수 함수에 async 키워드를 붙이면, 그 함수는 항상 Promise를 반환
// async 함수 내부에서는 await 키워드를 사용해 Promise가 해결될 때까지 기다릴 수 있다.

// try는 에러가 발생할 가능성이 있는 코드 블록을 감싼다.
// await findTreasure()는 findTreasure 함수의 작업이 완료될 때까지 기다린다.
// findTreasure() 함수가 실패(reject)하면, catch 블록이 실행, 실패한 경우의 에러 메시지를 처리

// try/catch와 await를 사용하면 동기 코드처럼 읽혀 직관적
// await이 비동기 작업이 끝날때까지 기다린다.
//catch 블록에서 실패 상황을 명확히 처리할 수 있다.

//동기와 비동기

// 동기 : 작업이 순차적으로 진행되는 방식
// 한 작업이 끝나야 다음 작업이 실행
// 모든 작업이 차레대로 실행되기때문에 코드 흐름은 간단하지만, 작업이 오래걸리면 전체 프로그램이 멈춘다.

// 비동기: 작업이 시작된 후 결과를 기다리지 않고 다음 작업을 실행할 수 있는 방식
// 결과를 기다리는 동안 다른 작업을 처리 할 수 있어 효율적
// 작업 완료 시점에 콜백, Promise, async/await 등을 사용해 결과를 처리