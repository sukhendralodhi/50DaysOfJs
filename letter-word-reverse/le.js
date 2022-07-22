// function spinWords(sentence){
//     const sentenceArray = sentence.split(' ');
//     let result = '';
//     sentenceArray.map((str, i) => {
//       if (str.length >= 5){
//         sentenceArray[i] = str.split('').reverse().join('');
//       } else {
//         sentenceArray[i] = str;
//       }
//     result = sentenceArray.join(' ');
//     });return result;
//   }

//   console.log(spinWords('Hellosanju'));

let spinWords = (str)=> {
    return str.split(' ').map(function(word) {
        return (word.length > 4) ? word.split('').reverse().join(''):word;
    }).join(' ');
}

console.log(spinWords('sanju'));