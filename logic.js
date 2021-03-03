//LOGIC THAT WILL DETERMINE PASSWORD VIABLILITY 

function testValidity(passAtmpt){
    
    //requirements to be met
    var lengthValid = false;
    var validLetter = false;
    var validNum = false;
    

    //long enough
    if(passAtmpt.length >= 8){
        lengthValid = true;
    }

    //contains letter
    var alphabet = "abcdefghijklmnopqrstuvqxyz";
    for(var i = 0; i < passAtmpt.length; i += 1){
        if(alphabet.contains(passAtmpt[i]) || alphabet.contains((passAtmpt[i]).toUpperCase())){
            validLetter = true;
            console.log('valid letter')
            break;
        }
    }
    console.log(lengthValid,  validLetter, validNum)


}