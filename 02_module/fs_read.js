const fs = require("fs");

fs.readFile("./sstdout.log", "utf8", (err, buf) => { // 파일읽기, 쓰기
  // callback함수 비동기방식으로 작동
  if (err) {
    console.error(err);
    return;
  }
  console.log(buf);
});
let errBuf = fs.readFileSync("./stderr.log", "utf8"); // 서버데이터 요청, 리딩시간후 different code 코드 실행

console.log(errBuf);

console.log("다른코드"); // 먼저 실행