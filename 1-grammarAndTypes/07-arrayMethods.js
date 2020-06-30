let coffee = ['espresso', 'nitro cold brew', 'cappuccino', 'americano', 'cappuccino', 'frappuccino'];

console.log(coffee[2]); // prints 'americano'

let veryBest = coffee.pop();
console.log(veryBest); // returns frappuccino which was 'popped' out the array

console.log(coffee); // lists everything but the last one, fappuccino

coffee.push('latte', 'decaf'); // adds to the end of an array

console.log(coffee);


// Data Structures below:
// stack -> last in, first out -> LIFO: array.pop(); array.push(<item>);
// queue -> first in, first out -> FIFO: array.shift(); array.unshift(<item>);


let firstItem = coffee.shift();
console.log(firstItem); // removed the first item from the array
console.log(coffee); // returns the array without the first item

coffee.unshift('instant', 'drip');
console.log(coffee); // returns 'instant' and 'drip' at beginning of array

console.log(coffee.indexOf('cappuccino')); // returns 4 -> returns the first instance of 'cappuccino'

// If indexOf returns something other than -1, keep looking but keep the number that comes back

coffee.forEach((item) => {
    console.log(item.length); // forEach loop
});

function forEach (callbackfn) { // callbackfn is a function
    for(let i=0; i<coffee.length; i++) { // for loop // arrays always start at index 0
        let itemToUse = coffee[i]; // going into coffee array at position value i
        let index = i; // defining that i = index
        let currentArray = coffee; // coffee will be currentArray

        callbackfn(itemToUse, index, currentArray); // invoking function callbackfn
    }
}

forEach((item, index, myArray) => {
    console.log(item, index, myArray);
  })