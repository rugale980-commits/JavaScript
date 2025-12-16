
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : OddDisplay
//  Description   : Accept number from user & print odd number up to N
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function OddDisplay(iNo)
{
    if (iNo <= 0)
    {
        iNo = -iNo;
    }

    let iCnt = 0;
    for (iCnt = 1; iCnt <= iNo; iCnt = iCnt + 2)
    {
        if (iCnt % 2 != 0)
        {
            console.log(iCnt);
        }
    }
} // End OddDisplay

function main()
{
    let iValue = 18;

    OddDisplay(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 18
//  Output : 1   3     5    7     9     11    13    15    17
//
//  Input  : 4
//  Output : 1     3
//
////////////////////////////////////////////////////////////////////////////////