
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : KMtoMeter
//  Description   : Accept Distance from user & convert kilometer into meter
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function KMtoMeter(iNo)
{
    let Km = 1000;
    Km = iNo * Km;
    return Km;

} // End KMtoMeter

function main()
{
    let iValue = 5;
    let iRet = 0;

    iRet = KMtoMeter(iValue);

    console.log(`Distance is ${iRet}`);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 5
//  Output : Distance  is  5000
//
//  Input  : 12
//  Output : Distance  is  12000
//
////////////////////////////////////////////////////////////////////////////////