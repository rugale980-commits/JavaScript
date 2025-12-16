
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : FactorialDiff
//  Description   : Accept number from user & Diff between Even or Odd factorial
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function FactorialDiff(iNo)
{
    let iCnt = 0;
    let iEventFactMult = 1;
    let iOddFactorial = 1;
    let iDiffer = 0;

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
        else
        {
            iOddFactorial = iOddFactorial * iCnt;
        }
    }

    iDiffer = iEventFactMult - iOddFactorial;
    return iDiffer;
} // End FactorialDiff

function main()
{
    let iValue = 5;
    let iRet = 0;

    iRet = FactorialDiff(iValue);

    console.log(`factorial Diffrence ${iRet}`);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 5
//  Output : -7
//
//  Input  : -5
//  Output : -7
//
//  Input  : 10
//  Output : 2895
//
////////////////////////////////////////////////////////////////////////////////