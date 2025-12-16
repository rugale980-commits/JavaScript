
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : PrintEven
//  Description   : Accept number from user & print even number
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function PrintEven(iNo)
{
    let iCnt = 0;
    if (iNo <= 0)
    {
        return;
    }

    for (iCnt = 2; iCnt <= iNo; iCnt += 2)
    {
        console.log(iCnt);
    }
} // End PrintEven

function main()
{
    let iValue = 12;

    PrintEven(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 12
//  Output : 2 4 6 8 10 12
//
////////////////////////////////////////////////////////////////////////////////
