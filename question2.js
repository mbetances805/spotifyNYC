const decodeString = (encodedStr) => {
  const patternStack = [];
  let decodedStr = '';

  for (let i = encodedStr.length - 1; i >= 0; i--) {
    const currentChar = encodedStr[i];

    if (currentChar === ']') {
      patternStack.push(decodedStr);
      decodedStr = '';
    } else if (currentChar === '[') {
      let count = '';
      // Check if the number of k repetition is a one digit number
      while (encodedStr[i - 1] && !isNaN(encodedStr[i - 1])) {
        const num = encodedStr[i - 1];
        i--;
        count = num + count;
      }
      count = Number(count);
      const pattern = decodedStr.repeat(count);
      decodedStr = pattern + patternStack.pop();
    } else if (isNaN(currentChar)) {
      decodedStr = currentChar + decodedStr;
    }
  }
  return decodedStr;
};

// tests
console.assert(decodeString('4[ab]') === 'abababab');
console.assert(decodeString('2[b3[a2[t]]]') === 'battattattbattattatt');
console.assert(decodeString('2[b3[a]]') === 'baaabaaa');
console.assert(decodeString('1[bc3[af]]') === 'bcafafaf');
