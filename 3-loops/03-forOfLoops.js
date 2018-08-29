let student = {name: 'Peter', awesome: true, degree: 'Javascript', week: 1}

for (key of student){
    console.log(key)
}

let catArray = ['tabby', 'british shorthair', 'burmese' ]

for (cat of catArray){
    console.log(cat, 'says meow');
}

for (cat in catArray){
    console.log(cat)
}
