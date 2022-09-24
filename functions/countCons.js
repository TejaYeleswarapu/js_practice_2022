function isVow(c){
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ){
      return true;
  } else {
  return false;
  }
  }
  function isConsonant(c){
        return !isVow(c);
  }
  function countCons(s){
      let number = 0;
      for (let i = 0; i < s.length; i++){
            if(isConsonant(s[i])){
               number++;
            }     
       }
       return number;
   }
  
   console.log(countCons('tejayeleswarapu'));