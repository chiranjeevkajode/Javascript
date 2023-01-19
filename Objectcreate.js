const person = {
    Student: false,
    myIntroduction: function() {
      console.log(`Hello all my name is ${this.name}. And I am I Student? ${this.condtion}`);
    }
  };
  
  const   detail = Object.create(person);
  
  detail.name = 'Mohan'; 
  detail.condtion = true;
  
  detail.myIntroduction();