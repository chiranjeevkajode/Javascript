// GET Prototype Of 

// TRUE

const proto1 = {};
const obj1 = Object.create(proto1);

console.log(Object.getPrototypeOf(obj1) === proto1);

// FALSE 

const proto2={};
const obj2= Object.create(proto2);
console.log(Object.getPrototypeOf(obj2) !== proto2);