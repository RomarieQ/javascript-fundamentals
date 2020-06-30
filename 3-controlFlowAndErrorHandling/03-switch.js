let officeCharacter = 'Pam';

switch (officeCharacter) {
    case 'Michael':
        console.log('My mind is going a mile an hour');
        break;
    case 'Dwight':
        console.log('Perfectenschlag');
        break;
    case 'Jim':
        console.log('Bears. Beets. Battlestar Galactica');
        break;
    default:
    console.log(`I'm sorry, ${officeCharacter}, but do I know you?`); // default is the final in the block!!
}


let temperature = 79;

// >90 "It's hot"
// >50 "Jacket"
// >0 "Coat"

switch (true) {
    case (temperature >= 90):
        console.log('It is hot!!');
        break; // a break is going to stop running if it is true, if you get rid of the break it will console.log all responses instead of stopping at break if true
    case (temperature < 90 && temperature >= 50):
        console.log('You need a jacket!');
        break;
    case (temperature < 50 && temperature >= 0):
        console.log('You need a coat!');
    default:
        console.log('You are colder than a lot of things!!');
}