// Exercise 22 - myPow()
// 
// Write a function named myPow() which receives 2 parameters: a base (n), and an exponent (exp) and returns nexp
// 
// Sample unit testing:
// 
// INPUT: 2, 3
// 
// EXPECTED: 8
// 
// ACTUAL: 8

'use strict'

var res = myPow(2, 3);
console.log('Power - \nINPUT: ', 2, 3,
    '\nEXPECTED: ', 8, '\nACTUAL: ', res);

var res = myPow(5, 1);
console.log('Power - \nINPUT: ', 5, 1,
    '\nEXPECTED: ', 5, '\nACTUAL: ', res);

var res = myPow(10, 6);
console.log('Power - \nINPUT: ', 10, 6,
    '\nEXPECTED: ', 1000000, '\nACTUAL: ', res);

var res = myPow(5, 1);
console.log('Power - \nINPUT: ', 5, 1,
    '\nEXPECTED: ', 5, '\nACTUAL: ', res);

var res = myPow(2, -1);
console.log('Power - \nINPUT: ', 2, -1,
    '\nEXPECTED: ', NaN, '\nACTUAL: ', res);



function myPow(n, exp) {
    var counter = 0;
    var res = 1;

    if (exp < 0) return NaN
    if (exp === 0) return 1;

    while (counter < exp) {
        res *= n;
        counter++;
    }

    return res;
}

