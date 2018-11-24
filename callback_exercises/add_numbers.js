const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    reader.close();
    return completionCallback(sum);
  } else {
    reader.question('Pick a number', answer => {
      let userNum = parseInt(answer);
      sum += userNum;
      console.log(`Partial sum: ${sum}`);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
}
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
// 
// Pass a callback that:
// 1. Uses parseInt to parse the input.
      
// 2. Increment the sum and console.log it.

// 3. Recursively calls addNumbers again, passing in:
//      the increased sum,
//      the decreased numsLeft,
//      and the same completionCallback.

