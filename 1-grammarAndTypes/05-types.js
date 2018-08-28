// Types 

var bool = true;
console.log(bool);
let noBool = false;
console.log(bool, noBool);

// Null

var empty = null
console.log(empty);

// undefined

// numbers
var time = 17;
console.log(time);

var percise = 999999999999999;
console.log(percise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

// strings

let stringOne = "double quotes"
let stringTwo = 'single quotes'
console.log(stringOne, stringTwo);

let first = 1050 + 100;
console.log(first);

let second = '1050' + '100';
console.log(second);

console.log(typeof first);
console.log(typeof second);

let third = 1050 + '100';
console.log(third);

var chicken = 7
console.log(chicken + 4);








var myname = 'Quentin';
var name = 'Carlin';
var house = 213;
var street = 'S Harrison St';
var city = 'Garrett';
var state = 'In';
var zip = 46738
console.log( 'My name is', myname, name +', I live at',  house, street, city, state, zip);


// objects hold multiple data types
let tacoNow = {
size: 'large',
quantity: 4,
now: true
}
console.log( typeof tacoNow);


// Arrays

let tacoLater = [
    'large',
    4,
    true
]
console.log( typeof tacoLater);