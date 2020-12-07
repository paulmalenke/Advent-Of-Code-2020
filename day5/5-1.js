let fs = require("fs");

let file = fs.readFileSync("./5.txt").toString();
let input = file.split("\n");

class BoardingPass {
    constructor(bsp) {
        this.bsp = bsp;
        this.bspRow = bsp.substring(0, 7);
        this.bspColumn = bsp.substring(7, 10);
    }

    getSeatId() {
        return this.getRow() * 8 + this.getColumn();
    }

    getRow() {
        let rows = [...Array(128).keys()];
        this.bspRow.split('').forEach(direction => {
            let half = Math.ceil(rows.length / 2);  
            if (direction === "F") {
                rows = rows.splice(0, half);
            } else {
                rows = rows.splice(half, half)
            }
        });
        return rows[0];
    }

    getColumn() {
        let columns = [...Array(8).keys()];
        this.bspColumn.split("").forEach((direction) => {
            let half = Math.ceil(columns.length / 2);
            if (direction === "L") {
                columns = columns.splice(0, half);
            } else {
                columns = columns.splice(half, half);
            }
            // console.log(columns);
        });
        return columns[0];
    }
}

let seatIds = [];

input.forEach((bspString => {
    seatIds.push(new BoardingPass(bspString).getSeatId());
}))

seatIds.sort(function (a, b) {
    return b - a;
}); 

console.log(seatIds[0]);

// Solution 978


