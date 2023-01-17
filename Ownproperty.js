const obj1 = {};
const obj2 = {};
obj1.num = 42;
obj2.Movie = "Iron Man 3"

console.log(obj1.hasOwnProperty('num'));

console.log(obj2.hasOwnProperty('Movie'));

console.log(obj1.hasOwnProperty('toString'));

console.log(obj1.hasOwnProperty('hasOwnProperty'));


const Heros = ['SaktiMan', 'Iron Man','Hulk', 'Super Man'];
console.log(Heros.hasOwnProperty(2) );  
console.log(Heros.hasOwnProperty(3));  
console.log(Heros.hasOwnProperty(1));  
console.log(Heros.hasOwnProperty(4));  
