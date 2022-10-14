const numbers = [2, 4, 5, 2, 3, 5, 1, 2, 4];

/**
 * Write your code below!
 */

// function indexOfRepeatedValue(array) {
//     let firstIndex = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[firstIndex] === array[i]) {
//             break;
//         }
//     }
//     console.log(firstIndex);
//     return firstIndex;
// }
//
// const result = indexOfRepeatedValue(numbers);
// console.log(result);

function indexOfRepeatedValue(array){
    let firstindex = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] == firstindex) {
            return true;
        }

    }
    return firstindex;
}
console.log(indexOfRepeatedValue(numbers, "5"));

