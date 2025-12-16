
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

    for (iCnt = 1; iCnt <= iNo; iCnt++)
    {
        console.log(iCnt);
    }

} // End Display

function main()
{
    let iValue = 5;

    Display(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 5
//  Output : 1  2  3  4  5
//
//  Input  : 8
//  Output : 1  2  3  4  5  6  7  8
//
//  Input  : 4
//  Output : 1  2  3  4  
//
////////////////////////////////////////////////////////////////////////////////