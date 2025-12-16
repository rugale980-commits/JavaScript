
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Display
//  Description   : Accept number from user & display below pattern(**##)
//  Input         : Integer
//  Output        : * #
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function Display(iNo)
{
    let iCnt = 0;

    // Updater
    if (iNo <= 0)
    {
        iNo = -iNo;
    }

    for (iCnt = 1; iCnt <= iNo; iCnt++)
    {
        console.log(" * ");
    }
    for (iCnt = 1; iCnt <= iNo; iCnt++)
    {
        console.log(" # ");
    }
} // End Display

function main()
{
    let iValue = 5;

    Display(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 5
//  Output : *  *  *  *  *  #  #  #  #  #
//
//  Input  : 6
//  Output : *  *  *  *  *  *  #  #  #  #  #  #
//
//  Input  : -5
//  Output : *  *  *  *  *  #  #  #  #  #
//
//  Input  : 2
//  Output : *  *    #  #
//
////////////////////////////////////////////////////////////////////////////////