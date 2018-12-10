let spec = '!, @, #, $, %, ^, &, *, +, =, ?';

function validPassword(input){
    if (capLetter(input)){
      // console.log(input, "is valid");
    } else{
      // console.log(input, "invalid")
    }
    if (lowerLetter(input)){
        // console.log(input, "is valid")
    } else {
      // console.log(input, "invalid")
    }
    if (longWord(input)){
      // console.log(input, "is long enough")
    } else {
      console.log("Password must have 8 characters")
    }
    if (capLetter(input) && (lowerLetter(input) && (longWord(input) && (special(input))))){
      console.log("valid")
    } 
  }
  function capLetter(input){
    for (let i = 0; i < input.length; i++){
      // console.log(input[i])
      if (input[i] === input[i].toUpperCase()){
          return true;
      }
     }
     return false;
  }
  function lowerLetter(input){
    for (let i = 0; i < input.length; i++){
        if (input[i] === input[i].toLowerCase()){
            return true;
    }
  }
        return false;
}
  function longWord(input){
    for (let i = 0; i < input.length; i++){
      if (input.length > 8){
        return true;
        console.log(input.length)
      }
    }
  }
  function special(input){
    for (let i = 0; i < input.length; i++){
      if (input[i] === spec){
        return true;
        console.log(input, "valid")
      }
    }
  } 
  validPassword('#1passwordS')
