// Write a program to print power(n) of given number(m)
// To run this prog, go to directory and run `node <fileName>`

const Pow = (m, n) => {
    if (n === 0) return 1;
    if (n%2 === 0) {
        return Pow(m*m, n/2)
    }
    return m * Pow(m*m, (n-1)/2)
}

const op = Pow(2, 3);
console.log(op); // 8