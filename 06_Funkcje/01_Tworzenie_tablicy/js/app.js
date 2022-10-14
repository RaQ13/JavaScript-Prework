function createArray(rows) {
    const array = [];
    for (let i = 1; i <= rows; i++) {
        array.push(i);
    }
    return array;
}

let variableArray = createArray(5);
console.log(variableArray);

// lub

console.log(createArray(5));