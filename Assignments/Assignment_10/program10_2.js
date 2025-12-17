
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : ReactArea
//  Description   : Accept number from user & calculate width & height calu area
//  Input         : Flaot
//  Output        : Double
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function RectArea(fwidth, fheight)
{
    let Area = 0.0;
    Area = fwidth * fheight;
    return Area;

} // End RectArea

function main()
{
    let fValue1 = 5.3, fValue2 = 9.78; 
    let dRet = 0.0;

    dRet = RectArea(fValue1, fValue2);

    console.log(`Area  is ${dRet}`);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 5.3     9.78
//  Output : Area  is  51.834000
//
//  Input  : 10.4    8.6
//  Output : Area  is  89.440002
//
////////////////////////////////////////////////////////////////////////////////