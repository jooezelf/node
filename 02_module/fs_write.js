const fs = require("fs");
// fs 모듈 불러와서 fs라는 상수에 할당
// fs.readFileSync 활용해서 stdout.log 정보를 읽어들임

fs.writeFile("./file_write.txt", 'file_log.txt', '\n하이하이\n', {
    encoding: 'utf8',
    flag: 'a'
  },
  (err) => {
    if (err) {
      console.error("예외발생");
      return;
    }
    console.log("파일생성완료");
  }
);