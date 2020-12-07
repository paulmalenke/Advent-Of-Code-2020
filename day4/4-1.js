let fs = require("fs");

let file = fs.readFileSync("./4.txt").toString();
let input = file.split("\n\n");

let valid = 0;

checkValidity = (passport) => {
    if (
        passport.has("byr") &&
        passport.has("iyr") &&
        passport.has("eyr") &&
        passport.has("hgt") &&
        passport.has("hcl") &&
        passport.has("ecl") &&
        passport.has("pid")
    ) {
        return true;
    }
    return false;
};

input.forEach((group) => {
    let result = group;

    let cleanResults = result.replace(/\s/g, "\n").split("\n");

    let kv = new Map();

    cleanResults.forEach((cleanResult) => {
        let splitResult = cleanResult.split(":");
        kv.set(splitResult[0], splitResult[1]);
    });
    if (checkValidity(kv)) {
        valid++
    }
});

console.log(valid);

// Solution: 250
