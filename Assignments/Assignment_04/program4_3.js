
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : NonFact
//  Description   : Accept number from user & display Non factors
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function NonFact(iNo)
{
    let iCnt = 0;

    for (iCnt = 1; iCnt <= iNo; iCnt++)
    {
        if (iNo % iCnt != 0)
        {
            console.log(iCnt);
        }
    }
} // End NonFact

function main()
{
    let iValue = 12;

    NonFact(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 12
//  Output : 5  7  8  9  10  11
//
//  Input  : 13
//  Output : 2  3  4  5  6  7  8  9  10  11  12
//
//  Input  : 10
//  Output : 3  4  6  7  8  9
//
////////////////////////////////////////////////////////////////////////////////