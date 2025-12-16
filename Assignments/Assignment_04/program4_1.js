
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : MultFact
//  Description   : Accept number from user & display multiplicaton of factor
//  Input         : Integer
//  Output        : Integer
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function MultFact(iNo)
{
    let iCnt = 0;
    let iMult = 1;

    for (iCnt = 1; iCnt <= iNo / 2; iCnt++)
    {
        if (iNo % iCnt == 0)
        {
            iMult = iMult * iCnt;
        }
    }
    return iMult;
} // End MultFact

function main()
{
    let iValue = 12;
    let iRet = 0;

    iRet = MultFact(iValue);

    console.log(`Multipication of factors : ${iRet}`);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 12
//  Output : 144
//
//  Input  : 13
//  Output : 1
//
//  Input  : 10
//  Output : 10
//
////////////////////////////////////////////////////////////////////////////////