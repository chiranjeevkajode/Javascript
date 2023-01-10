function num(n){
    this.number=n;
}
num.prototype.valueOf = function(){
    return this.number;
}
const obj1 =new num (6)

console.log(obj1 + 56);