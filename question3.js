const changePossibilities = (amount, coins) => {
  const amountGrid = new Array(amount + 1);
  amountGrid[0] = 1;
  // amountGrid's indices will represent different amounts up to our required amount
  for (let column = 1; column < amountGrid.length; column++) {
    amountGrid[column] = 0;
  }
  numCombinations(amountGrid, amount, coins, 0);
  return amountGrid[amount];
};

// Populate the amountGrid with the number of possible combinations
const numCombinations = (amountGrid, amount, coins, pointer) => {
  if (pointer > coins.length) {
    return;
  }
  const coin = coins[pointer];
  for (let sum = 1; sum < amountGrid.length; sum++) {
    if (sum >= coin) {
      amountGrid[sum] += amountGrid[sum - coin];
    }
  }
  // Traverse the coins array to determine the number of ways to make amount
  return numCombinations(amountGrid, amount, coins, ++pointer);
};

// tests
console.assert(changePossibilities(4, [1, 2, 3]) === 4);
console.assert(changePossibilities(5, [1, 2, 5]) === 4);
console.assert(changePossibilities(10, [1, 2, 5]) === 10);
