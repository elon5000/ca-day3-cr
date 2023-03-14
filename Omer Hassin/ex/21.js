'use strict'

// Exercise 21 - Divisible by 3
// 
// Read numbers from the user, until the number 999 is entered. For each number:
// 
// Print if it is divisible by 3.
// If it is bigger by more than 10 from the previous number, print a suitable message.

isDivisibleBy3()

function isDivisibleBy3() {

    var num = +prompt('Enter a number (999 for exit)');
    var prevNum = num;
    
    while (num !== 999) {
        if (num % 3 === 0) console.log(num + ' is divisible by 3');
        if (num - prevNum > 10) console.log('Now this number is larger by more than 10');
        prevNum = num;
        num = +prompt('Enter a number (999 for exit)');
    }
}