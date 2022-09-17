function palindrome(str) {
  let checkRegex = /[a-z0-9]/ig;
  let strToArray = str.match(checkRegex);
  let reverseArray = [];
  
  for (let i = strToArray.length - 1 ; i >= 0; i--) {
    reverseArray.push(strToArray[i]);
  }

  let arrayToStr = strToArray.join("").toLowerCase();
  let arrayToStrRev = reverseArray.join("").toLowerCase();

  console.log(arrayToStr);
  console.log(arrayToStrRev);

  if (arrayToStr === arrayToStrRev) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

palindrome("five|\_/|four");