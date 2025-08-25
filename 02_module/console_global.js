console.log('hello world we are ive');
console.log('hello %s', 'world we are ive')

const world = 'world';
console.log(`hello ${world}`);

console.error(new Error('에러 메세지 출력'));

const arr = [{
    name: 'Jang WonYoung',
    email: 'starship-ent@daum.net'
  },
  {
    name: 'Naoi Rei',
    email: 'starship-ent@daum.net'
  }, {
    name: 'Kim Gaeul',
    email: 'starship-ent@daum.net'
  }, {
    name: 'Lee HyeonSeo',
    email: 'starship-ent@daum.net'
  }, {
    name: 'Liz',
    email: 'starship-ent@daum.net'
  }, {
    name: 'An YuJin',
    email: 'starship-ent@daum.net'
  }
];
console.table(arr);