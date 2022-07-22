
let iterable = [2,2,6,5,6,4,5,6,9,8];
// console.log(iterable);
// console.log(strArr);

let uniqueInOrder = (iterable)=> {
    let strArr = Array.isArray(iterable) ? iterable : iterable.split('');
    let unique = [...new Set(strArr)];
    return unique;;
};
console.log(uniqueInOrder(iterable));



//codeddamn solution for this problem

// let uniqueInOrder = (iterable) => {
//     //your code here - remember iterable can be a string or an array
  
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
//   };
