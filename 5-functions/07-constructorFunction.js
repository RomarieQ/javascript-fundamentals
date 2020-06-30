// let person1 = {
//     name: "Macy",
//     age: 24,
//     canVote: true
// }

// let person2 = {
//     name: "Nicolas",
//     age: 56,
//     canVote: true
// }

// let person3 = {
//     name: "Argyle",
//     age: 15,
//     canVote: false
// }

// ********this above is not modular!!********

// function createPerson (name, age, canVote) {    // *****this is still long******
//     let person = {
//         name: name,
//         age: age,
//         canVote: canVote
//     }
//     return person;
// }


function Person (name, age, canVote) {
    this.name = name;
    this.age = age;
    this.canVote = age >= 18; // 'this.' is nothing without 'new' below - 'this.' attaches keys to the object that comes back

    this.greeting = () => `Hello, my name is ${this.name}`; // () holds the string after the =>
}


// Instances of a person object
let person1 = new Person('Macy', 24, true); // 'new' determines how the function operates (will return key value pairs)
console.log(person1); // prints Person { name: 'Macy', age: 24, canVote: true }
console.log(person1.age); // prints the persons age 24
console.log(typeof person1); // prints object
console.log(person1 instanceof Person); // prints true


let seth = new Person('Seth', 54);
let troy = new Person('Troy', 12);

console.log(seth.greeting());
console.log(troy.greeting()); // we need () to invoke the function, listed above