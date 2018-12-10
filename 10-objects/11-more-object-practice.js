function callbackFunction(){
    for(let i = 0; i <100; i++){
    console.log(i)
}

const data = {
    name: 'Quentin Carlin',
    age: 18,
    occupation: 'coder'
}
return data;
}

function showData(dataFromFuntion){
    return "hello " + dataFromFuntion.name
}

console.log(
    showData(callbackFunction())
)


var amIGood = false;

var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure',
            };
            resolve(gift);
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty);
        }
    }
);

