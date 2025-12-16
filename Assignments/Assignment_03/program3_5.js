
////////////////////////////////////////////////////////////////////////////////
//
//  Function Name : DisplayConvert
//  Description   : Accept Character from user & check vowel or not
//  Input         : Character
//  Output        : Character
//  Author        : Rahul Balasaheb Ugale
//  Date          : 16/12/2025
//
////////////////////////////////////////////////////////////////////////////////

function ChkVowel(CValue)
{
    if (CValue == 'A' || CValue == 'E' || CValue == 'I' ||
        CValue == 'O' || CValue == 'U' ||

        CValue == 'a' || CValue == 'e' || CValue == 'i' ||
        CValue == 'o' || CValue == 'u')
    {
        return true;
    }
    else
    {
        return false;
    }
} // End Function //

function main()
{
    let cValue = 'E';
    let bRet = false;

    bRet = ChkVowel(cValue);

    if (bRet == true)
    {
        console.log("It is a Vowel");
    }
    else
    {
        console.log("It is NOT a Vowel");
    }

} // End main //

main();

////////////////////////////////////////////////////////////////////////////////
//
//  Testcases succesfully handle by the application
//
//  Input  : E
//  Output : TRUE
//
//  Input  : d
//  Output : FALSE
//
////////////////////////////////////////////////////////////////////////////////