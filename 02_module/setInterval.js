const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let count = 100;  // count: 100 -> 0 1씩 감소
let timeOver = false;
setInterval(() => {
  count--;
  //  console.log(`현재 count: ${count}`);
}, 1000);

let wordAry = "Lorem ipsum dolor sit amet"
  .split(" ");

//if (wordAry.length == 0) {
// break;
// }
// }

function myFunction() { // 함수생성
  // 100이 완료 전 배열의 값을 clear하면 성공
  // 100이 완료 후 배열의 값이 존재시 실패
  if (count < 0) {
    rl.close(); // stream 사용후 close();
  }
  rl.question("단어를 입력하세요.",
    function (answer) { //answer 매개변수, 함수내에서만 사용할 수 있는 변수
      let search = answer; // 함수내에서 answer를 search
      let idx = wordAry.indexOf(search); // indexOF(**) **를 찾음 , 
      wordAry.splice(idx, 1); // idx를 삭제
      wordAry.forEach((word) => {
        console.log(word);
      });
      myFunction(); // 함수사용
    })
}
myFunction(); // 함수실행