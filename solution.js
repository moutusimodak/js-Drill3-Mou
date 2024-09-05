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

module.exports = { findCarById, findLastCar, sortcar, carYear};