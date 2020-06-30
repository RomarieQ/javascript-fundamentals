function hi() {
    console.log('Ayo');
}

hi(); // prints the first 'Ayo'
hi; // does not print
console.log(hi); // prints Function: hi
console.log(hi()); // prints undefined


// Create a function that, when invoked, lists out the numbers between 1-10;

function sup() {
    for (let sup = 1; sup <= 10; sup++) {
        console.log(sup);
    }
}


let printNumbers = function () { // you don't have to have a name on a function (we took out potato after the function word)
                                // BUT you can't do this -> function() without anything on the left ie, let printNumber = ....
    for (let i = 1; i < 10; i++) {
        console.log(i);
    }
}

printNumbers(); // will print the numbers 1-9

console.log(printNumbers); // prints [Function: potato] because it is undefined and set as a function



// IIFE -> Immediately-invoked Function Expression
(function() {console.log('Why is this working')})();