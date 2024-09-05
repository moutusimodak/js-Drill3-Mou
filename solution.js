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



module.exports = { findCarById};