// filter

// 숫자만 있는 배열의 경우
const arr = [1, 2, 3, 4, 5];
const filtered = arr.filter(function (value) {
  return value % 2 === 1;
});
console.log(filtered); // [1, 3, 5]

// 오브젝트 배열의 경우
const objArray = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 200 },
  { name: 'grape', price: 300 },
]
const objFiltered = objArray.filter(function (item) {
  return item.price < 300;
});
console.log(objFiltered); // [{ name: 'apple', price: 100 }, { name: 'banana', price: 200 }]

// map
// 숫자만 있는 배열의 경우
const arr = [1, 2, 3, 4, 5];
const maped = arr.map(function (value) {
  return value * 2;
});
console.log(maped); // [2, 4, 6, 8, 10]

// 오브젝트 배열의 경우
const objArray = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 200 },
  { name: 'grape', price: 300 },
]
const objMaped = objArray.map(function (item) {
  return item.name;
});
console.log(objMaped); // ['apple', 'banana', 'grape']