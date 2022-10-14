const n = 3;
const calc = [];

/**
 * Write your code below!
 */

for (let i = 1; i <= n; i++) {
    calc.push([]);
    for (let j = 1; j <= n; j++) {
        if (j < n) {
            calc[i - 1].push(i + ' x ' + j + ' = ' + i * j + " |");
        }
        else {
            calc[i - 1].push(i + ' x ' + j + ' = ' + i * j);
        }
    }
}

console.log(calc);