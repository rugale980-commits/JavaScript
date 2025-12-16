
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : FindMax
//  Description   : Accept number from user & display max number
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function FindMax(a,b)
{
    if (a > b)
    {
        return a;
    }
    else
    {
        return b;
    }

} // End FindMax

function main()
{
    let num1 = 12;
    let num2 = 13;
    let result = 0;

    result = FindMax(num1, num2);

    console.log(`Maximum is : ${result}`);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 12 , 13
//  Output : Maximum is : 13
//
//
////////////////////////////////////////////////////////////////////////////////