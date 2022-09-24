function countChar(s,c){
    let count = 0;
    for (var i = 0; i <= s.length; i++){
      if (s[i]==c){
       count++;
      }
     }
     return count;
   }
   console.log(countChar('tejayeleswarapu','j'));