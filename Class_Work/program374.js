// SyntaxError: A class may only have one constructor
// Not Allowed

class Demo
{
  constructor() // Default
  {
    this.No1 = 0;
    this.No2 = 0;

    console.log("Inside Default Constructor");
  }

  constructor(A, B) // Parametrised
  {
    this.No1 = A;
    this.No2 = B;

    console.log("Inside Parametrised Constructor");
  }
}

function main()
{
  let obj1 = new Demo();
  let obj2 = new Demo(10,20);

  console.log(obj1.No1);
  console.log(obj1.No2);

  console.log(obj2.No1);
  console.log(obj2.No2);
  
}

main();