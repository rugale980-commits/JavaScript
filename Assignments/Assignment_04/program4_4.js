
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : SumNonFact
//  Description   : Accept number from user & display Non factors Summation
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function SumNonFact(iNo)
{
    let iCnt = 0;
    let iSum = 0;

    for (iCnt = 1; iCnt <= iNo; iCnt++)
    {
        if (iNo % iCnt != 0)
        {
            iSum = iSum + iCnt;
        }
    }
    return iSum;
} // End SumNonFact

function main()
{
    let iValue = 12;
    let iRet = 0;

    iRet = SumNonFact(iValue);

    console.log(iRet);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 12
//  Output : 50
//
//  Input  : 13
//  Output : 77
//
//  Input  : 10
//  Output : 37
//
////////////////////////////////////////////////////////////////////////////////