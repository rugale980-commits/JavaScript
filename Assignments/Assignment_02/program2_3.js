
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Display
//  Description   : Accept number from user and print <10 print Hello,>10 Demo
//  Input         : Integer
//  Output        : Hello , Demo
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function Display(iNo)
{
    if (iNo <= 10)
    {
        console.log("Hello");
    }
    else
    {
        console.log("Demo");
    }
} // End Function

function main()
{
    let iValue = 10; 
    // let iValue = 13;

    Display(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 10              Input  : 13
//  Output : Hello           Output : Demo
//
////////////////////////////////////////////////////////////////////////////////