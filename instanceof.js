function clg(student, grade, year) {
    this.make = student;
    this.model = grade;
    this.year = year;
  }
  const auto = new clg('mohan', 89, 2023);
  
  console.log(auto instanceof clg);
  
  console.log(auto instanceof Object);