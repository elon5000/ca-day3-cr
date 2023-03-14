'use strict'

/*
// Exercise 19 - Even and Odd Numbers
// 
// Read 10 numbers from the user. Check each number and print it along with a short message indicating whether it is even or odd.
// 
// For example:
// 
// 21 is Odd
// 48 is Even
*/



var counter = 0;
var msg;

while (counter < 3) {
    var num = +prompt('Enter a number:');
    var msg = num % 2 === 0 ? ' is Even' : ' is Odd'
    
    console.log(num + msg);
    counter++;
}