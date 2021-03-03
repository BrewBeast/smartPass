//LOGIC THAT WILL DETERMINE PASSWORD VIABLILITY 

function testValidity(passAtmpt, userType){
    
    //requirements to be met

    var requirements = {
        lengthValid: false,
        validLetter: false,
        validNum: false,
        validsChar: false,
        validPass: false
    }

    if(userType === "admin"){
        requirements.type = "admin";
        requirements.length = 13;
        requirements.letters = 1;
        requirements.nums = 1;
        requirements.sChar = 1;

    }else{
        requirements.type = "normal"
        requirements.length = 8;
        requirements.letters = 1;
        requirements.nums = 1;
        requirements.sChar = 0;
    }


    //long enough
    if(passAtmpt.length >= requirements.length){
        console.log("password is long enougn at " + passAtmpt.length + " characters long")
        requirements.lengthValid = true;
    }else{
        console.log("password is too short at " + passAtmpt.length + " characters long")
    }

    //contains letter
    var alphabet = "abcdefghijklmnopqrstuvqxyz";
    for(var i = 0; i < passAtmpt.length; i += 1){

        if(alphabet.contains(passAtmpt[i]) || alphabet.contains((passAtmpt[i]).toLowerCase())){
            requirements.validLetter = true;
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
            requirements.validNum = true;
            console.log('valid number')
            break;
        }else{            
            console.log("not a valid number")
        }
    }

    //contains a special characters
    var sChar = "!@#$%^&*()_-=+[]\{}|;':\"\"'\\,./<>?\`~";
    var count = 0;
    for(var k = 0; k < passAtmpt.length; k += 1){
        if(sChar.contains(passAtmpt[k])){
            count += 1;
            console.log("valid special character")
        }else{            
            console.log("not a valid special character")
        }
        if(count >= requirements.sChar){
            requirements.validsChar = true;
            console.log('meets required special character count')
            break;
        }

    }

    if(requirements.lengthValid && requirements.validLetter && requirements.validNum && requirements.validsChar){
        requirements.validPass = true;
    }

    return requirements;
}