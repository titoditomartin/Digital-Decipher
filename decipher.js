function digitalDecipher(message, key){
	for(let i = 0; i < message.length; i++){
	    message[i] -= parseInt(key.toString()[i % key.toString().length]);}
	const alphabetLetters = "abcdefghijklmnopqrstuvwxyz";
	var deci = "";
	for(let i = 0; i < message.length; i++){
		deci += alphabetLetters[message[i] - 1];}
	return deci;
}

console.log(digitalDecipher([20, 12, 18, 30, 21] , 1939)) 
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990)) 
console.log(digitalDecipher([10, 4, 1, 3, 9, 20], 100)) 