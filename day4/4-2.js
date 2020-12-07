let fs = require("fs");

let file = fs.readFileSync("./4.txt").toString();
let input = file.split("\n\n");

let valid = 0;

class Passport {
    constructor() {
        this.byr = null;
        this.iyr = null;
        this.eyr = null;
        this.hgt = null;
        this.hcl = null;
        this.ecl = null;
        this.pid = null;
        this.cid = null;
    }

    checkValidity() {
        return this.checkRequiredFields() && this.validateFieldData();
    }

    checkRequiredFields() {
        return (
            this.byr !== null &&
            this.iyr !== null &&
            this.eyr !== null &&
            this.hgt !== null &&
            this.hcl !== null &&
            this.ecl !== null &&
            this.pid !== null
        );
    }

    validateFieldData() {
        return (
            this.validateYearRequirement(this.byr, 1920, 2002) &&
            this.validateYearRequirement(this.iyr, 2010, 2020) &&
            this.validateYearRequirement(this.eyr, 2020, 2030) &&
            this.validateHeight(this.hgt) &&
            this.validateHairColor(this.hcl) &&
            this.validateEyeColor(this.ecl) &&
            this.validatePassportId(this.pid)
        );
    }

    validateYearRequirement(value, min, max) {
        return value.length === 4 && this.validateInRange(value, min, max);
    }

    validateInRange(value, min, max) {
        return value >= min && value <= max;
    }

    validateEyeColor(value) {
        return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(
            value
        );
    }

    validatePassportId(value) {
        const r = /\b\d{9}\b/;
        return r.test(value);
    }

    validateHairColor(value) {
        const r = /#[0-9a-z]{6}/gi;
        return r.test(value);
    }

    validateHeight(value) {
        const r = /(1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in/g;
        return r.test(value);
    }
}

input.forEach((group) => {
    let result = group;

    let cleanResults = result.replace(/\s/g, "\n").split("\n");

    let record = new Passport();

    cleanResults.forEach((cleanResult) => {
        let splitResult = cleanResult.split(":");
        record[splitResult[0]] = splitResult[1];
    });
    if (record.checkValidity()) {
        // console.log(record);
        valid++;
    }
});

console.log(valid);

// Solution: 250
