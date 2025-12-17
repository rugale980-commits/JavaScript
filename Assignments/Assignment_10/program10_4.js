
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : FhtoCs
//  Description   : Accept temperture from user & calculate faherenheit & celsiu
//  Input         : Flaot
//  Output        : Double
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function FhtoCs(fTemp)
{
    let celsius = 0.0;
    celsius = (fTemp - 32.0) * (5.0 / 9.0);
    return celsius;

} // End FhtoCs

function main()
{
    let fValue = 10;
    let dRet = 0.0;

    dRet = FhtoCs(fValue);

    console.log(`Celsius is ${dRet}`);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 10
//  Output : Celsius  is  -12.222222
//
//  Input  : 34
//  Output : Celsius  is  1.111111
//
////////////////////////////////////////////////////////////////////////////////