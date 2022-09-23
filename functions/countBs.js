function countBs(string){
    let number = 0;
     for (let i = 0; i <= string.length; i++){
      if (string[i] == 'B' || string[i] == 'b'){
        number += string[i].length
      }
     }
     return number;
   }
   console.log(countBs('BbUbB'));