// Level 3

// find 구현

const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myFind 를 구현하여 arr.find 와 동일한 값이 나오도록 하기.
  
  // 1. arr에 배열을 불러온다. 어떻게? 
  // 2. 배열을 불러왔는데, callback함수를 써서 찾는다!
  // 3. 찾은걸 보여준다.
  
  function myFind(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            return arr[i];
        }
    }
  }
  //find라는 메서드를 써서 표현
  const result1 = objArray.find(function (obj) {
    return obj.name === 'banana';
  }); // true
//   console.log(result1);

// 콜백함수를 써서 표현 function {} 까지 콜백함수
  const result2 = myFind(objArray, function (obj) {
    return obj.name === 'banana';
  });
//   console.log(result2);
  console.log(result1 === result2); // true

// 왜 이렇게 나오는지 숙제!!