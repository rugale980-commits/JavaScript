// Write a Program to Check Factorial of Number 

function Factorial(No)
{
    let iFact = 1;

    while(No != 0)
    {
        iFact = iFact * No;
        No--;
    }

    return iFact;
}

function main()
{
    let iValue = 5;
    let iRet = 0;

    iRet = Factorial(iValue);

    console.log(`Factorial of ${iValue} is ${iRet}`); // Important
}

main();