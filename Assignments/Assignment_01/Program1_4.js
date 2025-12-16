
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Check
//  Description   : Program to print 5 number divisible or not
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function check(iNo)
{

    if ((iNo % 5) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
} // End Function

function main()
{
    let iValue = 5;
    let bRet = true;

    bRet = check(iValue);

    if (bRet == true)
    {
        console.log("Division by 5");
    }
    else
    {
        console.log("Not Division by 5");
    }
} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input1 : 5
//  Output : Division by 5
//
//  Input1 : 6
//  Output : Not Division by 5
//
////////////////////////////////////////////////////////////////////////////////