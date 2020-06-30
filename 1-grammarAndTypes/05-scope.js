let myName = 'Carson';

function someProcess() { // local scope is everything in {}
    const myName = 'X-AESH-12';
    console.log(myName);
}

console.log(myName); // global scope outside {}

someProcess(); // if you place this above console.log it will print out first

//

let y = 12;

function scopey() {
    y = 33;
    console.log(y);
}

console.log(y); // this will print first as 12
scopey(); // this will be next as 33 - y is re-initialized as 33 so the last console.log is 33
console.log(y); // this will be next as 33 since we changed the value of y

//

let slope = 12;

function varTest() {
    let slope = 56;
    if (true) {
        let slope = 9001;
        console.log(slope);
    }
    console.log(slope);
}

varTest();
console.log(slope);

