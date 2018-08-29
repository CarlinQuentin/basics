function hi(){
    for (let i = 1; i < 11; i++){
        console.log(i)
    }
}
hi()

let arr = ['This', 'is', 'really', 'cool'];
function ar(){
    for(let item of arr){
        console.log(item)
    }
}
ar()

let arr = ['This', 'is', 'really', 'cool'];
function ar(){
    for(let item in arr){
        console.log(arr[item])
    }
}
ar()


