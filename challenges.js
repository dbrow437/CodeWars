//Friend or Foe?
function friend(friends){
 return friends.filter(friends => friends.length == 4)
}

//Third Angle of a Triangle
function otherAngle(a, b) {
  return 180 - (a + b);
}

//ReveresedWords
function reverseWords(str){
  return str.split(" ").reverse().join(" ")
}

//The Highest profit wins
function minMax(arr){
 var sortArr= arr.sort(function(a,b) {
 return a-b})// needs compare function because sort method uses lexicographical sort
 return [sortArr[0], sortArr[sortArr.length -1]]
}

//Grasshopper - summation
function summation(num) {
  var total = 0
  for ( var i = 0; i <= num; i++) {
    total += i
    }
    return total
}

//A Needle in the Haystack
function findNeedle(haystack) {
 var needleLoc = haystack.indexOf("needle")
 return "found the needle at position " + needleLoc
}

//Get the Middle Character
function getMiddle(s){
  if (s.length % 2 == 0) {
    str = s.length / 2
    return s.substring(str-1, str+1)
  } else {
  str = s.length /2
  return s.substring(str, str+1)
  }
}

//Keep up the hoop
function hoopCount (n) {
  if (n >= 10){
  return "Great, now move on to tricks"
  } else {
  return "Keep at it until you get it"
  }
}

//String repeat
function repeatStr (n, s) {
  return s.repeat(n)
}

//Convert a String to a Number
var stringToNumber = function(str){
 var a = parseInt(str)
  return a
}

//Convert boolean values to strings "Yes" or "No"
function boolToWord( bool ){
  if (bool == true) {
  return "Yes"
  } else { (bool != true)
  return "No"
  }
}

//Calculate average
function find_average(array) {
  // your code here
  var total = 0
  for (var i = 0; i < array.length; i++) {
  total += array[i]
  }
  var average = total/array.length
  return average;
}

//Remove String Spaces
function noSpace(x){
var newStr=  x.replace(/\s+/g, '')
return newStr
}

//Even or Odd
function even_or_odd(number) {
return (number % 2 == 0) ? "Even" : "Odd"
}

//Is n divisible by x and y
function isDivisible(n, x, y) {
  if ((n % x == 0) && ( n % y == 0))
    return true
  else
    return false
}

//ReversedStrings
function solution(str){
  var reverseStr = str.split("").reverse().join("")
  return reverseStr
}

//Multiply
function multiply(a, b){
  return a * b
}
