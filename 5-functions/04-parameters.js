let greeting = function (name) {
    console.log(`Hello, ${name}!`); // this is the more modern and efficient way
}

greeting('Becky'); // Becky is the input and the console.log is the output (I/O)

//

let printMyName = function(fName, lName) {
    let fullName = fName + " " + lName;
    console.log(`Hello, my name is ${fullName}.`);
}

printMyName('Romarie', 'Quinones-Perez'); // this printed -> Hello, my name is Romarie Quinones-Perez undefined.
// the string above is one unit, so we have to type as ('Romarie', 'Quinones-Perez')

//

let calculateBalance = function(debits, credits) {
    // parameter debits = [numbers] array
    // parameter credits = [numbers] array
    let total = 0;
    for (debit of debits) { // the forOf loop will bring back the value
        total -= debit;
    }
    for (credit of credits) {
        total += credit;
    }
        console.log(total); // -207.98 which is the subtraction of myDeb
}

let myDeb = [150.00, 34.00, 23.98]
let myCred = [1000.00, 50.00, 25.00]

calculateBalance(myDeb, myCred);