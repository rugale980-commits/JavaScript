
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Factorial
//  Description   : Accept number from user & print factorial of number
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function Factorial(iNo)
{
    let iCnt = 0;
    let iFact = 1;

    // Updater
    if (iNo <= 0)
    {
        iNo = -iNo;
    }

    for (iCnt = 1; iCnt <= iNo; iCnt++)
    {
        iFact = iFact * iCnt;
    }
    return iFact;
} // End Factorial


function main()
{
    let iValue = 5;
    let iRet = 0;

    iRet = Factorial(iValue);

    console.log(`Factorial of number is ${iRet}`);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 5
//  Output : Factorial of number is 120
//
//  Input  : -5
//  Output : Factorial of number is 120
//
//  Input  : 4
//  Output : Factorial of number is 24
//
////////////////////////////////////////////////////////////////////////////////