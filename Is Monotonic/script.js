"use strict";

const array1 = [1,2,2,3,4,5,6,6,7] //increase monotonic
const array2 = [1,2,2,1,3,5,4,6,8] //non
const array3 = [8,7,7,6,4,4,3,2,1] //decrease monotonic
const array4 = [7,6,5,8,9,1,2,1,1] //non

const arrays = [array1, array2, array3, array4]

function isMonotonic(arrNums) {
    let isMonotonicIncreasing = true;
    let isMonotonicDecreasing = true;

    for (let i = 0; i < arrNums.length - 1; i++) {
        if (arrNums[i] > arrNums[i + 1]) {
            isMonotonicIncreasing = false;
        }
        if (arrNums[i] < arrNums[i + 1]) {
            isMonotonicDecreasing = false;
        }
    }
    return isMonotonicIncreasing || isMonotonicDecreasing;
}

for (let array of arrays) {
    if (isMonotonic(array)) {
        console.log(`"${array}" is monotonic`);
    } else {
        console.log(`"${array}" is non-monotonic`);
    }
}
