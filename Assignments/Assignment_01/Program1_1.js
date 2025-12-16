
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Divided
//  Description   : It is used to perfrom Division of two numbers
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function Divided(iNo1,iNo2)
{
    let iAns = 0;

    if (iNo2 <= 0)
    {
        return -1;
    }
    iAns = iNo1 / iNo2; // Business Logic

    return iAns;
} // End Function

function main()
{
    let iValue1 = 15, iValue2 = 5;
    let iRet = 0;

    iRet = Divided(iValue1, iValue2);

    console.log("Division is : ", iRet);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input1 : 15   Input2 : 5     output : Division is 3
//
////////////////////////////////////////////////////////////////////////////////