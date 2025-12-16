
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : OddFactorial
//  Description   : Accept number from user & find Odd factorial
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function OddFactorial(iNo)
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
        if ((iCnt % 2) != 0)
        {
            iEventFactMult = iEventFactMult * iCnt;
        }
    }
    return iEventFactMult;
} // End OddFactorial

function main()
{
    let iValue = 5;
    let iRet = 0;

    iRet = OddFactorial(iValue);

    console.log(`Odd factorial of number is ${iRet}`);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 5
//  Output : Odd factorial of number is  15
//
//  Input  : -5
//  Output : Odd factorial of number is  15
//
//  Input  : 10
//  Output : Odd factorial of number is  945
//
////////////////////////////////////////////////////////////////////////////////