let fs = require("fs");

class Password {
    constructor(password, requiredCharacter, positions) {
        this.password = password;
        this.requiredCharacter = requiredCharacter;
        this.positions = positions;
    }

    get isValid() {
        return this.checkValidity();
    }

    checkValidity() {
        let chars = new Set();
        this.positions.forEach((pos) => {
            chars.add(this.password.charAt(pos - 1));
        });

        if (
            chars.size === this.positions.length &&
            chars.has(this.requiredCharacter)
        ) {
            return true;
        }
        return false;
    }
}

let file = fs.readFileSync("./2.txt").toString();
let input = file.split("\n");

let regexp = /(?<positionOne>\w+)-(?<positionTwo>\w+) (?<requiredCharacter>\w+): (?<password>\w+)/;

let passwords = [];

input.forEach((line) => {
    const match = regexp.exec(line);
    passwords.push(
        new Password(match.groups.password, match.groups.requiredCharacter, [
            parseInt(match.groups.positionOne),
            parseInt(match.groups.positionTwo),
        ])
    );
});

let totalValid = 0;

passwords.forEach((password) => {
    if (password.isValid) {
        totalValid++;
    }
});

console.log(totalValid);

//  482
