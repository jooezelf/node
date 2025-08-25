fetch('http://192.168.0.83/HelloJSP/mock.json')
  .then(response => response.json())
  .then(data => {
    //console.log(data); // A -> A
    data.map((elem) => {
      // fn, ln => name
      const newELem = {
        no: elem.id,
        name: elem.first_name + '/' + elem.last_name,
        email: elem.email,
        salary: elem.salary,
      };
      return newELem;
    }).forEach((elem) => console.log(elem.name));
  })
  .catch(console.log);