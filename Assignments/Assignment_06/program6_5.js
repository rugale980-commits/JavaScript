
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : percentage
//  Description   : Accept total & obtained mark from user & Calculate percentage
//  Input         : Integer
//  Output        : Float
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////
function percentage(iNo1, iNo2)
{
    let fResult = 0.0;

    if (iNo1 == 0)
    {
        return 0.0;
    }
    fResult = (iNo2 / iNo1) * 100;

    return fResult;
} // End percentage

function main()
{
    let iValue1 = 1000, iValue2 = 745;
    let fRet = 0.0;

    fRet = percentage(iValue1, iValue2);

    console.log(`Percentage is : ${fRet}`);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 1000 745
//  Output : Percentage is : 74.50%
//
//  Input  : 100 75
//  Output : Percentage is : 75.00%
//
////////////////////////////////////////////////////////////////////////////////