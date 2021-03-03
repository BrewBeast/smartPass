//LOGIC THAT WILL DETERMINE PASSWORD VIABLILITY 

function testValidity(passAtmpt){
    
    //requirements to be met
    var lengthValid = false;
    var validLetter = false;
    var validNum = false;
    

    //long enough
    if(passAtmpt.length >= 8){
        console.log("password is long enougn at " + passAtmpt.length + " characters long")
        lengthValid = true;
    }else{
        console.log("password is too short at " + passAtmpt.length + " characters long")
    }

    //contains letter
    var alphabet = "abcdefghijklmnopqrstuvqxyz";
    for(var i = 0; i < passAtmpt.length; i += 1){

        if(alphabet.contains(passAtmpt[i]) || alphabet.contains((passAtmpt[i]).toLowerCase())){
            validLetter = true;
            console.log('valid letter')
            break;
        }else{            
            console.log("not a valid letter")
        }
    }

    //contains a number
    var numbers = "0123456789"
    for(var j = 0; j < passAtmpt.length; j += 1){

        if(numbers.contains(passAtmpt[j])){
            validNum = true;
            console.log('valid number')
            break;
        }else{            
            console.log("not a valid number")
        }
    }

    console.log(lengthValid,  validLetter, validNum)

    var validPass = false;
    if(lengthValid || validLetter || validNum){
        return passAtmpt + " is an acceptable password"
    }else{
        return passAtmpt + " is not an acceptable password"
    }

}