"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr = [];
var start = 0;
var end = 1;
var fibonacci;
rl.question('Enter number: ', function (num) {
    fibo(num, 0);
    console.log("array: ", arr);
    var sum = arr.reduce(function (p, c) { return p + c; }, 0);
    console.log("sum :", sum);
    rl.close();
});
var fibo = function (total, count) {
    if (count < total) {
        if (count <= 1) {
            arr.push(count);
        }
        else {
            fibonacci = start + end;
            start = end;
            end = fibonacci;
            arr.push(fibonacci);
        }
        count++;
        fibo(total, count);
    }
    else {
        return;
    }
};
