let i = 7;
// For loop controller ie: (1 ; 2 ; 3)
// position 1: Variable declaration and/or initialization
// position 2: Condition to run the loop (needs to be true)
// position 3: Incrementation or change to allow the condition to fail or equal false
for (i = 0; i < 10; i++) {
    console.log('nice');
    // increment i
    // verify conditional (hop up if true, leave loop if false)
}



// this is the typical way to see the for loop (below)
for (let i = 0; i < 10; i++) { // i now only excists in the for loop, if you want i to be declared, then do the above
    console.log('nice');
}



// we can also let i stay as 7 (below)
for (i; i < 10; i++) { // there has to be 3 statements in here
    console.log('nice');
}


// ******CONTROL Z KILLS THE INFITE LOOP******


for (let z = 0; z <= 20; z += 2) {
    console.log(z);
}



for (let z = 10; z >= 0; z--) {
    console.log(z);
}


let name = 'PatrickStarrIsSoDumbAndSometimesIJustCannotStandHim';
let pCharacter = name[name.length - 1]; // you can also write [name.length - 1] to see how many characters are in the string
console.log(pCharacter); // when you look at the (name.lengt) make it (name.length - 1)



let myName = 'Romarie';
for (let x = 0; x < myName.length; x++) {
    console.log(myName[x]);
}


// this is shorthand from above -> this is a "for of loop"
for (let c of myName) { // (in the parenthesis is the controller)
    console.log(c);
}

// the above works for arrays too
let invoice = [3.1, 4.1, 89.98, 3.50];
let total = 0;

for (let i = 0; i < invoice.length; i++) {
    total = total + invoice[i];
}

console.log(total);



for (let b of invoice) {
    console.log(b);
}

