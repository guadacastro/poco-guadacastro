// Ex. 4.2.7 (**) - Password validator
// a) Write a program that asks the user for a password and checks if it is valid. The password must
// • at least be 8 characters long
// • include 1 special symbol
// • include 1 number
// • not include a space or either
// b) Write a program that generates a password according to the requirements above. Use your validator
// written in a).

// a)

let password = '12!45678';

function validatePassword(password) {
    let specialSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '='];
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let specialSymbolCount = 0;
    let numberCount = 0;

    if (password.length < 8) {
        return false;
    }

    for (const char of password) {
        if (specialSymbols.includes(char)) {
            specialSymbolCount++;
        }
        if (numbers.includes(char)) {
            numberCount++;
        }
        if (char === ' ' || char === '\t') {
            return false;
        }
    }

    if (specialSymbolCount < 1 || numberCount < 1) {
        return false;
    }

    return true;
}

if (validatePassword(password)) {
    console.log('Password is valid');
} else {
    console.log('Password is invalid');
}