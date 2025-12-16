
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Accept
//  Description   : Accept number from user and print * on screen
//  Input         : Integer
//  Output        : *
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function Accept(iNo)
{
    let iCnt = 0;

    for (iCnt = 1; iCnt <= iNo; iCnt++)
    {
        console.log("*");
    }
} // End Function

function main()
{

    let iValue = 5;

    Accept(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 5          Input  : 2
//  Output : *          Output : *
//           *                   *
//           *
//           *
//           *
////////////////////////////////////////////////////////////////////////////////