
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : pattern
//  Description   : Accept number from user & print display that number $ & *
//  Input         : Integer
//  Output        : $ *
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function pattern(iNo)
{
    let iCnt = 0;

    if (iNo < 0)
    {
        iNo = -iNo;
    }

    for (iCnt = 1; iCnt <= iNo; iCnt++)
    {
        console.log("$   * \t", iCnt);
    }

} // End pattern

function main()
{
    let iValue = 5;

    pattern(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 5
//  Output : $    *  $    *  $    *  $    *  $    *
//
//  Input  : 3
//  Output : $    *  $    *  $    *
//
//  Input  : 3
//  Output : $    *  $    *  $    *
//
////////////////////////////////////////////////////////////////////////////////