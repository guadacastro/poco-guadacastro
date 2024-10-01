//Binary calculator

//1. Prompt user for binaryNumber
let binaryNumber = prompt('[?] Enter binary number: ');
//2. check if it is binary (only 0s or 1s)

let result = 0;

//3. check if each digit in the input is 1 or 0
function validateBinary(number) {
    for (let digit of number) {
        if (digit != '1' && digit != '0') {
            return false;
        }
    }
    
    return true;
}

//4. while this validation is false => re prompt the binary number.
 while (!validateBinary(binaryNumber)) {
     console.log('[!] This is not binary. Please enter again.');
     binaryNumber = prompt('[?] Enter binary number: ');
 }
 
// math ecuation
function binToDec(binary) {
    for( let i = (binaryNumber.length-1) ; i >= 0 ; i-- ) {
        result += Math.pow(2, binaryNumber.length-1-i) * Number(binary[i]);
        
    }
    return result;
    
}
//print the result
console.log('[+] The decimal representation is: ' + binToDec(binaryNumber));

