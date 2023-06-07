// Write a program to print sum of n natural numbers
// To run this prog, go to directory and run `node <fileName>`

const SumOfNarutalNums = (num) => {
    if (num === 0) {
        return 0;
    }
    return SumOfNarutalNums(num - 1) + num;
}

const op = SumOfNarutalNums(100);
console.log(`Sum of natural numbers is ${op}`)


