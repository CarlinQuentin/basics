// var x = 12;
// // global scope
// function scope(){
//     // local scope
//     var x = 33;
//     console.log(x)
// }
// console.log(x)
// scope()

// function varTest(){
//     var scope = 1
//     if (true) {
//         var scope = 2
//         console.log(scope)
//     }
//     console.log(scope)
// }
// varTest()

// function letTest(){
//     let scope = 1 
//     if (true){
//         let scope = 2
//         console.log(scope)
//     }
//     console.log(scope)
// }
// letTest()

function constTest(){
    const scope = 1
    if (true){
        const scope = 2
        console.log(scope)
    }
    console.log(scope)
}
constTest()


// TLDR: let and const - block scope; var is not