
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Number
//  Description   : Accept num.from user & print num small(50),medium(100),large
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function Number(iNo)
{
    // Updater
    if (iNo <= 0)
    {
        iNo = -iNo;
    }

    if (iNo <= 50)
    {
        console.log(`${iNo} is small number`);
    }
    else if (iNo <= 100)
    {
        console.log(`${iNo} is medium number`);
    }
    else
    {
        console.log(`${iNo} is large number`);
    }

} // End Number

function main()
{
    let iValue = 15;

    Number(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 15
//  Output : 15 is small number
//
//  Input  : 75
//  Output : 75 is medium number
//
//  Input  : 105
//  Output : 105 is large number
//
////////////////////////////////////////////////////////////////////////////////