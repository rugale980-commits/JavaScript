
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : Number
//  Description   : Accept single digit from user & print in into word
//  Input         : Integer
//  Output        : Character
//  Author        : Rahul Balasaheb Ugale
//  Date          : 17/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function Display(iNo)
{
    // Updater
    if (iNo <= 0)
    {
        iNo = -iNo;
    }

    switch (iNo)
    {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default:
        console.log("Invalid Number.");
    }

} // End Display

function main()
{
    let iValue = 9;

    Display(iValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : 9
//  Output : Nine
//
//  Input  : -3
//  Output : Three
//
//  Input  : 12
//  Output : Invalid Number
//
////////////////////////////////////////////////////////////////////////////////