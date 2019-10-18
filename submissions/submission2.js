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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


// Complete the lilysHomework function below.
function lilysHomework(arr) {

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    var n = parseInt(readLine());
    var arr = readLine().split(' ');
    arr = arr.map(Number);

    let result = lilysHomework(arr);

    ws.write(result + "\n");

    ws.end();
}
