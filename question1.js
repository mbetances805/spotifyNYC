const sortByStrings = (inputStr, orderStr) => {
  const inputLetterCount = {};
  let resultStr = '';

  // Populate inputLetterCount with letter and letter count
  for (let i = 0; i < inputStr.length; i++) {
    if (!inputLetterCount[inputStr[i]]) {
      inputLetterCount[inputStr[i]] = 1;
    } else {
      let count = inputLetterCount[inputStr[i]];
      count++;
      inputLetterCount[inputStr[i]] = count;
    }
  }

  // Find matching letters in orderStr and add to resultStr
  for (let j = 0; j < orderStr.length; j++) {
    if (inputLetterCount[orderStr[j]]) {
      let count = 0;
      while (count < inputLetterCount[orderStr[j]]) {
        resultStr += orderStr[j];
        count++;
      }
    }
    delete inputLetterCount[orderStr[j]];
  }

  // For letters not in orderStr add to the end of resultStr
  if (Object.keys(inputLetterCount)) {
    for (let key in inputLetterCount) {
      const count = inputLetterCount[key];
      const pattern = key.repeat(count);
      resultStr = resultStr + pattern;
    }
  }
  return resultStr;
};

// tests
console.assert(sortByStrings('weather', 'therapyw') === 'theeraw');
console.assert(sortByStrings('good', 'odg') === 'oodg');
console.assert(sortByStrings('summertime', 'smytuire') === 'smmmtuiree');
