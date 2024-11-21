// find

// 숫자만 있는 배열의 경우
const arr = [1, 2, 3, 4, 5];
const found = arr.find(function (value) {
  return value === 3;
});
console.log(found); // 3

// 오브젝트 배열의 경우
const objArray = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 200 },
  { name: 'grape', price: 300 },
]
const found = objArray.find(function (item) {
  return item.name === 'banana';
});
console.log(found); // { name: 'banana', price: 200 }

// findIndex

// 숫자만 있는 배열의 경우
const arr = [1, 2, 3, 4, 5];
const foundIndex = arr.findIndex(function (value) {
  return value === 3;
});
console.log(foundIndex); // 2

// 오브젝트 배열의 경우
const objArray = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 200 },
  { name: 'grape', price: 300 },
]
const foundIndex = objArray.findIndex(function (item) {
  return item.name === 'banana';
});
console.log(foundIndex); // 1

