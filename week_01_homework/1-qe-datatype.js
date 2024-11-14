// [데이터 타입 연습 문제]

// 문제 1: 자신의 이름과 나이를 변수에 저장하고 출력하세요.
const name = "강나연"
const age = 28


console.log(name);
console.log(age);

// 문제 2: 불리언 값을 저장하는 변수를 만들고 출력하세요.

const i = true;

console.log(i)

// 문제 3: null과 undefined의 차이를 콘솔로 확인하세요.
// 힌트:
// var undefinedVar;
// var nullVar = null;
// 두 변수를 console.log로 출력하고, typeof 연산자를 사용하여 타입을 확인해보세요.

let a;
console.log(a) // 값을 할당하지 않아 undefined가 뜸

let b = null;
console.log(b) // null로 값을 할당하여 null이 나옴

// 문제 4: 좋아하는 음식 3가지를 배열에 저장하고 첫 번째 음식을 출력하세요.
const food = ['떡볶이', '김밥', '라면'];

console.log(food[0]);
// 첫번째 음식 (배열 순서 : 0, 1, 2 이다. 따라서 첫 번째 음식을 출력할 때는 0을 써준다.)

// 문제 5: 사람의 정보를 객체로 만들어 이름과 나이를 저장하고 출력하세요.
 const person1 = ['강나연', 28];

 console.log(person1);