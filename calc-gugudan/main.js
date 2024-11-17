// 필요한 모듈을 불러옵니다.
import readlineSync from 'readline-sync';
import chalk from 'chalk';

// 프로그램 시작
function main() {
  // 사용자로부터 입력을 받습니다.
  while (true) {
    console.log(chalk.white('원하는 기능을 선택하세요.'));
    console.log(chalk.white('1.') + chalk.green(' 계산기'));
    console.log(chalk.white('2.') + chalk.yellow(' 구구단'));
    console.log(chalk.white('0.') + chalk.red(' 종료'));

    const choice = readlineSync.question('입력: ');

    switch (choice) {
      case '1':
        console.log(chalk.green('사칙연산 계산기를 실행합니다.'));
        calculator();
        break;
      case '2':
        console.log(chalk.yellow('구구단 게임을 시작합니다.'));
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
}

// 구구단 출력 함수
function printMultiplicationTable() {
  // 여기에 코드를 작성하세요.
}

// 프로그램 실행
main();
