// install lodash - > npm i lodash 
// document lodash https://www.npmjs.com/package/lodash
const _ = require('lodash');

var users = [
    { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
    { firstName: "John2", lastName: "Doe", age: 28, gender: "male" },

  ];
  
  var user = _.find(users, { lastName: "Doe", gender: "male" }, 1);
  //this funticon _.find(collection, [predicate=_.identity], [fromIndex=0])


  console.log(user)
  // user -> { firstName: "John", lastName: "Doe", age: 28, gender: "male" }
  
  var underAgeUser = _.find(users, function(user) {
      return user.age < 18;
  });
  // underAgeUser -> { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" }
  