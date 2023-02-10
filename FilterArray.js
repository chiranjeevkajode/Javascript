const age = [19,22,15,25,16,17];
const result = age.filter(checkAge);

function checkAge(age) {
    return age>= 18;
}
console.log(result);