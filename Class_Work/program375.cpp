#include <iostream>
using namespace std;

/*
  JavaScript Syntax :

  constructor(A, B) // Parametrised
  {
    this.No1 = A;
    this.No2 = B;

    console.log("Inside Parametrised Constructor");
  }
*/

class Demo
{
public:
  int No1;
  int No2;

  Demo(int A, int B)
  {
    cout << "Inside Parametrised Constructor\n";

    this->No1 = A;
    this->No2 = B;
  }
};

int main()
{
  Demo *obj = new Demo(10, 11);

  return 0;
}