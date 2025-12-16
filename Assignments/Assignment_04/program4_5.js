
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

function FactDiff(iNo)
{
    let iCnt = 0;
    let iSumFact = 0;
    let iSumNonFact = 0;

    for (iCnt = 1; iCnt <= iNo; iCnt++)
    {
        if (iNo % iCnt == 0)
        {
            iSumFact = iSumFact + iCnt;
        }
        else
        {
            iSumNonFact = iSumNonFact + iCnt;
        }
    }
    return (iSumFact - iSumNonFact);
} // End FactDiff

function main()
{
    let iValue = 10;
    let iRet = 0;

    iRet = FactDiff(iValue);

    console.log(iRet);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 13
//  Output : -63
//
//  Input  : 10
//  Output : -19
//
////////////////////////////////////////////////////////////////////////////////