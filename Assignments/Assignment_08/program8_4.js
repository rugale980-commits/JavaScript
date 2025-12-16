
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Table
//  Description   : Accept number from user & display its table
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function Table(iNo)
{
    let iCnt = 0;

    // Updater
    if (iNo <= 0)
    {
        iNo = -iNo;
    }

    for (iCnt = 1; iCnt <= 10; iCnt++)
    {
        console.log(iCnt * iNo);
    }
} // End Table

function main()
{
    let iValue = 2;

    Table(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 2
//  Output : 2   4    6    8    10   12   14   16   18   20
//
//  Input  : 5
//  Output : 5  10   15   20   25   30   35   40   45   50
//
//  Input  : -5
//  Output : 5  10   15   20   25   30   35   40   45   50
//
////////////////////////////////////////////////////////////////////////////////