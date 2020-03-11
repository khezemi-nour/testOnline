'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the countStrings function below.
 */
function countStrings(r, l) {
    /*
     * Write your code here.
     */

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const rl = readLine().split(' ');

        const r = rl[0];

        const l = parseInt(rl[1], 10);

        let result = countStrings(r, l);

        ws.write(result + "\n");
    }

    ws.end();
}
