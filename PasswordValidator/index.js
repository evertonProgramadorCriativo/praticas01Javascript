function hasUppercase(input){
    for(var i = 0; i<input.length; i++){
        if(input[i] === input[i].toUpperCase()) {
            return true;
        }
    }
}

function hasLowercase(input) {
    for( var i = 0; i<input.length; i++) {
        if (input[i] === input[i].toLowerCase()) {
            return true;
        }
    }
}

function isLongEnough(input) {
    if(input.length >= 8) {
        return true;
    }
}

function hasSpecialCharacter(input) {
    var specialCharacters = ['!','@','#','$','%','^','&','*'];
   

    for (var i = 0; i<input.length; i++) {
        for (var j = 0; j<specialCharacters.length; j++){
            if (input[i] === specialCharacters[j]) {
                return true;
            }
        }
    }
}


function isPasswordValid(input){
    if (hasUppercase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
        console.log('This password is valid.');
    }

    if(!hasUppercase(input)) {
        console.log('This passwords needs a capital letter!')
    }
    if(!hasLowercase(input)){
        console.log('This passwords needs a lowercase letters')
    }
    if (!isLongEnough(input)) {
        console.log('Your passwords needs at least 8 letters!')
    }
    if (!hasSpecialCharacter(input)) {
        console.log('Your passwords needs a special character!')
    }
}


isPasswordValid('HAaHaaaaa')