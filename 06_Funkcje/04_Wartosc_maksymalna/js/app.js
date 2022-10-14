const randomNumbers = [27, 64, 47, 78, 48, 11, 76, 25, 11, 83];

/**
 * Write your code below!
 */

// function maxFromArray(numbers) {
//     let result = Math.max(...numbers);
//     return result;
// }
//
// console.log(maxFromArray(randomNumbers));


function maxFromArray(numbers) {
    let result = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > result) {
            result = numbers[i];
        }
    }
    return result;
}

console.log(maxFromArray(randomNumbers));