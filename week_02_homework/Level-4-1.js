// filter 구현

const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myFilter 를 구현하여 arr.filter 와 동일한 값이 나오도록 하기.
  function myFilter(arr, callback) {
    let resultArry = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        resultArry.push(arr[i]);
      }
    }
    return resultArry;
  }
// filter 를 이용하여 price가 200 이상인 객체 filter

const result = myFilter(objArray, function(item) {
  return item.price >= 200;
});

console.log(result);