// Write seprate Function with main also 
// Addition of 2 number

function Addition(iNo1,iNo2)
{
    let iAns = 0;
    iAns = iNo1 + iNo2;
    return iAns;
}

function main()
{
    let iVAlue1 = 10, iVAlue2 = 11;
    let iRet = 0;

    iRet = Addition(iVAlue1,iVAlue2); 

    console.log("Additions is : ",iRet);
}

main(); // OS -> Native // JVM -> Java