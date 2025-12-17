
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : SquarMeter
//  Description   : Accept area in squer feet & convert into squer meter
//  Input         : Integer
//  Output        : Double
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/11/2025
//
////////////////////////////////////////////////////////////////////////////////

function SquarMeter(ivalue)
{
    let iSquer = 0.0929;
    iSquer = ivalue * iSquer;
    return iSquer;

} // End SquarMeter

function main()
{
    let iValue = 5;
    let dRet = 0.0;

    dRet = SquarMeter(iValue);

    console.log(`Squer meter  is  ${dRet}`);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 5
//  Output : Squer meter  is  0.464500
//
//  Input  : 7
//  Output : Squer meter  is  0.650300
//
////////////////////////////////////////////////////////////////////////////////