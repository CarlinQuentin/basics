// let favoriteSuperheroes = [
//     {name: "Wonder Woman", universe: "DC"},
//     {name: "Loki", universe: "Marvel"},
//     {name: "Aquaman", universe: "DC"},
//     {name: "Black Widow", universe: "Marvel"},
//     {name: "Thor", universe: "Marvel"},
//     {name: "Hawkeye", universe: "Marvel"},
//     {name: "Doctor Strange", universe: "Marvel"},
//     {name: "The Flash", universe: "DC"},
//     {name: "Scarlet Witch", universe: "Marvel"}
// ]
// let marvelHeros = [];
//   for (h of favoriteSuperheroes){
//       if (h.universe === 'Marvel'){
//           marvelHeros.push(h)
//       }
//   }
// console.log(marvelHeros)

// function hello(name){
//     console.log(`Hello there, ${name}`)
// }
// hello('Steve')

// let hello = name => console.log(`hello there ${name}!`)
// hello('Steve')

// function fullname(first, last){
//     return first + ' ' + last
// }
// console.log(fullname('Quentin', 'Carlin'))

// return is the finish of a function, nothing else under it will run. 
// return gets things from the global scope
// can only have one return

// let fullname = (first, last) => first + ' ' + last
// console.log(fullname('Quentin', 'Carlin'))

// a one line arrow function automatically returns
// with multiple lines you need to specify



// MAp allows us to preform the same action on every array

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let biggerNumbers = numbers.map(number => number * 4)
// make a new variable to store the new array
// oldArray.map(a name => what we want to do to each item)
// console.log(biggerNumbers);
// console.log(numbers);


// let oldArray = ['this is my oldArray']
// let newArray = oldArray.map(cap => cap.toUpperCase())
// console.log(oldArray);
// console.log(`${newArray}`.toUpperCase());

// Filter
// we can use this to go through an array and only return  items that match our condition

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let oddNumbers = numbers.filter( number => number % 2 !== 0) 
// console.log(oddNumbers)

// let names = ['john', 'jon', 'johan']
// let shortNames =  names.filter( three => three.length <= 3)
// console.log(shortNames)


// let favoriteSuperheroes = [
//     {name: "Wonder Woman", universe: "DC"},
//     {name: "Loki", universe: "Marvel"},
//     {name: "Aquaman", universe: "DC"},
//     {name: "Black Widow", universe: "Marvel"},
//     {name: "Thor", universe: "Marvel"},
//     {name: "Hawkeye", universe: "Marvel"},
//     {name: "Doctor Strange", universe: "Marvel"},
//     {name: "The Flash", universe: "DC"},
//     {name: "Scarlet Witch", universe: "Marvel"}
// ]
// let marvelHero = favoriteSuperheroes.filter( marvel => marvel.universe === 'Marvel' )
// console.log(marvelHero)



// let people = [
//     {name: "Paul", title: "Instructor"},
//     {name: "Carolyn", title: "Instructor"},
//     {name: "Tyler", title: "Instructor"},
//     {name: "David", title: "Instructor"},
//     {name: "Kenn", title: "Instructor"},
//     {name: "Tom", title: "Instructor"},
//     {name: "Quentin", title: "Student"},
//     {name: "Aurelia", title: "Student"},
//     {name: "Hope", title: "Student"},
//     {name: "Caleb", title: "Student"},
//     {name: "Daniel", title: "Student"},
//     {name: "Austin", title: "Student"},
//     {name: "Robin", title: "Admin"},
//     {name: "Alex", title: "Admin"},
//     {name: "Bob", title: "Admin"},
//     {name: "Chris", title: "Admin"},
//     {name: "Abi", title: "Admin"}
//   ]

// // let InstructorName = people.filter( people => people.title === "Instructor")
// // console.log(InstructorName

// // )
// let results = (arr, str) => arr.filter(person => person.title === str)
// console.log(results(people, 'Student')) 


