// forInLoops help work through objects


 let student = {name: 'Peter', awesome: true, degree: 'Javascript', week: 1}

// for (item in student){
//     console.log(item) // prints the keys
//     console.log(student[item]) // prints the value of the keys
// }

 let catArray = ['tabby', 'british shorthair', 'burmese' ]
// for (let cat in catArray){
//     console.log(cat)
//     console.log(catArray[cat])
// }


// let studentName = 'queNtin'
// let capName;
// for (let name in studentName){
//     let x = studentName[0].toUpperCase();
//     let y = studentName.toLowerCase();
//     console.log(x + y)
// }

 let name = 'paUL'
 let capName;
 for (let p in name){
     if (p == 0){
     capName = name[p].toUpperCase();
 } else {
     capName += name[p].toLowerCase();
 }
 console.log(capName)
 }


