// // Arrays

// // let arr = []

// // console.log(typeof arr)

// let student = [ 30, true, 'so cool', ['another array', 'Amira', false]];

// if (student instanceof Array === true &&  typeof student === 'object'){
//     console.log(`Hello ${student[3][1]}, you look nice today.`)

// }

// let food = ['pizza', 'tacos', 'bbq', 'ramen', 'fillet', 'brussel sprouts']


// food.push('cheese cake')

// food.splice(3, 2, 'spagehtti', 'chicken') // .splice(position, how many delete, what to put in)

// food.splice(5, 0, 'beer')

// food.pop();

// // food.forEach(f => console.log(f))
// food.forEach((value, number) => {console.log(number); console.log(value)})



// let movies = [ 'Iron Man', 'Thor', 'Captain America', 'Avengers']


// movies.push('Thor 2')
// movies.splice(0, 1, 'Thor Ragnarok')
// movies.forEach(m => console.log(m))


// let newArr = [1,2,3,4,5,6,7,8,9,10]
// console.log(newArr.length)

// let colors = ['blue', 'green', 'yellow', 'black']
// console.log(colors.length)


// let colors = ['blue', 'green', 'yellow', 'black']
// console.log(colors.toString())


// let myName = ['Quentin', 'Augustus', 'Carlin']

// myName.forEach((value, number) => {console.log(value); console.log(number)})


// let arr = ['n','i','t','n','e','u','Q']
//  if (arr instanceof Array === true){
//      let arr = new Array(23)
    
//      let other2 = arr.reverse()

//      let other3 = other2.join()  

//      arr.forEach(a => console.log(a))
//  }







 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
     arr1=[]
     arr2=[]
 
  for (let i = 0; i <= arr.length-1; i++){
  if (i % 2 === 0) {
  arr2.push(arr[i]);
  } else {
    arr1.push(arr[i])
  }
  }
console.log(arr1)
console.log(arr2)