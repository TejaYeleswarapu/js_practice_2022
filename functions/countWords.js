function countWords(s,c){
    let count = 0;
    for (var i = 0; i < s.length; i++){
      	if (s[i]==c){
       		count++;
      	}
    }
	return count+1;
}

sample_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
word_count = (countWords(sample_text, ' '));
console.log(word_count);