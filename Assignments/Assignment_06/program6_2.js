
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : ChkGreater
//  Description   : Accept number from user & check greater 100 or not
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function ChkGreater(iNo)
{
    if (iNo > 100)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main()
{
    let iValue = 101;

    let bRet = false;

    bRet = ChkGreater(iValue);

    if (bRet)
    {
        console.log(`${iValue} is Greater number`);
    }
    else
    {
        console.log(`${iValue} is Smaller number`);
    }

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 101
//  Output : 101 is Greater number
//
//  Input  : 39
//  Output : 39 is Smaller number
//
////////////////////////////////////////////////////////////////////////////////