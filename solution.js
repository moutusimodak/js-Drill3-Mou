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

module.exports = { findCarById, findLastCar};