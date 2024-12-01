
const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8').split('\n').map(line => {
    const [left, right] = line.trim().split(/\s+/).map(Number);
    return { left, right };
});

const leftSide = data.map(item => item.left).sort();
const rightSide = data.map(item => item.right).sort();


let totalDifference = 0;
let difference = 0

for (let i = 0; i < leftSide.length; i++) {
    if (rightSide[i] > leftSide[i]) {
        difference = rightSide[i] - leftSide[i];
    } else {
        difference = leftSide[i] - rightSide[i];
    }

    totalDifference =  totalDifference + difference;
}
 console.log(totalDifference);
