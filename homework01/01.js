// 1. map 함수란?

// 일단 map함수를 알기 위해서는 "콜백함수"의 개념부터 알아야 한다.
// 1-1. 콜백함수란? : 나중에 실행하기 위해 전달된 함수!
//      쉬운 예 : "나중에 불러줄께!!"하고 약속된 함수이다.

// 1-2. 콜백 함수가 중요한 이유!!!
//    1. 동작 순서 제어 : 특정 작업이 끝난 뒤에 실행할 작업을 지정할 수 있다.
//    2. 비동기 작업 처리 : 시간이 걸리는 작업(ex : 데이터 요청, 파일읽기 등)에서 콜백을 사용해 작업을 실행 할 수 있다.

// 1-3. 기본적인 콜백 함수
function doSomething(task, callback) {
    console.log(`나는 ${task}를 하고 있어.`);
    callback(); // 함수를 받는다.
    // 작업이 끝난 후 콜백 함수를 실행
}

function afterTask() {
    console.log("작업이 끝났어!");
}

doSomething("청소", afterTask);
// doSomething 함수에서 console.log 실행 하고 그 로그 안에서 `나는 ${task}를 하고 있어.`에 task를 처리 한 뒤
// function doSomething(task, callback) 여기있는 callback이 doSomething("청소", afterTask);에 의해서
// afterTask로 실행하게 된다.

// 그러면 실행될때
// 나는 "청소"를 하고있어. 가 먼저 실행될 것이고,
// 그 뒤에 "작업이 끝났어!"가 실행 될 것이다.

// !!map 함수 설명!!
// 1-4. 배열의 각 요소를 순회하여 콜백함수를 적용한 결과를 모아 새로운 배열을 반환하는 함수!
//      각 요소를 변환하여 새로운 배열로 매핑(mapping)하는 역할을 한다
// => 쉽게 설명하자면,
// 배열의 각 요소를 가공하여 새로운 배열을 만든다.
// 원래 배열은 변경되지 않으며, 항상 새 배열이 반환된다.
// 콜백 함수의 결과가 새 배열의 요소가 된다. => "배열을 변환하는 자동화 공장"

// 예시
// 숫자 배열의 각 요소에 2를 곱하기

const number = [1, 2, 3, 4, 5];

const multiplynumber = number.map(num => num * 2);
//map 안에 들어가는건 함수

console.log(multiplynumber) // [2, 4, 6, 8, 10]
// map 함수로 number함수에 대한 배열을 찾은 다음 숫자 각각 하나씩 2를 곱해주고
// 그 결과로 [2, 4, 6, 8, 10]이라는 배열이 새로 나왔다!

// -------------------------------------------------
// 2. 연산자 ==, === 차이

// 2-1 '==' : 연산자를 이용하여 서로 다른 유형의 두 변수의 "값" 비교

// a == b 라고 한다면, a와 b의 값이 같은지를 비교해서, 같으면 true고 다르면 false

const a = 2;
const b = "2";

console.log(a==b); // true
console.log() // 한칸 띄우기
// a와 b의 "값"이 똑같아서 true가 나왔음

// 2-2 '===' : "유형" 까지! 비교하는 것 (data type) (엄격한 비교. 값도 비교하고 유형, 타입까지 비교한다.)

const c = 0;
const d = "0";

console.log(c===d); // false
console.log() // 한칸 띄우기
// c와 d의 유형(data type)이 달라서 false가 나왔음 
// c의 0은 숫자 0이고, d의 "0"은 문자열!!

// ---------------------------------------------------------
// 3. isNaN 함수란?

// 3-1. NaN : (Not a Number)의 약자, 숫자가 아님을 나타내는 숫자 데이터 타입.
// 이 함수의 반환값은 불리언 타입으로 나온다. (boolean : 참, 거짓 판별 할 때 사용)

// 값이 숫자가 아닌 경우 true를 반환, 숫자인 경우 false를 반환.

console.log(isNaN("hello")); // true (숫자가 아님)
console.log(isNaN(123));     // false (숫자)
console.log(isNaN(NaN));     // true (NaN 자체//숫자 데이터 타입.)
console.log(isNaN(undefined)); // true (숫자가 아님)
console.log() // 한칸 띄우기
// 주의 할 점!! isNaN은 주어진 값을 숫자로 반환 하려고 시도함.
console.log(isNaN("123"));  // false (문자열이지만 숫자로 변환 가능)
console.log(isNaN("123abc")); // true (숫자로 변환 불가)
console.log(isNaN(true));  // false (true는 숫자 1로 변환 가능)
// boolean이 오직 두 가지의 값만 가지기 때문
// true가 1이고 false가 0이다.
console.log() // 한칸 띄우기

// Number.isNaN() 과의 차이점!!
//ES6에서 추가된 함수이다. isNaN에서의 더 정확한 결과 검색을 위해 추가 되었다.

console.log(isNaN("123"));        // false (숫자로 변환 가능)
console.log(Number.isNaN("123")); // false (문자열은 NaN이 아님)
console.log(isNaN(NaN));          // true
console.log(Number.isNaN(NaN));   // 숫자가 아님을 나타내는 숫자 데이터 타입이기때문에 true
console.log(isNaN(undefined));    // true
// undefined라는 이 결과가 숫자로 변환 될 때 NaN 이 되기 때문에! true가 나온다. (숫자 데이터 타입이라 true가 나옴)
console.log(Number.isNaN(undefined)); // false
// Number.isNaN()은 값을 변환하지 않고 undefined가 NaN인지 엄격히 검사를 하는데,
// undefined는 숫자도 아니고 그렇다고 NaN도 아니기 때문에 false가 나온다.
console.log() // 한칸 띄우기


// 추가로 궁금했던 사항
console.log(NaN === NaN); // false (NaN은 자기 자신과 같지 않음)
// 왜 같지 않은걸까?
// IEEE 754 표준에서 정의된 NaN의 특성 중 하나는 **"NaN은 어떤 값과도 같지 않다, 심지어 자기 자신과도 같지 않다"**
// 그러한 특성때문에 false라는 값이 나왔다.
console.log() // 한칸 띄우기

// 4. includes ?
// 배열에서 includes() 함수는 배열에 "특정 요소가 포함하는지 확인하는 함수"입니다.
// 배열에서 주어진 요소가 포함되어 있으면 true를 그렇지 않으면 false를 반환합니다.

const arr = [1, 2, 3, 4, 5];

console.log(arr.includes(3)); // true
console.log(arr.includes(6)); // false
console.log() // 한칸 띄우기

// - 문자열의 대 소문자 구분에서도 사용
// 배열에서 includes() 함수는 찾는 요소가 문자열일 경우 대소문자를 구분합니다.

const words = ["apple", "banana", "orange"];

console.log(words.includes("apple")); // true
console.log(words.includes("Apple")); // false
console.log() // 한칸 띄우기

// - 문자열의 일치를 확인 할 때도 사용한다.
const words1 = ["apple", "banana", "orange"];

console.log(words1.includes("banana")); // true
console.log(words1.includes("ban")); // false
console.log() // 한칸 띄우기

// 변수도 포함하여 확인한다.

const car = "My car";
const words2 = ["apple", "banana", car];

console.log(words2.includes(car)); // true
console.log(words2.includes("My car")); // true
console.log() // 한칸 띄우기

// NaN은 자기 자신과 동등하지 않기때문에 NaN === NaN은 항상 false임 
// 배열에서는 NaN이 포함되어있는지 확인 할 수 있음

const values = [1, NaN, 3, 4, 5];
console.log(values.includes(NaN)); // true