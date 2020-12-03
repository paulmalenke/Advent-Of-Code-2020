let fs = require("fs");

class Password {
    constructor(password, requiredCharacter, minRequired, maxRequired) {
        this.password = password;
        this.requiredCharacter = requiredCharacter;
        this.minRequired = minRequired;
        this.maxRequired = maxRequired;
    }

    get isValid() {
        return this.checkValidity();
    }

    checkValidity() {
        let re = new RegExp(this.requiredCharacter, "g");
        let occurrences = (this.password.match(re) || []).length;
        if (
            occurrences >= this.minRequired &&
            occurrences <= this.maxRequired
        ) {
            return true;
        }
        return false;
    }
}

let file = fs.readFileSync("./2.txt").toString();
let input = file.split("\n");

let regexp = /(?<minRequired>\w+)-(?<maxRequired>\w+) (?<requiredCharacter>\w+): (?<password>\w+)/;

let passwords = [];

input.forEach(line => {
    const match = regexp.exec(line);
    passwords.push(new Password(match.groups.password, match.groups.requiredCharacter, match.groups.minRequired, match.groups.maxRequired));
});

let totalValid = 0;

passwords.forEach(password => {
    if (password.isValid) {
        totalValid++;
    }
});

console.log(totalValid)

// 483