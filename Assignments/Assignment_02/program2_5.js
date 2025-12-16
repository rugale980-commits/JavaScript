
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Display
//  Description   : Accept number from user & check even or odd
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function CheckEven(iNo)
{

    if ((iNo % 2) == 0)
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
    let iValue = 12;
    let bRet = false;

    bRet = CheckEven(iValue);

    if (bRet == true)
    {
        console.log(`${iValue} Number is Even`);
    }
    else
    {
        console.log(`${iValue} Number is Odd`);
    }
} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 12
//  Output : 12 is Even Number
//
//  Input  : 13
//  Output : 13 is Odd Number
//
////////////////////////////////////////////////////////////////////////////////