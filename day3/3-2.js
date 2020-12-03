let fs = require("fs");
const { nextTick } = require("process");
let file = fs.readFileSync("./3.txt").toString();
let input = file.split("\n");

let localGeology = [];

input.forEach((line) => {
    localGeology.push(Array.from(line));
});

findTrees = (lineArray, moveRight, moveDown) => {
    let trees = 0;
    let x = 0;

    let skips = 1
    lineArray.forEach((line, idx) => {
        if ((moveDown > 1 ) && ((idx+1) % moveDown === 0)) {
            return;
        }
        position = x % line.length;
        if (line[position] === "#") {
            trees++;
        }
        x += moveRight;
    });

    return trees;
};

let trees = [
    findTrees(localGeology, 1, 1),
    findTrees(localGeology, 3, 1),
    findTrees(localGeology, 5, 1),
    findTrees(localGeology, 7, 1),
    findTrees(localGeology, 1, 2),
];

// console.log(trees);

let solution = trees.reduce((a, b) => a * b);

console.log("FIND THE TREES! " + solution);

// Solution: 7560370818
