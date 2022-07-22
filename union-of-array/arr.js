let arr1 = [2,4,5,6,9,8,9,2];
let arr2 = [12,6,5,9,5,6,3];

function unionOfArray(arr1, arr2) {
    let union = [...new Set([...arr1, ...arr2])];
    return union;
}

console.log(unionOfArray(arr1,arr2));