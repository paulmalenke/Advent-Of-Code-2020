let fs = require("fs");
let file = fs.readFileSync("./1.txt").toString();
let input = file.split("\n").map((i) => parseInt(i));

findSolution = (values, checksum) => {
    for (let mainIndex = 0; mainIndex < values.length; mainIndex++) {
        const main = values[mainIndex];

        for (
            let secondaryIndex = mainIndex + 1;
            secondaryIndex < values.length;
            secondaryIndex++
        ) {
            const comparison = values[secondaryIndex];

            let sum = main + comparison;

            if (sum === checksum) {
                return main * comparison;
            }
        }
    }
};

console.log(findSolution(input, 2020));

// 32064
