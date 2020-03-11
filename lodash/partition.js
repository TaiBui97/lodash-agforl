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