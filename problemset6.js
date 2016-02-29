// Write a function secondGreatLow that takes a single array of numbers and returns the second lowest and second greatest numbers, respectively, separated by a space. For example: if the array contains [7, 7, 12, 98, 106] the output should be "12 98". The array will not be empty and will contain at least 2 numbers.

var arr = [7, 31, 2, 333, 12, 5]
function SecondGreatLow(arr) { 
    arr.sort(function(a, b){return a-b})
     return arr[1] + " " + arr[arr.length - 2]      
}
console.log(SecondGreatLow(arr))


// Write a function timeConvert that takes a number parameter and returns the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

function timeConvert(num) {
	return Math.floor(num/60) + ':' + num%60
}
console.log(timeConvert(63))

// Write a function bracketMatcher that takes a single string parameter and returns true if the brackets are correctly matched and each one is accounted for. Otherwise return false. For example: if str is "(hello (world))", then the output should be true, but if str is "((hello (world))" the the output should be false because the brackets do not correctly match up. "(()())" should return true. Only "(" and ")" will be used as brackets. If str contains no brackets return true.

function bracketMatcher (string){
var leftBracket = 0
var rightBracket = 0
	for (var i = 0; i < string.length; i++){
		var x = string.charAt(i)
		if (x == '(') {
			leftBracket++
		}
		if (x == ')') {
			rightBracket++
		}
	}
	if (leftBracket == rightBracket){
		return true
	}
	else {
		return false
	}
}
console.log(bracketMatcher('this(string) has( (two) sets'))