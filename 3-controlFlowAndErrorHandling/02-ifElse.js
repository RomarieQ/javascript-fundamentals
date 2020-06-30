let temperature = 75;

if (temperature < 65) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}


let name = 'Romarie'; // to test, always change this to test the else statement

if (name === 'Romarie') {
    console.log('Your name is ' + name);
    console.log(`Your name is ${name}`); // this is another way of doing the same as the console.log above
} else {
    console.log(`Hello, is your name ${name}?`); // when writing it this way, don't forget to use the `` (backwards single quote)
}


// ifElse -> written as else if (this is a block below)
let age = 34;

// older than 25, say "Yay! You can rent a car!"
// older than 21, but not 25, say "Hey, you can purchase alcohol"
// older than 18, but not 21, say "Hey, you can vote!"
// younger than 18, say "You can do stuff one day"
if (age >= 25) {
    console.log('Yay! You can rent a car!');
} else if (age >= 21) {
    console.log('Hey, you can purchase alcohol!');
} else if (age >= 18) {
    console.log('Hey, you can vote');
} else {
    console.log('Hey, sorry bout it bro');
} // else is always written last in the block, and we don't need to write this last else statement, only if you want to catch any other case that is less than 18