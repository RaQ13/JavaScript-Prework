const people = ["John", "Ive", "Donna", "Chris"];

/**
 * Write your code below!
 */

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printArray(people);

/**
 * Do NOT modify code below!
 */
module.exports = typeof printArray === "undefined" ? null : printArray;