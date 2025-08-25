const crypto = require("crypto");
let pass =
  crypto.createHash('sha512').update("test1234").digest("base64");

// console.log(pass);

const createSalt = () => { // 평문을 변경하는 암호화
  return new Promise((resolve, reject) => { // 실패했을 때 받는 함수 : reject
    crypto.randomBytes(64, (err, buf) => { // 랜덤바이트값이 정상적으로 생성되면
      if (err) {
        //실패
        reject(err);
      }
      // 성공
      resolve(buf.toString("base64")); // 성공하면 buf 메소드 호출, 실패하면 catch 메소드 호출
    });
  });
};

// createSalt(); //함수 호출
// salt 값을 활용하여 평문을 암호화문으로 변경하는 방법
const createCryptoPassword = async (trPw) => { // 비동기방식으로 반환
  let salt = await createSalt(); // promise 객체로 반환
  console.log(salt);
  salt =
    "Fto+cArz5YA5xXC01it8ifTtF351UXXmFIDCdXnHgLi1Aj/gHEL7SPlIC6KuY0SgWLuqx4UkO90KhCTZ+U5HCA=="
  pw =
    "dluhBtv3+UA3HFGpex3hqKq7MOV7UNAXTkne+wZIn00ZO0yS1cu3iiMXOjoMN7ZF+e/RuDc0tgoccrnYpT/SlA=="
  crypto.pbkdf2(trPw, salt, 100000, 64, "sha512", (err, buf) => {
    if (err) {
      console.log("err=>", err);
    }
    console.log(buf.toString("base64"));
    let crPw = buf.toString("base64");
    if (pw == crPw) {
      console.log('비밀번호가 동일합니다.');
    } else {
      console.log('비밀번호가 틀렸습니다.');
    }
  });
};
createCryptoPassword("test1234");

// promise
// .then(result => {
// console.log(result);
// })
// .catch((err) => console.error(err));