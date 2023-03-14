'use strict';
// console.log(multiplyString('g', 6))
// console.log(getTriangle('a', 5));
// console.log(getMusicEqualizer('*', 5));
// console.log(getBlock('c', 3, 6));
console.log(getBlockOutline('*', 4, 6));




function multiplyString(char, length) {
    var resStr = ''
    var count = 0
    while (count < length) {
        resStr += char
        count++
    }

    return resStr
}


function getTriangle(char, height) {
    var count = 1;
    var resStr = '';

    while (count < height) {
        resStr += multiplyString(char, count) + '\n';
        count++;
    }

    while (count > 0) {
        resStr += multiplyString(char, count) + '\n';
        count--;
    }
    return resStr;
}



function getMusicEqualizer(char, rowCount) {
    var resStr = '';
    var count = 0
    while (count < rowCount) {
        var rowLength = getRandomInt(1, 10);
        resStr += multiplyString(char, rowLength) + '\n';
        count++
    }
    return resStr;
}


function getBlock(str, rows, cols) {
    var endStr = '';
    var count = 0
    while (count < rows) {
        endStr += multiplyString(str, cols) + '\n';
        count++
    }
    return endStr;
}


function getBlockOutline(char, rows, cols) {
    var resStr = '';
    resStr += multiplyString(char, cols) + '\n';
    var count = 0
    while (count < (rows - 2)) {
        resStr += char + multiplyString(' ', cols - 2) + char + '\n';
        count++
    }
    resStr += multiplyString(char, cols) + '\n';
    return resStr;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
