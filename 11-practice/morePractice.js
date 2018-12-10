let object = { Name: 'Quentin',
               Age: 18,
               };

function myFunction(obj1){
    let obj2 = { Name: '',
                Age: '',          
    }
    obj2.Age  = obj1.Name
    obj2.Name = obj1.Age
    console.log(obj2)

}
console.log(object)
myFunction(object)