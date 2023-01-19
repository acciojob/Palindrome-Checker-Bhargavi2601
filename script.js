// complete the given function

function palindrome(str){
var removeChar=str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
	var checkPalindrome=removeChar.split('').reverse().join('');

	
	if(removeChar===checkPalindrome){
		return=true;
	}else{
		return=false;
	}
}
module.exports = palindrome
