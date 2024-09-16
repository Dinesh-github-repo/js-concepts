// function reverse(str){
//     const strToArray = str.split('')
//     strToArray.reverse();
//     return strToArray.join('')
// }

// console.log(reverse('Hi'))

function reverse(str) {
    let reverseStr = '';
    for(let char of str){
        reverseStr = char + reverseStr;
    }
    console.log(reverseStr)
}
reverse('hello')