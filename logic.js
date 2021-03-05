//LOGIC THAT WILL DETERMINE PASSWORD VIABLILITY 

function testValidity(passAtmpt, userType){
    
    //requirements to be met
    var requirements = {};
    if(userType === "Admin"){
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
    
    //function checks for letters
    function containsLetter(string){
        var alphabet = "abcdefghijklmnopqrstuvqxyz";
        for(var i = 0; i < string.length; i += 1){
            for(var l = 0; l < alphabet.length; l += 1){
                if(alphabet[l] === string[i] || alphabet === (string[i]).toLowerCase){
                    return true
                }
            }
            
        }
        return false;
    }
    
    //function checks for numbers
    function containsNumber(string){
        var numbers = "0123456789"
        for(var j = 0; j < string.length; j += 1){
            for(var m = 0; m < numbers.length; m += 1){
                if(numbers[m] === string[j]){
                    return true
                }
            }    
        }
        return false;
    }
    
    
    //function checks for special characters
    function countSchar(string){
        var sChar = "!@#$%^&*()_-=+[]\{}|;':\"\"'\\,./<>?\`~";
        var count = 0;
        for(var k = 0; k < string.length; k += 1){
            for(var n = 0; n < sChar.length; n += 1){
                if(sChar[n] == string[k]){
                    count += 1;
                    break;
                }
            }
        }
        return count;
    }
    
    
    //assessment

    requirements.lengthValid = passAtmpt.length >= requirements.length,
    requirements.validLetter = containsLetter(passAtmpt),
    requirements.validNum = containsNumber(passAtmpt),
    requirements.validsChar = countSchar(passAtmpt) >= requirements.sChar,
    requirements.validPass = requirements.lengthValid && requirements.validLetter && requirements.validNum && requirements.validsChar;
    
    return requirements;
}
