function findOdd(arr) {
    //happy coding!
    let count = 0;
    let newArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr.length; j++) {
        if (newArr[i] == newArr[j]) {
          count++;
        }
      }
      if (count % 2 !== 0) {
        return newArr[i];
      }
    }
  }
  