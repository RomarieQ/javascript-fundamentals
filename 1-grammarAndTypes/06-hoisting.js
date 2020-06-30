console.log(name); // 1 console.log(name); IT BROKE HERE - - ReferenceError: Cannot access 'name' before initialization

var name = 'Neil'; // LET and CONST will not allow the hoisting to the top

b();

function b() {
    console.log('I have been hoisted');
}