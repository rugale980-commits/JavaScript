
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : ChkEqual
//  Description   : Accept number from user & check Equql or not equal
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function ChkEqual(iNo1, iNo2)
{
    if (iNo1 == iNo2)
    {
        return true;
    }
    else
    {
        return false;
    }
} // End ChkEqual

function main()
{
    let iValue1 = 10, iValue2 = 13;

    let bRet = false;

    bRet = ChkEqual(iValue1, iValue2);

    if (bRet)
    {
        console.log(`Equal ${iValue1}, ${iValue2}`);
    }
    else
    {
        console.log(`Not Equal ${iValue1}, ${iValue2}`);
    }

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 10 10
//  Output : Equal 10 10
//
//  Input  : 10 12
//  Output : Not Equal 10 12
//
//  Input  : 10 -10
//  Output : Not Equal 10 10
//
////////////////////////////////////////////////////////////////////////////////