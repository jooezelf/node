// [].sort()

let fruits = ['cherry', 'strawberry', 'banana'];

fruits.sort();

fruits.forEach(fruit => {
  console.log(fruit);
})

let numbers = [21, 22, 21, 18, 23, 21];
numbers.sort(function (a, b) {
  if (a < b) {
    return 1; // 위치를 변경하려면 : 양의값
  } else {
    return -1; // 위치를 유지하려면 : 음의값
  }
});

numbers.forEach((numbers) => {
  //console.log(numbers);
});

//filter()
[
  {name: "Jang", point: 90},
  {name: "Kim", point: 10},
  {name: "Rei", point: 80},
  {name: "lee", point: 370},
]
.filter((elem, idx, ary) => {
  //console.log(elem);
  if (elem > 21) { // 21보다 큰 값을 새로운 생성
    return true;
  }
}).forEach(elem => {
  console.log("이름: " + elem.name); // 이름
})