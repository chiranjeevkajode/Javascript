const value = prompt("Enter operation here (+,-,* or /): ");
const num1 =parseFloat (prompt("Enter first number: "));
const num2 =parseFloat (prompt("Enter second number: "));

let result;

if (value == '+') {
    result = num1 + num2;
} else if(value == '-'){
    result = num1 - num2;
}else if(value == '*'){
    result = num1 * num2;
}else{
    result = num1 / num2;
}

console.log(`${num1} ${value} ${num2} = ${result}`);