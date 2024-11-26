// 함수 선언식
//       함수 이름(매개변수)
// ``은 템플릿 리터럴 문자열 보간( ${} 이 안의 값으로 대체하겠다.)
function sayHello(name) {
    console.log(`Hello, ${name}!`);
  }
  //함수 호출 / 실행
  sayHello('Alice'); // "Hello, Alice!"
  

  // 함수 표현식
  // 함수를 변수로 받을 수 있다.
  const sayHello = function(name) {
    console.log(`Hello, ${name}!`);
  };
  
  sayHello('Bob'); // "Hello, Bob!"


  // 화살표 함수
  // function -> '=>'
const sayHello = (name) => {
    console.log(`Hello, ${name}!`);
  };
  
  sayHello('Charlie'); // "Hello, Charlie!"

//   매개변수가 하나 일 때 괄호 생략 가능

  const greet = name => {
    console.log(`Hi, ${name}!`);
  }
  greet('David'); // "Hi, David!"

//   단일 표현식은 중괄호와 return 생략 가능

  const square = x => x * x;
  // {return x * x}; 와 같다.
console.log(square(4)); // 16
// square = (x) => x * x;

