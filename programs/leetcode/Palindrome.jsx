/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let sum = 0;
    let temp = x;
    while (temp > 0) {
        sum = (sum * 10) + (temp % 10);
        temp = ~~(temp / 10);
    }

    return sum === x
};

isPalindrome();