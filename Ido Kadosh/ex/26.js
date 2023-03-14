'use strict';

// Write a program which generates 10 ascending random numbers (each number is greater than the previously generated number).

// The first number n , should be in the range 0 – 1000,

// and each subsequent number, should be in the range (n+1) – (n+1000)

printAscendingRandInts()
function printAscendingRandInts() {
    var count = 0
    var rangeStart = 0;
    var rangeEnd = 1000;
    while (count < 10) {
        var num = getRandomInt(rangeStart, rangeEnd);
        console.log('generating random number between ' + rangeStart + '-' + rangeEnd);
        console.log('your random number is ', num);
        rangeStart = num + 1;
        rangeEnd = num + 1000;
        count++;
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
