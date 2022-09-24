function isVow(c){
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ){
      return true;
  } else {
  return false;
  }
  }
  function countVows(s){
      let number = 0;
      for (let i = 0; i < s.length; i++){
        if(isVow(s[i]) ){
           number++;
           }     
       }
       return number;
   }
  console.log(countVows('tejayeleswarapu'));