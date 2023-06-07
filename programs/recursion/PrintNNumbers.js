// Prob: Print frist n numbers using recursion (In ascending order)
// To run this prog, go to directory and run `node <fileName>`

const printNNumbers = (num) => {
    let n = num;
    if (n > 0) {
        printNNumbers(n - 1);
        console.log(n);
    }
}

printNNumbers(100);