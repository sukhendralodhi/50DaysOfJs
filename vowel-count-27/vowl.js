// Numnber of vowel in stringcd 

// function getCount(str) {
//     let vowelsCount = 0;
//     // enter your magic here
//     str = str.toLowerCase();
//     for (char of str) {
//       if (["a", "e", "i", "o", "u"].includes(char)) {
//         vowelsCount += 1;
//       }
//     }
  
//     return vowelsCount;
//   }
  
//   console.log(getCount("sanju"));


/*Another solution*/

// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = 'hello';

const result = countVowel(string);

console.log(result);