// Write a program to print factorial of n numbers
// To run this prog, go to directory and run `node <fileName>`

const Fact = (num) => {
    if (num === 1) {
        return 1;
    }
    return num * Fact(num - 1);
}

const op = Fact(10);
console.log('factorial ', op)