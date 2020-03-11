// install lodash - > npm i lodash 
// document lodash https://www.npmjs.com/package/lodash
const _ = require('lodash');

var foo = { a: "a property" };
var bar = { b: 4, c: "an other property" }

var resurlt = _.assign({},foo,bar);
var result = _.assign({ a: "an old property" }, foo, bar);

// result => { a: 'a property', b: 4, c: 'an other property' }




var array = [{
    name: 'hoo',
    isUpdated: false
  }, {
    name: 'yeah',
    isUpdated: false
  }, {
    name: 'Hello',
    isUpdated: false
  }, {
    name: 'Hello',
    isUpdated: false
  }, {
    name: 'Hello',
    isUpdated: true
  }, {
    name: 'yeahv',
    isUpdated: false
  }];

const test = (isUpdated) => {
return {isUpdated :true};
}

console.log(_.assign(array,test));

  var result = _.map(array, v => _.assign({}, v, { isUpdated: true })); // preview map : 

  console.log(JSON.stringify(result,0,4));