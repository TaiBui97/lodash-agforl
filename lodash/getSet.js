// install lodash - > npm i lodash 
// document lodash https://www.npmjs.com/package/lodash
const _ = require('lodash');

// constructor 
    //_.get/set(object, path, [defaultValue])

var bar = {
    foo: {
        key: "foo"
    }
};
var object = {
    'a': [{
        'b': {
            'c': 3
        }
    }],
    'aa': [{
        'b': {
            'c': 6
        }
    }]
};

_.set(object, 'a[0].b.c', 4);
console.log(object.aa[0].b.c);
// => 4
_.set(object, ['x', '2', 'y', 'z'], 5);
console.log(object.x[2].y.z);
// _.set(object, ['x', '0', 'y', 'z'], 5);
// console.log(obje
// _.set(bar, "foo.items[1]", "An item");
// // bar => { foo: { key: "foo", items: ["An item"] } }
// console.log(bar)
// var name = _.get(bar, "name", "John Doe");
// // name => John Doe
// console.log(name)
// console.log(bar)
