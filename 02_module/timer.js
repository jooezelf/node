setTimeout(() => {
  console.log("아이브는 6년후에 해체합니다.");
}, 3000);

const interval = setInterval(() => {
    console.log("잘 하면 60년 후에 해체할지도..");
  },
  5000);

setTimeout(() => {
  clearInterval(interval);

}, 5000);

setImmediate(() => {
  console.log("아이브는 언제 해체하나요?"); // 이벤트루프 stack에 작업을 완료
  // queue에 작업 실행전 실행
});

let sum = 0;
for (let i = 0; i < 999999; i++) {
  sum += i;
}
console.log("sum=>" + sum);