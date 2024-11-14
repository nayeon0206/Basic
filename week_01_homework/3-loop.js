// [반복문 알아보기]

// 반복문은 동일한 코드를 여러 번 실행하고자 할 때 사용합니다.

// 예시 1: for문 사용하기
for (let i = 1; i <= 5; i++) {
    console.log('예시 1: ' + i + '번째 반복입니다.');
  }
  
  // 예시 2: 배열과 for문
  const animals = ['강아지', '고양이', '토끼'];
  
  for (let i = 0; i < animals.length; i++) {
    console.log('예시 2: 동물 - ' + animals[i]);
  }
  
  // 예시 3: while문 사용하기
  const count = 5;
  
  while (count > 0) {
    console.log('예시 3: 카운트다운 - ' + count);
    count--;
  }
  
  // 예시 4: do...while문 사용하기
  // do 에 있는것이 무조건 실행됨
  // 거의 사용을 안함
  // 무조건 한번은 출력됨
  const num = 0;
  
  do {
    console.log('예시 4: 숫자 - ' + num);
    num++;
  } while (num < 3);
  
  // 예시 5: for...of 문 사용하기

  // 배열에 있는것도 뽑아낼 수 있음
  // 빨강, 초록, 파랑이 각각 한번씩 세번찍힘
  // 배열 안에 있는것들이 실행되기때문에 ..!
  const colors = ['빨강', '초록', '파랑'];
  
  for (const color of colors) {
    console.log('예시 5: 색상 - ' + color);
  }
  
  // 예시 6: for...in 문 사용하기
  // key - value 이기때문에 객체다.
  const student = {
    name: '김철수',
    age: 20,
    major: '컴퓨터공학',
  };
  // key는 이름을 마음대로 써도된다.
  for (const key in student) {
    console.log('예시 6: ' + key + ' - ' + student[key]);
  }
  
  // const key = "name"
  // const key123 = "name"