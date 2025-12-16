
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : CheckNumberType
//  Description   : Accept number from user & check positive,Negative or zero
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function CheckNumberType(num)
{
    if (num > 0)
    {
        console.log(`${num} is a positive number`);
    }
    else if (num < 0)
    {
        console.log(`${num} is a negative number`);
    }
    else
    {
        console.log(`${num} is zero`);
    }
} // End CheckNumberType

function main()
{
    let number = -1;

    CheckNumberType(number);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 1
//  Output : 1 is a positive number.
//
//  Input  : -1
//  Output : -1 is a negative number.
//
//  Input  : 0
//  Output : 0 is zero.
//
////////////////////////////////////////////////////////////////////////////////