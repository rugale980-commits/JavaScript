
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : FindLargest
//  Description   : Accept 3 number from user & check Largest number
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function FindLargest(num1, num2, num3)
{
    let largest = 0;

    if (num1 >= num2 && num1 >= num3)
    {
        return largest = num1;
    }
    else if (num2 >= num1 && num2 >= num3)
    {
        return largest = num2;
    }
    else
    {
        return largest = num3;
    }

    return largest;
} // End FindLargest

function main()
{
    let number1 = 12, number2 = 567, number3 = 0;
    let result = 0;

    result = FindLargest(number1, number2, number3);

    console.log("Largest number is : ", result);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 12 567 0
//  Output : Largest number is : 567
//
////////////////////////////////////////////////////////////////////////////////