
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : EvenFactorial
//  Description   : Accept number from user & find even factorial
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function EvenFactorial(iNo)
{
    let iCnt = 0;
    let iEventFactMult = 1;
    // Updater
    if (iNo <= 0)
    {
        iNo = -iNo;
    }

    for (iCnt = 1; iCnt <= iNo; iCnt++)
    {
        if ((iCnt % 2) == 0)
        {
            iEventFactMult = iEventFactMult * iCnt;
        }
    }
    return iEventFactMult;
} // End EvenFactorial

function main()
{
    let iValue = 5;
    let iRet = 0;


    iRet = EvenFactorial(iValue);

    console.log(`Even factorial of number is ${iRet}`);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 5
//  Output : Even factorial of number is  8
//
//  Input  : -5
//  Output : Even factorial of number is  8
//
//  Input  : 10
//  Output : Even factorial of number is  3840
//
////////////////////////////////////////////////////////////////////////////////