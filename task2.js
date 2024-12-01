
const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8').split('\n').map(line => {
    const [left, right] = line.trim().split(/\s+/).map(Number);
    return { left, right };
});

const leftSide = data.map(item => item.left).sort();
const rightSide = data.map(item => item.right).sort();


let similarityScoreTotal = 0;
let count = 0

for (let i = 0; i < leftSide.length; i++) {
    let similarityScore = 0;
    for (let j = 0; j < rightSide.length; j++) {
        if (leftSide[i] === rightSide[j]) {
            count += 1;
        }
    }
    similarityScore = leftSide[i] * count
    count = 0
    similarityScoreTotal += similarityScore
}
console.log(similarityScoreTotal);