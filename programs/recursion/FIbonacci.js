// Write a program to print n th fibonacci number 
// To run this prog, go to directory and run `node <fileName>`
let f = [];

const Fib = (n) => {
    if (n <= 1) {
        return n;
    }
    return Fib(n - 1) + Fib(n - 2);
}

// const op = Fib(10);
// console.log(op)

// Optimized way

const Fib2 = (n) => {
    if (n <= 1) {
        f[n] = n;
        return n
    } else {
        if (f[n-2] === -1) {
            f[n-2] = Fib2(n-2)
        }
        if (f[n-1] === -1) {
            f[n-1] = Fib2(n-1)
        }

        return f[n-2] + f[n-1]
    }

}
const RunProg = () => {
    let i;
    for (i=0; i<10;i++) {
        f[i] = -1
    }
    const opp = Fib2(10);
    console.log(opp)
}
RunProg()