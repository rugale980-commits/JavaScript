// Write a Program to Check Perfect of Number

function CheckPerfect(No)
{
    let iCnt = 0;
    let iCount = 0;

    for(iCnt = 1; iCnt <= (No/2); iCnt++)
    {
      if((No % iCnt) == 0)
      {
        iCount = iCount + iCnt;
      }
    }

    if(iCount == No)
    {
      return true;
    }
    else
    {
      return false;
    } 
}

function main()
{
  let iValue = 6;
  let bRet = false;

  bRet = CheckPerfect(iValue);

  if(bRet == true)
  {
    console.log(`${iValue} is a Perfect Number`);
  }
  else
  {
    console.log(`${iValue} is Not a Perfect Number`);
  }  

}

main();