const inventory = require('./data');
// Question 1
function findCarById(id) {
    if (id === undefined || id === null) {
        return null; 
    }

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            return inventory[i]; 
        }
    }

    return null; 
}

// Question -2
function findLastCar(inventory){
    if (inventory.length === 0) {
        return 'The inventory is empty.';
    }
    
    return inventory[inventory.length -1];
}

// Question -3
function sortcar(inventory){
    const cmodel =[]
    if (inventory.length === 0) {
        return 'The inventory is empty.';
    }
    
    for (let i = 0; i < inventory.length; i++) {
        
        cmodel.push(inventory[i].car_model);
    }
    cmodel.sort();
   return cmodel;
}

// Question -4
function carYear(inventory){
    const cyear =[]
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i] && typeof inventory[i] === 'object' && typeof inventory[i].car_year === 'number') {
            cyear.push(inventory[i].car_year);
        }
        
    }
  
   return cyear;
}

// Question -5
function carsOlderThan2000() {
  
    const years = carYear(inventory);
    console.log(' my Years:', years); 

    const olderYears = [];
    for (let i = 0; i < years.length; i++) {
        if (years[i] < 2000) {
            olderYears.push(years[i]);
        }
    }

    console.log('Number of Cars Older Than 2000:', olderYears.length);
    for (let i = 0; i < olderYears.length; i++) {
        const car = inventory[i]
        console.log(`Car details is - ${car.id} ,${car.car_make} ${car.car_model}, ${car.car_year}, `);   
        
    }
    return olderYears;
}


// Question -6

function CarName(inventory){
    const carlist =[]
    if (inventory.length === 0) {
        return 'The inventory is empty.';
    }
    
    for (let i = 0; i < inventory.length; i++) {
        
        if(inventory[i].car_make === 'BMW' || inventory[i].car_make === 'Audi'){
            carlist.push(inventory[i].car_make);
            
        }
    }
    return carlist;
  
   
}

module.exports = { findCarById, findLastCar, sortcar, carYear, carsOlderThan2000, CarName};