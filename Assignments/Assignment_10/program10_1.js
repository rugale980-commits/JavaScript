
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : CircleArea
//  Description   : Accept number from user & calculate radius of circle
//  Input         : Flaot
//  Output        : Double
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function CircleArea(fRadius)
{
    let PI = 3.14;
    // Updater
    if (fRadius <= 0)
    {
        fRadius = -fRadius;
    }
    let Area = PI * fRadius * fRadius;
    return Area;

} // End CircleArea

function main()
{
    let fValue = 5.3;
    let dRet = 0;

    dRet = CircleArea(fValue);

    console.log(`Area  is ${dRet}`);

} // End main
 
main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 5.3
//  Output : Area  is  88.202606
//
//  Input  : -5
//  Output : Area  is  88.202606
//
//  Input  : 10.4
//  Output : Area  is  339.622375
//
////////////////////////////////////////////////////////////////////////////////