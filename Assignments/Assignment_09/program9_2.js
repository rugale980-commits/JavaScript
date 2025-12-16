
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : DollarToINR
//  Description   : Accept number from user & convert (1$ 70rs) indian currency
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function DollarToINR(iNo)
{
    let Doller = 70;
    Doller = iNo * Doller;

    return Doller;
} // End DollarToINR


function main()
{
    let iValue = 10;
    let iRet = 0;

    iRet = DollarToINR(iValue);

    console.log(`Value is INR is ${iRet}`);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 10
//  Output : Value is INR is 700
//
//  Input  : 3
//  Output : Value is INR is 210
//
//  Input  : 1200
//  Output : Value is INR is 84000
//
//  Input  : -2
//  Output : Value is INR is -140
//
////////////////////////////////////////////////////////////////////////////////