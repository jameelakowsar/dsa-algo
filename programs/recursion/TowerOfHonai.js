// Write a program for tower of hanoi 
// To run this prog, go to directory and run `node <fileName>`

const TOH = (num, A, B, C) => { // no of disks, tower1 (source), tower2(used tower), tower3(target)
    if (num > 0) {
        TOH(num - 1, A, C, B);
        console.log(A, C);
        TOH(num - 1, B, A, C)
    }
}

const op = TOH(4, 1, 2, 3)