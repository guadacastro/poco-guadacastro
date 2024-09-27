
while (true) {
    let firstNumber = prompt("[?] Write your first number: ");
    let secondNumber = prompt("[?] Write your second number: ");
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log("[!] This is not a Number, please enter the numbers again.")
    } else{
        let sum = firstNumber + secondNumber;
        alert("[+] The sum is: " + sum)
        break
    }
}
