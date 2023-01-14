const Test1 = {};
Test1.__defineGetter__("Learning", function () {
  return 1023456;
});
console.log(Test1.Learning);

// <-------------Second Method------>

const Test = {
    get Happy() {
      return 10234579876543;
    },
  };
  console.log(Test.Happy);