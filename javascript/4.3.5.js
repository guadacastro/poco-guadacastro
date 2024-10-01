// Ex. 4.3.5 (***) - Fibonacci
// Write a program that prints the first 20 numbers of the Fibonacci sequence.

function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

console.log(fibonacci(20));
