function Animal(name){
    this.name=name;
}

const Animal1= new Animal("dog");
Animal.prototype.toString = function(){
    return `${this.name}`;
}
console.log(Animal1.toString());