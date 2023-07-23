
const reverseString = (param) => {
    for (let i = 0, j = param.length - 1; i < j; i++, j--) {
        [param[i], param[j]] = [param[j], param[i]];
    }
    return param;
}

reverseString('hello');


// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
// abcdefg -> bacdfeg

var reverseStr = function (s, k) {
    // Method:1

    // const reverseSubString = (str, start, end) => {
    //     let result = '';
    //     for (let i = str.length - 1; i >= start; i--) {
    //         result += str.chartAt(i)
    //     }
    //     return result;
    // }

    // let result = '';

    // let i = 0;
    // while (i < s.len) {
    //     const chunk = chunk + reverseSubString(s, i, i + k);
    //     result += chunk + s.slice(i + k, i + 2 * k);
    //     i += 2 * k;
    // }
    // return result;

    // const arr = s.split('');
    // for (let i = 0; i < arr.length; i += 2 * k) {
    //     const temp = arr.slice(i, i + k);
    //     temp.reverse();
    //     arr.splice(i, k, ...temp);
    // }
    // return arr.join('');

    // method 2
    let result = '';
    for (let i = 0; i < s.length; i += 2 * k) {
        const subStr = s.slice(i, i + k);
        result += subStr.split('').reverse().join('');
        result += s.slice(i + k, i + 2 * k)
    }
    return result;
};

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc";

let reverseWords = function (s) {
     const temp = s.split(' ');
    let opData = [];
    for (let i=0;i<temp.length;i++) {
        opData.push(temp[i].split('').reverse().join(''));
    }
    return opData.join(' ') ;
};
