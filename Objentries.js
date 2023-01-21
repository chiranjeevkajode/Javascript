const object1 = {
    a: 'Lorem',
    b: 16
  };
  
  for (const [val1, val2] of Object.entries(object1)) {
    console.log(`${val1}: ${val2}`);
  }