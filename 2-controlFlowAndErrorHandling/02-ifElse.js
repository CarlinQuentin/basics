let myName = ' Quentin     '

if (myName.trim() == 'Quentin'){
    console.log(`Hello, my name is ${myName.trim()}.` )
} else {
    console.log('Hello, what is your name?')
}

function capWords(str){
    return str.replace(/\w\s*/g, function(txt){
        return txt. charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
}
console.log(capWords (name))



let name = 'sTEvEN';

if (name[0] == name[0].toUpperCase()){
    let firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
}else {
    let otherletters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherletters)
}

let coffee = 'hot';
if (coffee == 'hot'){
    console.log('Do something')
} else if (coffee == 'warm') {
    console.log('Do something else')
} else {
console.log('do somthing again')
}

var age = 24;

 if (age > 24){
    console.log('Yay! You can rent a car!');
    console.log('Yay! You can drink!');
    console.log('Yay! You can vote');
} else if (age >20){
    console.log('Yay! You can drink!');
    console.log('Yay! You can vote');
} else if (age >17){
    console.log('Yay! You can vote'); 
}else if(age <= 17){
    console.log('Sorry, you\'re too young to do anything');
}

let dot = 12;
let other = '12'

if(dot === other){
    console.log('they match')
} else {
    console.log('dont match')
}