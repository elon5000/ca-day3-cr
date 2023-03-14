// Exercise 20 - Min, Max and Avg.
// 
// Read 10 numbers from the user and print:
// 
// The maximum number.
// The minimum number.
// The average.

'use strict'

var counter = 0;
var sum = 0;
var max = -Infinity;
var min = Infinity;

while (counter < 3) {
    var num = +prompt('Enter a number:');
    if (max <= num) max = num;
    if (min >= num) min = num;
    sum += num;
    counter++;
}

console.log('Maximum: ', max, '\nMinimum: ', min, '\nAverage: ', sum / counter);