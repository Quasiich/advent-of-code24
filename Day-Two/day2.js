const fs = require('fs');
const data = fs.readFileSync('input2.txt', 'utf-8').split('\n').map(line =>
    line.split(' ').map(Number))

// TASK 1

const isIncreasing = (currentValue, index, array) =>
    index === 0 || currentValue > array[index - 1];
const isDecreasing = (currentValue, index, array) =>
    index === 0 || currentValue < array[index - 1];

const workingDifference = (currentValue, index, array) => {
    if (index === 0) return true;
    return Math.abs(currentValue - array[index - 1]) <= 3
}


let count = 0
data.forEach(array => {
    const increasing = array.every(isIncreasing);
    const decreasing = array.every(isDecreasing);
    const withinDifference = array.every(workingDifference);

    if ((increasing || decreasing) && withinDifference) {
        count++;
    }
});

console.log(count);

// TASK 2

const canBecomeValid = (array, isIncreasing, isDecreasing, workingDifference) => {
    const increasing = array.every(isIncreasing);
    const decreasing = array.every(isDecreasing);
    const withinDifference = array.every(workingDifference);

    if ((increasing || decreasing) && withinDifference) {
        return true;
    }

    for (let i = 0; i < array.length; i++) {
        const modArray = array.filter((_,index) => index !== i)

        if ((modArray.every(isIncreasing) || modArray.every(isDecreasing)) && modArray.every(workingDifference)) {
            return true;
        }
    }
    return false;
}

let count2 = 0;
data.forEach(array => {
    if (canBecomeValid(array, isIncreasing, isDecreasing, workingDifference)) {
        count2++;
    }
})
 console.log(count2);