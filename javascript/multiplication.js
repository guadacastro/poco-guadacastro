// Ex. 4.1.8 (*) - Print multiplication table
// Write a program that prints the multiplication table of the number 7. (Use a loop)

let tableNumber = Number(prompt('[?] Multiplication table of (e.g. 7): '));
let i = 0;

while (i <= 10) {
    if (isNaN(tableNumber)) {
        console.log('[!] You did not enter a number. Please enter another one.');
        tableNumber = Number(prompt('[?] Multiplication table of (e.g. 7: '));
    } else {
            console.log('[+] ', tableNumber, ' X ', i, ' = ', tableNumber*i);
            i+=1;
    }
}
