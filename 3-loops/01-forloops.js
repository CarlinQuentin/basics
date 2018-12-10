// loops offer a quick and easy way to do somthing repeatedly. there are many loops that do mostly the same thing.
// for statement 
// do while statement 
// labled statement 
// break statement 
// continue statement 
// for in statement 
// for of statement



for (let i = 0; i < 21; i = i+2){
    console.log(i)
}

for (let i = 10; i >=0; i-- ){
    console.log(i)
}

for (let i = 0; i >= -24; i = i-2){
    console.log(i)
}


let str = 'Drew';
for ( let i = 0; i < str.length; i++){
    console.log(str.charAt(i))
}

let sum = 0;
for (let i = 0; i<=50; i = i+1){
    sum = sum + i
    console.log(sum)
}

function tri(base, right, hyp){
    if (base + right === hyp){
        console.log('success')
    } else{
        console.log('fail')
    }
}
    tri(5, 5, 11);