const type = {};
type.__defineSetter__("value", function (val) {
  this.anotherValue = val;
});
type.value = 5;
console.log(type.value); 
console.log(type.anotherValue);