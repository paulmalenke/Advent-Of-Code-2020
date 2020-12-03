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
            const secondary = values[secondaryIndex];

            for (
                let tertiaryIndex = secondaryIndex + 1;
                tertiaryIndex < values.length;
                tertiaryIndex++
            ) {
                const tertiary = values[tertiaryIndex];

                let sum = main + secondary + tertiary;

                if (sum === checksum) {
                    return main * secondary * tertiary;
                }
            }
        }
    }
};

console.log(findSolution(input, 2020));

// 193598720
