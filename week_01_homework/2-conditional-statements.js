// [조건문 알아보기]

// 조건문은 프로그램의 흐름을 제어하기 위해 사용됩니다.
// 특정 조건에 따라 코드의 실행 여부를 결정할 수 있습니다.

// if문 기본 구조
/*
if (조건) {
  // 조건이 참일 때 실행되는 코드
} else {
  // 조건이 거짓일 때 실행되는 코드
}
*/

// 예시 1: if문 사용하기
const temperature = 30;

if (temperature > 25) {
  console.log('예시 1: 날씨가 덥습니다.');
} else {
  console.log('예시 1: 날씨가 시원합니다.');
}

// 예시 2: if...else if...else 문
const score = 75;

if (score >= 90) {
  console.log('예시 2: A 학점입니다.');
} else if (score >= 80) {
  console.log('예시 2: B 학점입니다.');
} else if (score >= 70) {
  console.log('예시 2: C 학점입니다.');
} else {
  console.log('예시 2: D 학점입니다.');
}

// 예시 3: 중첩 if문
const isMember = true;
const totalPrice = 50000;

if (isMember) {
  if (totalPrice >= 100000) {
    console.log('예시 3: 10% 할인 적용됩니다.');
  } else {
    console.log('예시 3: 5% 할인 적용됩니다.');
  }
} else {
  console.log('예시 3: 할인이 적용되지 않습니다.');
}

// 예시 4: switch문 사용하기
const day = 3;

switch (day) {
  case 1:
    console.log('예시 4: 월요일입니다.');
    break;
  case 2:
    console.log('예시 4: 화요일입니다.');
    break;
  case 3:
    console.log('예시 4: 수요일입니다.');
    break;
  case 4:
    console.log('예시 4: 목요일입니다.');
    break;
  case 5:
    console.log('예시 4: 금요일입니다.');
    break;
  default:
    console.log('예시 4: 주말입니다.');
}

// 예시 5: 삼항 연산자를 사용한 조건문
// let value = (조건) ? 조건이 맞으면 실행 : 조건이 틀릴때 실행;

const age = 18;
const canVote = age >= 18 ? '투표할 수 있습니다.' : '투표할 수 없습니다.';
console.log('예시 5: ' + canVote);
