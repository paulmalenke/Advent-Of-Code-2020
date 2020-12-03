let fs = require("fs");
let file = fs.readFileSync("./3.txt").toString();
let input = file.split("\n");

let localGeology = [];

input.forEach(line => {
    localGeology.push(Array.from(line));
});

let trees = 0;

let x = 0;

localGeology.forEach(line => {
    position = x%line.length;
    if (line[position] === "#") {
        trees++;
    }
    x += 3
})

console.log('FIND THE TREES! ' + trees);

// Solution: 169
