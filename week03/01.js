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
  console.log(openBox); // Promise { <pending> } 이게 왜뜨는지? 숙제입니다.
  // 보물 상자 열기 실행
  openBox
    .then((message) => {
      console.log(message); // 성공 메시지
    })
    .catch((error) => {
      console.log(error); // 실패 메시지
    });