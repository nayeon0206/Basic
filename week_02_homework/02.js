// myIndexOf를 구현하여 arr.indexOf와 동일한 값이 나오도록 하기.
const arr = [1, 2, 3, 4, 5];
function myIndexOf(arr, value) {
  // myIndexOf 구현
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        return i;
    }
  }
}

const index1 = arr.indexOf(3); // 2
const index2 = myIndexOf(arr, 3); // 2
console.log(index1 === index2); // true