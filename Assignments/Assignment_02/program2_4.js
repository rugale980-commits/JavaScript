
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Display
//  Description   : Accept number from user & display first number in second no.
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function Display(iNo,iFrequence)
{
    let iCnt = 0;

    // Updater
    if (iFrequence < 0)
    {
        iFrequence = -iFrequence;
    }
    if (iNo < 0)
    {
        iNo = -iNo;
    }
    for (iCnt = 0; iCnt < iFrequence; iCnt++)
    {
        console.log(iNo);
    }
} // End Function

function main()
{
    let iValue = 12;
    let iCount = 5;

    Display(iValue, iCount);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 12 & 5
//  Output : 12 12  12  12  12
//
////////////////////////////////////////////////////////////////////////////////