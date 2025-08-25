let reg = /World/g;
// reg = new RegExp("world");

let str = `123-5679-1011`

console.log(str.replace(/world/gi, "세상"));

console.log(reg.test`(str));