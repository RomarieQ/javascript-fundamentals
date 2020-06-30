/*
​
- write a for loop running between the numbers 0 - 100
- for multiples of 3, instead of the number, console.log "Fizz"
- for multiples of 5 console.log "Buzz";
- for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
- for any other number, console.log the value
​
*/


for (let counter = 0; counter <= 100; counter++) {

     // if counter is mult of 3 AND 5, log "Fizz Buzz"
    if (counter % 15 === 0) { //ORDER MATTERS, I MOVED THIS FROM BELOW!!
        console.log('FizzBuzz');
    }
    // if counter is mult of 3, log "Fizz"
    else if (counter % 3 === 0) {
        console.log('Fizz');
    }
    // if counter is mult of 5, log "Buzz"
    else if (counter % 5 === 0) {
        console.log('Buzz');
    }
    // otherwise log counter
    else {
        console.log(counter);
    }
}