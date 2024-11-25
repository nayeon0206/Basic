// map 구현
const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myMap를 구현하여 arr.map과 동일한 값이 나오도록 하기.
  function myMap(arr, callback) {
    let mymap = [];
    // myMap 구현
    for(let i = 0; i < arr.length; i++) {
     mymap.push(callback(arr[i]));
    }
    return mymap;
  }

const result = myMap(objArray, function(item) {
  item.price = item.price * 2;
  return item;
});

console.log(result);