const inventory = require("./data");
const {findCarById, findLastCar, sortcar, carYear, carsOlderThan2000,CarName} = require("./solution")

const carId = findCarById(33);

    if (carId) {
        console.log(`Car ${carId.id} is a ${carId.car_year} ${carId.car_make} ${carId.car_model}`);
    } else {
        console.log('Car not found');
    }


