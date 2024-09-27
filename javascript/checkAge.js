// Ex. 4.1.6 (*) - Age Calculator
// Want to find out how old you’ll be? Calculate it!
// • Use prompt() and alert().
// • Ask user for birth year.
// • Ask user for a future year.
// • Calculate the 2 possible ages for the given year.
// • Output them to the screen/console like so: "I will be either NN or NN in YYYY", substituting the values.
// For example, if you were born in 1988, then in 2026 you’ll be either 37 or 38, depending on what month it is in
// 2026.
let age;
let birthYear;
let futureYear;
birthYear = Number(prompt('[?] Please enter your Birth Year (E.g, 2000): '));
futureYear = Number(prompt('[?] Please enter a Future Year (E.g, 2024): '));
while (true) {

    if (isNaN(birthYear)) {
        console.log('[!] That is not a number, input another one.');
        birthYear = Number(prompt('[?] Please enter your Birth Year (E.g, 2000): '));
    } else if (isNaN(futureYear)) {
        console.log('[!] That is not a number, input another one.');
        futureYear = Number(prompt('[?] Please enter a Future Year (E.g, 2024): '));
    } else if (futureYear < birthYear) {
        console.log('[!] That is not a future year');
        futureYear = Number(prompt('[?] Please enter a Future Year (E.g, 2024): '));
    } else {
        age = futureYear - birthYear;
        alert('[+] You will be either ', age, ' or ', (age-1), 'in the year ', futureYear)
        break
    }
}