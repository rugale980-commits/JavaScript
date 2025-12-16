
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : MultRev
//  Description   : Accept number from user & display factor decreasing order
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function FactRev(iNo)
{
    let iCnt = 0;

    for (iCnt = iNo / 2; iCnt >= 1; iCnt--)
    {
        if (iNo % iCnt == 0)
        {
            console.log(iCnt);
        }
    }
} // End FactRev

function main()
{
    let iValue = 12;

    FactRev(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 12
//  Output : 6  4  3  2  1
//
//  Input  : 13
//  Output : 1
//
//  Input  : 10
//  Output : 5  2  1
//
////////////////////////////////////////////////////////////////////////////////