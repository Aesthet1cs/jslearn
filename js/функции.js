"use strict"

function ret() {
    let num = 50;

    //

    return num;
}

const anotherNum = ret();


const logger = function() {
    console.log('Hello');
};

logger();

const calc = (a, b) => { return a + b };