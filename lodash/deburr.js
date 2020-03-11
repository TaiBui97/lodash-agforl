// install lodash - > npm i lodash 
// document lodash https://www.npmjs.com/package/lodash
const _ = require('lodash');

//this function return value string
//contrucstor _.deburr([string=''])

_.deburr("déjà vu");
// -> deja vu
_.deburr("Juan José");
// -> Juan Jose