// [10,20,30,40,50,70]
// [5,3,2,5]

// Create a function that multiplies 'like' indexes (0 with 0, 1 with 1, etc.) together then place the value in a new array.

// The function you create should return [50, 60, 60, 200] based on the arrays above.

// Make sure the values given to the function are an array type and they have data inside of them.

// If the first array has more values than the second, return that same number

let arr1 = [ 10, 20 ,30 ,40 ,50]
let arr2 = [5, 2, 4, 2]

function multiply(a, b) {
    let arrSmall = (a.length < b.length) ? a : b
    let arrBig = (a.length > b.length) ? a : b

    let arrResult = arrBig.map((b, xInd) => {
        let multiplier = (arrSmall[xInd] !==undefined) ? arrSmall[xInd] : 1
        
        return b * multiplier
    })

    return arrResult
}

console.log(multiply(arr1, arr2))