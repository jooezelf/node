fetch('http://192.168.0.83/HelloJSP/replyList.do?bno=145')
  .then(response => response.json())
  .then((result) => {
    console.log(result);
    // code here...
    // 댓글번호: 123
    // 댓글번호: 117
    result.filter((elem, idx, ary) => { // reply '연습' 포함된 댓글번호
      //'글등록연습'.indexOf('연습') =>
        if (elem.reply.indexOf('연습')) {
          return true;
        }
      })
      .forEach((elem) => {
        console.log("댓글번호:" + elem.replyNo);
      });

      // map (mapping)
      // A -> A'
      // {name, age, point} => {name, point}