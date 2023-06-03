const l= require('lodash');
let arr=[1,[2]];
const newarr=l.flattenDeep(arr);
console.log(newarr);
