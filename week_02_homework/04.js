//forEach 구현

const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myForEach 를 구현하여 arr.forEach 와 동일한 값이 나오도록 하기.
  function myForEach(arr, callback) {
    // myForEach 구현
    for(let i = 0; i < arr.legnth; i++) {
        callback(arr[i]);
    }
  }
  
  /**
  { name: 'apple', price: 100 }
  { name: 'banana', price: 200 }
  { name: 'grape', price: 300 }
   */
  objArray.forEach(function (obj) {
    console.log(obj);
  });
  
  myForEach(objArray, function (obj) {
    console.log(obj);
  });
  