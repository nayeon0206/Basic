// [함수 연습 문제]

// 문제 1: 두 숫자를 더하는 함수를 작성하고 결과를 출력하세요.

function add(a,b) {
    return a+b;
}

function add(number1,number2) {
    return number1+number2
}

console.log(add(23, 24))

// 문제 2: 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수를 작성하세요.

function meet(name){
 console.log(`안녕하세요. ${name}님!`)
}

meet("나연");
// 문제 3: 세 개의 숫자 중 가장 큰 수를 반환하는 함수를 작성하세요.
//Math.max함수를 이용하여 가장 큰 수 찾기.
function maxNum(a, b, c) {
    return Math.max(a, b, c)
}

console.log(maxNum(1, 12, 20));

function returnMaxValue(number1, number2, number3) {
    let max = number1;

    if (number2 > max) {
        max = number2;
    }
    if (number3 > max) {
        max = number3;
    }

    return max;
}
console.log(returnMaxValue(10,100,120));

// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.

function check(number) {
    if(number % 2 == 0) {
        return `${number}는 짝수입니다.`;
    }else {
        return `${number}는 홀수입니다.`;
    }
}
// 함수 호출 및 출력
console.log(check(4));
console.log(check(9));
// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.

function print(array) {
   for(let i = 0; i < array.length; i++){
    console.log(array[i])};
}

print(["감자", "고구마", "옥수수"]);