// [자바스크립트 데이터 타입 알아보기]

// 자바스크립트의 데이터 타입은 총 8가지입니다.
// 1. 기본 데이터 타입(Primitive Types): Number, Bigint, String, Boolean, Undefined, Null, Symbol
// 2. 객체 타입(Object)

// 데이터를 올바르게 다루기 위해서는 데이터 타입을 이해하는 것이 중요합니다.
// 데이터 타입을 알면 변수에 어떤 값을 저장할 수 있고,
// 그 값에 어떤 작업을 수행할 수 있는지 알 수 있습니다.

// 참고 링크
// w3schools - https://www.w3schools.com/js/js_datatypes.asp
// modern javascript - https://javascript.info/types
// mdn - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// 1. 숫자(Number)
const age = 25; // 나이를 숫자로 저장합니다.
// console.log(typeof age)
// 2. BigInt
const bigNumber = 1234567890123456789012345678901234567890n; // 1. 매우 큰 정수를 저장합니다. 끝에 'n'을 붙입니다. 2. 일반 number type은 최대 15자리 정수까지만 정확히 표현

// 3. 문자열(String)
const name = '홍길동'; // 이름을 문자열로 저장합니다.

// 4. 불리언(Boolean)
const isStudent = false; // 참(true) 또는 거짓(false)을 저장합니다.

// 5. undefined
let address; // 값을 할당하지 않으면 undefined입니다.
console.log('예시 5: ', address); // undefined 출력

// 6. null
const emptyValue = null; // 값이 없음을 명시적으로 나타냅니다.
console.log('예시 6: ', emptyValue); // null 출력

// 7. 심볼(Symbol) - 고유한 식별자를 만들 때 사용합니다.
// 심볼은 실무에서 자주 사용되지는 않습니다. 주로 라이브러리나 프레임워크 개발자들이 사용하는 경우가 있습니다.
const uniqueKey = Symbol('설명');
const obj = {};
obj[uniqueKey] = '이 값은 고유한 키로 저장됩니다';
console.log('예시 7: ', obj[uniqueKey]); // '이 값은 고유한 키로 저장됩니다' 출력

// 8. 객체(Object)
// key - value
const person = {
  name: '홍길동',
  age: 25,
}; // 여러 값을 키와 값으로 저장합니다.
// console.log(person.location)
// 배열(Array)도 객체의 한 종류입니다.
const fruits = ['사과', '바나나', '포도']; // 여러 값을 순서대로 저장합니다.

// console.log(fruits[0])
// 데이터 타입 확인하기
console.log('============= 데이터 타입 확인 =============');
console.log(typeof age); // "number"
console.log(typeof name); // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof address); // "undefined"
console.log(typeof emptyValue); // "object" (null의 타입은 object로 표시됩니다.자바스크립트의 버그)
console.log(typeof person); // "object"
console.log(typeof fruits); // "object"
console.log('============= 데이터 타입 확인 종료 =============');

// 예시: 변수에 다른 데이터 타입의 값을 할당하고 출력해보기
const value = 10; // 숫자
console.log(value); // 10 출력

value = '안녕하세요'; // 문자열
console.log(value); // "안녕하세요" 출력

value = true; // 불리언
console.log(value); // true 출력

// 변수에 다양한 데이터 타입을 할당할 수 있습니다.
