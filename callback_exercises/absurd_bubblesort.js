const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?`, answer => {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

// askIfGreaterThan(1, 2, answer => console.log(`this is ${answer}`));

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < (arr.length - 1)) {
    console.log(arr);
    askIfGreaterThan(arr[i], arr[i + 1], isGreaterThan => {
      if (isGreaterThan === true) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}
// innerBubbleSortLoop([9,5,4,3,2,1], 0, false, (arr) => console.log(arr));

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  }
  outerBubbleSortLoop(true);
}


absurdBubbleSort([5, 4, 3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// 1. If i < arr.length - 1, it should call askIfGreaterThan, asking the user to compare arr[i] and arr[i + 1].
// 2. For a callback to askIfGreaterThan, pass in an anonymous helper function. This should:
//    2a. Take in a single argument: isGreaterThan; askIfGreaterThan will pass either true or false as this argument.
//    2b. Perform a swap of elements in the array if necessary.
//    2c. Call innerBubbleSortLoop again, this time for i + 1. It should pass madeAnySwaps. Update madeAnySwaps if you did swap.
// 3. Call outerBubbleSortLoop if i == (arr.length - 1). It should receive madeAnySwaps as an argument.




// Do an "async loop":
// 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
//    know whether any swap was made.
// 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
