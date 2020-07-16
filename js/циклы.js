"use strict"

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

let newNum = 50;

do {
    console.log(newNum);
    newNum++;
}
while (newNum < 57);

for ( let i = 1; i < 8; i++ ) {
    if ( i == 6 ) {
        // break;
        continue;
    }
    console.log(i);
}