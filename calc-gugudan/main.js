// 필요한 모듈을 불러옵니다.
import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { read } from 'fs';

// 프로그램 시작
function main() {
  // 사용자로부터 입력을 받습니다. // 원하는 기능 선택
  while (true) {
    console.log(chalk.white('\n원하는 기능을 선택하세요.'));
    console.log(chalk.white('\n1.') + chalk.green(' 사칙연산 계산기'));
    console.log(chalk.white('2.') + chalk.green(' 구구단 출력기 (2-9단)'));
    console.log(chalk.white('0.') + chalk.red(' 종료'));

    const choice = readlineSync.question(`Choose a number between 1 - 3 > `);

    switch (choice) {
      case '1':
        console.log(chalk.yellowBright('\n사칙연산 계산기를 실행합니다.'));
        calculator();
        break;
      case '2':
        console.log(chalk.yellowBright('\n구구단 게임을 시작합니다.'));
        printMultiplicationTable();
        break;
      case '0':
        console.log(chalk.blue('프로그램을 종료합니다.'));
        return; // 프로그램 종료
      default:
        console.log(chalk.red('올바른 선택을 하세요.'));
    }
  }
}

// 사칙연산 계산기 함수
function calculator() {
  // 여기에 코드를 작성하세요.
console.log(`\n첫 번째 숫자를 입력하세요:`);
console.log(`\n연산자를 입력하세요(+ , - , * , / ):`);
const operator = readlineSync.question('> ')
// const operator= readlineSync.question(`연산자를 선택하세요. +, -, *, / `)
console.log(`\n첫 번째 숫자를 입력해주세요:`);
const number1 = readlineSync.question('> ')
console.log(`\n두 번째 숫자를 입력해주세요:`);
const number2 = readlineSync.question('> ')

switch (operator) {
  case '+' :
    console.log(Number(number1) + Number(number2));
    break;

    case '-' :
    console.log(Number(number1) - Number(number2));
    break;

    case '*' :
    console.log(Number(number1) * Number(number2));
    break;

    case '/' :
    console.log(Number(number1) / Number(number2));
    break;

    default:
      console.log('연산자를 잘못 선택하셨습니다.');
      calculator()
      break;
}
// const num1Input = readlineSync.question('> ');
// const num1 = parseFloat(num1Input);

// if (isNaN(num1)) {
//   console.log(chalk.red('유효한 숫자를 입력해주세요.'));
//   return;
// }

// console.log(`\n연산자를 입력하세요(+ , - , * , / ):`);
// const operator = readlineSync.question('> ').trim(); //공백 제거

// if (!['+', '-', '*', '/'].includes(operator)) {
//   console.log(chalk.red('올바른 연산자를 입력해주세요 (+, -, *, /).'));
//   return;
// }

// console.log(`\n두 번째 숫자를 입력하세요:`);
// const num2Input = readlineSync.question('> ');
// const num2 = parseFloat(num2Input);


// if (isNaN(num2)) {
//   console.log(chalk.red('유효한 숫자를 입력해주세요.'));
//   return;
// }

// let result;
// switch (operator) {
//   case '+':
//     result = num1 + num2;
//     break;
//   case '-':
//     result = num1 - num2;
//     break;
//   case '*':
//     result = num1 * num2;
//     break;
//   case '/':
//     if (num2 === 0) {
//       console.log(chalk.red('0으로 나눌 수 없습니다.'));
//       return;
//     }
//     result = num1 / num2;
//     break;
// }

// console.log(chalk.yellow(`\n계산 결과: ${num1} ${operator} ${num2} = ${result}`));
// console.log(); // 한칸 띄우기
}

// 구구단 출력 함수
function printMultiplicationTable() {
  console.log(`출력할 구구단의 숫자를 입력하세요 :`);
const number = parseFloat(readlineSync.question('>'));

// if(isNaN(number)|| number < 2 || number > 9) {
//   console.log(chalk.red(`2 에서 9 사이의 숫자를 입력해주세요!`));
//   return;
}
console.log(chalk.yellowBright(`\n구구단 ${i}단 :`))
// for (let i = 1; i<=9; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }
// console.log(); //한칸 띄우기
// }

for (let i = 1; i<=9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 프로그램 실행
main();
