// let sentence = ['This'];
// let vowel = ['a', 'e', 'i', 'o', 'u'];
// let newWord = '';
// let add = 'ay';
// for (let i of sentence){
//      for (j of vowel){
//         if (i[0] !== j){
//          console.log(i + add);
//     } else if(i[0] === j){
//          console.log('this')
//     }
// }
//  }
// console.log(sentence)

/*array1 = ['yellow', 'blue', 'red', 'green', 'purple', 'orange', 'pink', 'tan', 'maroon', 'skyblue']
array2 = ['st', 'nd', 'rd', 'th', 'th', 'th', 'nth', 'th', 'th', 'th']
function colors(){
    for (let i = 0; i < 10; i++){
        console.log(array1[i] + ' is '+ (i+1) + array2[i])
            }
} 

colors(); */

//let str;


// function translate(str) {
//     let pigLatin;
//     let regex = /[aeiou]/gi;
//     if (str[0].match(regex)) {
//         pigLatin = str + 'ay';
//     } else {
//         let firstVowel = str.indexOf(str.match(regex)[0]);
//         pigLatin = str.substr(firstVowel) + str.substr(0, firstVowel) + 'ay';
//     }
//     console.log(str + ' in pig latin:' + pigLatin)
// }

// translate('dying')


function pigLatin(phrase) {
    let igpay = phrase.toLowerCase().split(' ')
    let atinlay = [];
    igpay.forEach(i => {
        atinlay.push(i.replace(i, i.slice(1) + i[0] + 'ay '))
    })
    console.log(atinlay.join(''))
}


pigLatin('this is a fun challenge')