
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Display
//  Description   : Accept number from user & print till that number
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function Display(iNo)
{
    let iCnt = 0;

    for (iCnt = -iNo; iCnt <= iNo; iCnt++)
    {
        console.log(iCnt);
    }

} // End Display

function main()
{
    let iValue = 4;

    Display(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 4
//  Output : -4  -3  -2  -1  0  1  2  3  4
//
////////////////////////////////////////////////////////////////////////////////