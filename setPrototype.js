function man(name, level) {
    this.name = name;
    this.level = level;
  }
  
  function SuperHero(name, level) {
    man.call(this, name, level);
  }
  
  console.log(Object.setPrototypeOf(SuperHero.prototype, man.prototype));

  Object.setPrototypeOf(SuperHero.prototype, man.prototype);


  man.prototype.speak = function () {
    return `${this.name} Hello All.`;
  };
  
  SuperHero.prototype.fly = function () {
    return `${this.name} How are You.`;
  };
  
  const superMan = new SuperHero("Its for all", 1);
  
  console.log(superMan.speak());
  console.log(superMan.fly());
