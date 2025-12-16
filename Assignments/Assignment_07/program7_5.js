
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : MultipleDisplay
//  Description   : Accept number from user & print first 5 Multiplication of N
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function MultipleDisplay(iNo)
{
    if (iNo <= 0)
    {
        iNo = -iNo;
    }

    let iCnt = 0;
    for (iCnt = 1; iCnt <= 5; iCnt++)
    {
        console.log(iNo * iCnt);
    }

} // End MultipleDisplay

function main()
{
    let iValue = 4;

    MultipleDisplay(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 4
//  Output : 4  8  12  16  20
//
//  Input  : 8
//  Output : 8  16  24  32  40
//
////////////////////////////////////////////////////////////////////////////////