//reduce

// 숫자만 있는 배열의 경우
const arr = [1, 2, 3, 4, 5];
const reduced = arr.reduce(function (prev, current) {
  return prev + current;
}, 0);
console.log(reduced); // 15