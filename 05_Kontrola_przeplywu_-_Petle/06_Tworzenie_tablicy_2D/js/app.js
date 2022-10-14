const numbers = [];
const columns = 4;
const rows = 5;

// for (let i = 0; i < rows; i++) {
//     numbers[i] = [];
//     for (let j = 0; j < columns; j++) {
//
//         numbers[i].push(j + i * columns + 1);
//     }
// }
// console.log(numbers);

/** drugie rozwiazanie */

let k = 1;
for (let i = 0; i < rows; i++) {
    numbers.push([]);
    for (let j = 0; j < columns; j++) {
        numbers[i].push(k);
        k++;
    }
}

console.log(numbers);