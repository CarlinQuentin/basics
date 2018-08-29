function capName(name){
    let cap='';
    for (let r in name){
        if(r == 0){
            cap += name[r].toUpperCase();
        } else {
            cap += name[r].toLowerCase();
        }
    }
    // console.log(cap)
    return cap
}
 const myName = capName('parKeR')
 console.log(myName + ' How are ypu doing?');


 function tipCal(thi){
     
     let cost ='10'
     let tips= cost * 0.20;
     return tips
 }
 const now = tipCal()  
 console.log(`You owe $${now} in tips`)
