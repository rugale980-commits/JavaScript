
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : DisplayEvenFactor
//  Description   : Accept number from user & print even factors number
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function DispayEvenFactor(iNo)
{
    let icnt = 0;
    if (iNo <= 0)
    {
        iNo = -iNo;
    }

    for (icnt = 1; icnt <= iNo / 2; icnt++)
    {
        if ((iNo % icnt == 0) && (icnt % 2 == 0))
        {
            console.log(icnt);
        }
    }
} // End DispayEvenFactor

function main()
{
    let iValue = 36;

    DispayEvenFactor(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 36
//  Output : 2 4 6 12 18
//
////////////////////////////////////////////////////////////////////////////////
