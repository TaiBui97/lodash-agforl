// install lodash - > npm i lodash 
// document lodash https://www.npmjs.com/package/lodash
const _ = require('lodash');

var ramdonIntergers = (number) => {
    return Math.round(Math.random(number)*100);
}
console.log(ramdonIntergers(199));


var result = _.times(10, ramdonIntergers);
console.log(result);
//times return arr with number in parameter 