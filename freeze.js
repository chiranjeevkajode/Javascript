const obj = {
    prop: 32
  };
  
  Object.freeze(obj);
  
  obj.prop = 97;
  
  console.log(obj.prop);
  