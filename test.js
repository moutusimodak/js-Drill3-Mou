const inventory = require("./data");
const {findCarById, findLastCar, sortcar, carYear, carsOlderThan2000,CarName} = require("./solution")

//1
const carId = findCarById(33);

    if (carId) {
        console.log(`Car ${carId.id} is a ${carId.car_year} ${carId.car_make} ${carId.car_model}`);
    } else {
        console.log('Car not found');
    }


//2
const lastcarlist = findLastCar(inventory);
    // console.log(car);
console.log(`Last car is a ${lastcarlist.car_make} ${lastcarlist.car_model}`);
    

//3
const sortedcar = sortcar(inventory);
const sortedCarList = sortedcar.join('\n')
console.log(`sorted car lists - ${sortedCarList}`);

//4
const carYearList = carYear(inventory);
console.log(`${carYearList} \n`);

//5
const olderCar = carsOlderThan2000(2000);
console.log(`${olderCar}`);

// 6
const names = CarName(inventory);
console.log(JSON.stringify(names));