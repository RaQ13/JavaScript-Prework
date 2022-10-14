const car = {
    type: "sedan",
    color: "green",
    engine: 2.5
};

let carDescription = car.type + " " + car.color + " " + car.engine;
console.log(carDescription);

let color = {
    red: 100,
    green: 0,
    blue: 50
};

let referenceColor = color;
referenceColor.red = 50;
referenceColor.green = 50;