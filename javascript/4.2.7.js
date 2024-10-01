let password;

//makes the user prompt the password again until there is a valid password.
do {
    password = prompt('[?] Enter a password: ');
    console.log(validatePassword (password) ? '[+] Password is valid!' : '[!] Password is invalid, enter again');
} while (!validatePassword(password)); 


//validates if the password is valid
function validatePassword(password) {
    let specialSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '='];
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let specialSymbolCount = 0;
    let numberCount = 0;

    if (password.length <= 8) {
        console.log('[!] Password must be at least 8 characters long');
        return false;
    }

    for (let char of password) {
        if (specialSymbols.includes(char)) {
            specialSymbolCount++;
        } 
        if (numbers.includes(char)) {
            numberCount++;
        }
        if (char === ' ' || char === '\t') {
            console.log('[!] Password cannot contain spaces or tabs');
            return false;
        }
    }

    if (specialSymbolCount < 1 || numberCount < 1) {
        console.log('[!] Password must contain at least one number and one special symbol');
        return false;
    }

    return true;
}

