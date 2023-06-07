// Write a prog to explain about nested recursion
// To run this prog, go to directory and run `node <fileName>`

const NestedRecursion = (num) => {
    const n = num;
    if (n > 100) {
        console.log(n);
        return n - 10;
    }
    return NestedRecursion(NestedRecursion(n + 11))
}


NestedRecursion(95);