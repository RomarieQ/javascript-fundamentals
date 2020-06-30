let num = 6;

// Ternary

(num > 0) ? console.log('yes') : console.log('nah'); // true or false statement with > or < or ==

// can also be written as

(num > 0)
? console.log('yes')
: console.log('nah');

// this above is the same as this below

if (num > 0 && num < 5) {
    console.log('yes');
} else {
    console.log('nah');
}


// if else to ternary below

if (num > 0 && num < 5) {
    console.log('yes');
} else if (num > 5) {
    console.log('I am greater than 5');
} else {
    console.log('nah');
}


(num > 0 && num < 5)
? console.log('yes')
: (num > 5)
    ? console.log('I am greater than 5')
    : console.log('nah');




// Challenge: write the AGE IF/ELSE as a big ternary

// let age = 34;

// if (age >= 25) {
//     console.log('Yay! You can rent a car!');
// } else if (age >= 21) {
//     console.log('Hey, you can purchase alcohol!');
// } else if (age >= 18) {
//     console.log('Hey, you can vote');
// } else {
//     console.log('Hey, sorry bout it bro');
// }


// turning else if into ternary

let age = 34;

(num >= 25)
    ? console.log('Yay, you can rent a car!')
    : (age >= 21)
        ? console.log('Yay, you can buy alcohol')
        : (age >= 18)
            ? console.log('Yay, you can vote')
            : console.log('Sorry bout it');