
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : DisplayConvert
//  Description   : Accept Character from user & convert case of that Character
//  Input         : Character
//  Output        : Character
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////
function DisplayConvert(CValue)
{
    let ascii = CValue.charCodeAt(0);

    if (ascii >= 65 && ascii <= 90)        // A-Z
    {
        let converted = String.fromCharCode(ascii + 32);
        console.log(`Converted character : ${converted}`);
    }
    else if (ascii >= 97 && ascii <= 122)  // a-z
    {
        let converted = String.fromCharCode(ascii - 32);
        console.log(`Converted character : ${converted}`);
    }
    else
    {
        console.log("Invalid character");
    }
} // End DisplayConvert

function main()
{
    let cValue = 'a';

    DisplayConvert(cValue);

} // End main

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : A
//  Output : a
//
////////////////////////////////////////////////////////////////////////////////