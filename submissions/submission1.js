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

function minimumLoss(price) {
 const reverseSortPrice = price.concat().sort((a, b) => b - a)

  let loss = Infinity

  for(let i=0; i< reverseSortPrice.length ; i++) {
    let buy = reverseSortPrice[i]
    let sell = reverseSortPrice[i+1]

    let currentLoss = buy - sell

    if(currentLoss < loss && price.indexOf(buy) < price.indexOf(sell)) {
      loss = currentLoss
    }
  }

  return loss
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const price = readLine().split(' ').map(priceTemp => parseInt(priceTemp, 10));

    let result = minimumLoss(price);

    ws.write(result + "\n");

    ws.end();
}
