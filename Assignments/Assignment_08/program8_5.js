
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : TableRev
//  Description   : Accept number from user & display its table reverse order
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function TableRev(iNo)
{
    let iCnt = 0;

    // Updater
    if (iNo <= 0)
    {
        iNo = -iNo;
    }

    for (iCnt = 10; iCnt >= 1; iCnt--)
    {
        console.log(iCnt * iNo);
    }
} // End TableRev

function main()
{
    let iValue = 2;

    TableRev(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 2
//  Output : 20  18  16  14  12  10  8  6  4  2
//
//  Input  : 5
//  Output : 50  45  40  35  30  25  20  15  10  5
//
//  Input  : -5
//  Output : 50  45  40  35  30  25  20  15  10  5
//
////////////////////////////////////////////////////////////////////////////////