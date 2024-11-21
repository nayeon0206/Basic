// forEach

const arr = [1, 2, 3, 4, 5];

arr.forEach(function (value) {
  console.log(value);
});

// indexOf

const arr = [1, 2, 3, 4, 5];

const foundIndex = arr.indexOf(3);
console.log(foundIndex); // 2

// includes
const arr = [1, 2, 3, 4, 5];

let isIncludes = arr.includes(3);
console.log(isIncludes); // true
isIncludes = arr.includes(6);
console.log(isIncludes); // false