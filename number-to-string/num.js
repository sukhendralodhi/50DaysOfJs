let input1 = 12;
let input2 = 734;

let expandedForm = (input) => {
    let numStr = input.toString().split('');

    for(let i = 0; i < numStr.length; i++) {
        for(let y = numStr.length-1; y > 1; y--) {
            numStr[i] + "0";
        }
    }
    return numStr.join('+');
}

console.log(expandedForm(input2));