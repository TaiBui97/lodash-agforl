const _ = require("lodash");

// overSome | overEvery
const users = [
  { id: "1", name: "Tung", twitter: "tung__vu" },
  { id: "2", name: "Daniel", twitter: "dan_abramov" },
  { id: "3", name: "Andrew Clark", twitter: "acdlite" },
  { id: "4", name: "Elon", twitter: "elonmusk" },
];

const hasShortName = user => user.name.length <= 4;
const hasLodashInHandle = user => /_/.test(user.twitter); //loc nhung  user co twiter chua ki tu lodash _

const AND = _.overEvery([hasShortName, hasLodashInHandle]); // return true when 2 condition true
const OR = _.overSome([hasShortName, hasLodashInHandle]); // return true when 1 or 2 condition true

console.log(users.filter(AND));