
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : CheckLeapYear
//  Description   : Accept year from user & display check leap year
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function CheckLeapYear(year)
{
    if (year <= 0)
    {
        console.log("Invalid year");
        return;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
    {
        console.log(`${year} is a leap year`);
    }
    else
    {
        console.log(`${year} is not a leap year`);
    }
} // End CheckLeapYear

function main()
{
    let yr = 2024;

    CheckLeapYear(yr);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 2024
//  Output : 2024 is a leap year.
//
//  Input  : 2005
//  Output : 2005 is not a leap year.
//
////////////////////////////////////////////////////////////////////////////////