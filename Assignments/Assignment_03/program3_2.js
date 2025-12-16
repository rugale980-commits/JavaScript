
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : DisplayFactor
//  Description   : Accept number from user & print even factors number
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function DispayFactor(iNo)
{
    let iCnt = 0;
    // Updater
    if (iNo <= 0)
    {
        iNo = -iNo;
    }

    for (iCnt = 1; iCnt <= iNo / 2; iCnt++)
    {
        if (iNo % iCnt == 0)
        {
            console.log(iCnt);
        }
    }

} // End DispayFactor

function main()
{
    let iValue = 24;

    DispayFactor(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 24
//  Output : 1 2 3 4 6 8 12
//
////////////////////////////////////////////////////////////////////////////////
