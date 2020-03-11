// install lodash - > npm i lodash 
// document lodash https://www.npmjs.com/package/lodash
const _ = require('lodash');

//constuctor _.reduce(collection, [iteratee=_.identity], [accumulator])
// collection (Array|Object): The collection to iterate over.
// [iteratee=_.identity] (Function): The function invoked per iteration.
// [accumulator] (*): The initial value.

var users = [{
        name: "John",
        age: 30
    },
    {
        name: "Jane",
        age: 28
    },
    {
        name: "Bill",
        age: 65
    },
    {
        name: "Emily",
        age: 17
    },
    {
        name: "Jack",
        age: 30
    }
]

var reducedUsers = _.reduce(users, function (result, user, key) {
    if (user.age >= 18 && user.age <= 59) {
        (result[user.age] || (result[user.age] = [])).push(user, key);
    }

    return result;
}, {});
console.log(reducedUsers)
// reducedUsers -> { 
//     28: [{ name: "Jane", age: 28 }], 
//     30: [{ name: "John", age: 30 }, { name: "Jack", age: 30 }] 
// }
console.log(
    _.reduce({
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 3
    }, function (result, value, key) {
        (result[value] || (result[value] = [])).push(key);
        return result;
    }, {}));
//// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)

arr.reduce((a, b) => {
    a[b] = b * b;
    return a
}, {})
