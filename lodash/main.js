// install lodash - > npm i lodash 
// document lodash https://www.npmjs.com/package/lodash
const _ = require('lodash');

//PARTITION
const intergers = [-100, -21, 1, 2, 3, 10, 18];
var isOdd = number => number % 2 != 0;

var oddNumber = _.filter(intergers, isOdd); //[ -21, 1, 3 ]
var evenNumber = _.filter(intergers, _.negate(isOdd)); //[ -100, 2, 10, 18 ]
// _.negate is function return false


var [odd, even] = _.partition(intergers, isOdd); // [ -21, 1, 3 ] [ -100, 2, 10, 18 ]
//this _.partition return parameter 1 -> tham so nhan vao, paramemter 2 -> dieu kien                                                 
//return -> (odd,even) gia tri dau return true khi thoa dieu kien, gia tri sau la khoa thoa dieu kien

// zipObject
const headers = ["id", "name", "age"];

const rows = [
    ["1", "Tung", 30],
    ["2", "Albert", 40],
    ["3", "Bennett", 60],
];
//demo map js
const newUsers = rows.map((val, index) => {
    return { key:index,value : val[2]*2};
});

// [ { key: 0, value: 60 },
//     { key: 1, value: 80 },
//     { key: 2, value: 120 } ]

const users = rows.map(row => _.zipObject(headers, row));

console.log(newUsers);
//    [ { id: '1', name: 'Tung', age: 30 },
//   { id: '2', name: 'Albert', age: 40 },
//   { id: '3', name: 'Bennett', age: 60 } ]
