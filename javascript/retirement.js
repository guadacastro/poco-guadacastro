//1. Prompt user to write currentAge
let currentAge = Number(prompt('[?] How old are you?: '));

//2. check while currentAge is not valid => ask user to prompt currentAge again
while (!currentAge || currentAge <= 0) {
    console.log('[!]Please enter valid age\n')
    currentAge = Number(prompt('[?] How old are you?: '));
}
//3. Prompt user to write retirementAge 
let retirementAge = Number(prompt('[?] At which age you want to retire?: '));
//4. Check while retirementAge is not valid or retirementAge is less or equal than the currentAge => re prompt the retirementAge
while (!retirementAge || retirementAge <= currentAge) {
    console.log('[!] Please enter valid retirement age\n')
    retirementAge = Number(prompt('[?] At which age you want to retire?: '));
}

//5. Caculate the difference between the retirementAge and currentAge
const diff = retirementAge - currentAge; 
// 6. Determine currentYear
const currentYear = Number(new Date().getFullYear());
//7. Calculate retirementYear based on currentYear + diff
const retirementYear = currentYear + diff;

//8. Print the final results.
console.log('[+] You have ' + diff +  ' years left until you can retire!.')
console.log('[+] It is ' + currentYear + ', so you can retire in ' + retirementYear);