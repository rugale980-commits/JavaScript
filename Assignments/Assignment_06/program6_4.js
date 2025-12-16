
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Multiply
//  Description   : Accept 3 number from user & Multiplication of number
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function Multiply(iNo1, iNo2, iNo3)
{
    let iReturn = 1;
    let iCount = 0;

    if (iNo1 != 0)
    {
        iReturn = iReturn * iNo1;
        iCount++;
    }
    if (iNo2 != 0)
    {
        iReturn = iReturn * iNo2;
        iCount++;
    }
    if (iNo3 != 0)
    {
        iReturn = iReturn * iNo3;
        iCount++;
    }
    if (iCount == 0)
    {
        return 0;
    }

    return iReturn;
} // End Multiply

function main()
{
    let iValue1 = 5, iValue2 = 4, iValue3 = 7;
    let iRet = 0;

    iRet = Multiply(iValue1, iValue2, iValue3);

    console.log(`Multiplication is : ${iRet}`);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 5 4 7
//  Output : Multiplication is : 140
//
//  Input  : 5 0 7
//  Output : Multipication is : 35
//
//  Input  : 0 0 0
//  Output : Multipication is : 0
//
////////////////////////////////////////////////////////////////////////////////