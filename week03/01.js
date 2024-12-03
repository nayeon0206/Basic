const openBox = new Promise((resolve, reject) => {
    setTimeout(() => {
          const success = Math.random() > 0.5;
          if (success) {
              resolve("성공");
          } else {
              reject("실패");
          }
    }, 2000); // 2초 후에 결과 공개
  });
  // console.log(openBox); // Promise { <pending> } 이게 왜뜨는지? 숙제입니다.
  // 보물 상자 열기 실행
  openBox
    .then((message) => {
      console.log(message); // 성공 메시지
    })
    .catch((error) => {
      console.log(error); // 실패 메시지
    });

    console.log(openBox); // Promise { <pending> }???? 
    // pending 말고 다른 값을 받으려면 console.log를 어디다가 찍어야할까요?
    
    //setTimeout이 끝나기 전이므로 Promise 객체의 상태가 <pending>으로 표시
    // 이는 Promise가 아직 **완료(fulfilled)**되거나 **실패(rejected)**되지 않았음을 나타낸다.