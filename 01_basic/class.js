// 학생 : 학번, 이름, 키, 몸무 게...
//      : 먹는다, 잔다, 공부한다 ...

let std1 = {
  stdNo: 1,
  stdName: "장원영",
  height: 173,
  eat: function (food) {
    console.log(food + "을 먹는다");
  },
  sleep(hours) {
    console.log(hours + "동안 잔다.");
  }
}

let std2 = {
  stdNo: 3,
  stdName: "레이",
  height: 169,
  eat: function (food) {
    console.log(food + "을 먹는다");
  },
  sleep(hours) {
    console.log(hours + "동안 잔다.");
  },
};
// 객체 -> 설계도
class Student {
  // 생성자
  constructor(stdNo, stdName, height) {
    this.stdNo = stdNo;
    this.stdName = stdName;
    this.height = height;
  }
  // 메소드
  eat(foot) {
    console.log(food + "를 먹는다.");
  }
  sleep(hours) {
    console.log(hours + "동안 잔다.");
  }
}

let std3 = new Student(6, "김가을", 164); // 인스턴스 생성
let std4 = new Student(4, "이현서", 165);


console.log(std1, stdNo, std1.stdName);
console.log(std2, stdNo, std2.stdName);