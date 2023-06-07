// Write a prog for Tree recursion.
// To run this prog, go to directory and run `node <fileName>`

const TreeRecursion = (n) => {
    if (n > 0) {
        console.log(n);
        TreeRecursion(n - 1);
        TreeRecursion(n - 1);
    }
}

TreeRecursion(3);