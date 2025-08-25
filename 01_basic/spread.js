// ...args 펼침연산자
let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];

let result = [...ar1, ...ar2];

console.log(result);

let str = "abcde";
console.log(...str);

// Object Destructuring

let obj = {
  firstName: "Wonyoung",
  lastName: "Jang",
  age: 21,
};

let fn = obj.firstName;
let ln = obj.lastName;
let ag = obj.age;

let {
  firstName,
  lastName,
  age
} = obj;
console.log(firstName, lastName, age);

// Array Destructuring
let ary = [1, 2, 3];

let a = ary[0];
let b = ary[2];
let c = ary[3];

let [n1, n2, n3] = ary;

// 함수 (매개변수)
function sum(num1 = 0, num2 = 0) {
/*  if (num2 == undefined) {
    if(num1 == undefined) return 0;
    return num1;
  }*/
  let result = num1 + num2;
  return result;
}

console.log(sum() + sum(1, 1));