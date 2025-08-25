// import process from 'process';
// import os from "os";
// import path from 'path'

const path = require("path");

console.log(__filename); // D:/git/node/02_module/process_exe.js
console.log(__dirname); // D:/git/node/02_module

console.log(path.basename(__filename)); // process_exe.js
console.log(path.basename(__dirname)); // 02_module

// console.log(process.env.JAVA_HOME); // process 모듈이 가지고있는 env를 출력 // env에서 JAVA_HOME을 확인

let result = path.format({
  dir: "C:/Users/admin",
  base: ".gitconfig"
});
result = path.parse("C:/Users/admin/.gitconfig");
console.log(result);