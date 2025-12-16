
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : CheckEvenOdd
//  Description   : Accept number from user & display even or odd number
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function CheckEvenOdd(num)
{
    if (num % 2 == 0)
    {
        console.log(`It is Even Number : ${num}`);
    }
    else
    {
        console.log(`It is Odd Number : ${num}`);
    }

} // End CheckEvenOdd

function main()
{
    let number = 13;

    CheckEvenOdd(number);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 12
//  Output : It is Even Number : 12
//
//  Input  : 13
//  Output : It is Odd Number : 13
//
////////////////////////////////////////////////////////////////////////////////