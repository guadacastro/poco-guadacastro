// Ex. 4.1.10 (*) - Play with arrays and for loop
// Initialize two variables to hold the string LaunchCode and the array [1, 5, 'LC101', 'blue', 42], then
// construct for loops to accomplish the following tasks:
// a) Print each element of the array to a new line.
// b) Print each character of the string -in reverse order- to a new line.

let string = 'LaunchCode';
let array = [1, 5, 'LC101', 'blue', 42];

console.log("[*] elements inside the array: ")
for (const i in array) {
    console.log('[+] ', array[i]);
}


console.log('[*] String in reverse: ')
let splitArray = string.split('')

for (let j = ((splitArray.length)-1); j >= 0 ; j-- ){
    console.log('[+]', splitArray[j]);
}