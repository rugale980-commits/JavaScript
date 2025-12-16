
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Display
//  Description   : Accept number from user and print * on screen reverse
//  Input         : Integer
//  Output        : *
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function Display(iNo)
{
    let iCnt = 0;

    // Updater
    if (iNo < 0)
    {
        iNo = -iNo;
    }
    while (iNo > iCnt)
    {
        console.log("*");
        iNo--;
    }
} // End Function

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
//  Output : *          
//           *                   
//           *
//           *
//           *
////////////////////////////////////////////////////////////////////////////////