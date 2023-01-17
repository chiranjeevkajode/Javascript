// const obj = {};
// const arr = [];
// const arr2 = [];
// obj.test = "Hello";
// arr[0] = 243;
// arr2["hello"] = 243;


// console.log(obj.propertyIsEnumerable('test'));

// console.log(arr.propertyIsEnumerable(23));
// console.log(arr2.propertyIsEnumerable("hello"));

// console.log(arr.propertyIsEnumerable('length'));


// const obj = {};
// const arr = [];
// const arr2 = [];
// obj.test = 346;
// arr[""] = "hello";
// arr2["hello"] = 243;


// console.log(obj.propertyIsEnumerable('test'));

// console.log(arr.propertyIsEnumerable(""));
// console.log(arr2.propertyIsEnumerable("hello"));

// console.log(arr.propertyIsEnumerable('length'));

const obj1 = {
    enumerableInherited: "is enumerable",
  };
  Object.defineProperty(obj1, "nonEnumerableInherited", {
    value: "is non-enumerable",
    enumerable: false,
  });
  const obj2 = {
    __proto__: obj1,
    enumerableOwn: "is enumerable",
  };
  Object.defineProperty(obj2, "nonEnumerableOwn", {
    value: "is non-enumerable",
    enumerable: false,
  });
  
  console.log(obj2.propertyIsEnumerable("enumerableInherited"));
  console.log(obj2.propertyIsEnumerable("nonEnumerableInherited"));
  console.log(obj2.propertyIsEnumerable("enumerableOwn"));
  console.log(obj2.propertyIsEnumerable("nonEnumerableOwn"));
  