// Practicing Maps and Sets

let fruitInventory = new Map ();

    fruitInventory.set('apple', 10);
    fruitInventory.set('banana', 20);
    fruitInventory.set ('orange', 30);

fruitInventory.set('apple', 15);
console.log(fruitInventory);

var bananaInventory = fruitInventory.get ('banana');
console.log('banana supply' + ' ' + bananaInventory);

let uniqueColors = new Set ();
uniqueColors.add('red');
uniqueColors.add('blue');
uniqueColors.add('green');

console.log(uniqueColors);

uniqueColors.add('yellow');

console.log(uniqueColors);

console.log(uniqueColors.has(1));

let hasBlue = uniqueColors.has('blue');