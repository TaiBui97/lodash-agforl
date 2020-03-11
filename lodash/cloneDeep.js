// install lodash - > npm i lodash 
// document lodash https://www.npmjs.com/package/lodash
const _ = require('lodash');

var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects);
console.log(deep, objects)
console.log(deep[0] == objects[0]);
// => false



// this funticon return new value dont change orginal value
// for eg: 

var original = { foo: "bar" };
var copy = original;
copy.foo = "new value";
console.log(copy.foo === original.foo)
// // copy -> { foo: "new value" } Yeah!
// original -> { foo: "new value" } Oops!

var original = { foo: "bar" };
var copy = _.cloneDeep(original);
copy.foo = "new value";
console.log(copy.foo === original.foo)
// copy -> { foo: "new value" } Yeah!
// original -> { foo: "bar" } Yeah!