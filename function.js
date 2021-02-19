// Array
var cars = ["Nisan", "Volvo", "BMW"];
cars.push("Tomtom", "Auto", 7, 45);
cars[2] = "Niloy";
// console.log(cars)
// cars.pop();
// console.log(cars)

for (var i in cars) {
    if (cars[i] == "CNG") {
        cars[i] = "Pera";
    }
    console.log(cars[i])
}

