const validateArr = (arr) => {
  return arr.length >= 3 && arr.length <= Math.pow(10, 4);
};

const validateNumber = (num) => {
  return Number.isInteger(num) && num >= 0 && num <= Math.pow(10, 4);
};

const checkIfIsMountain = (arr) => {
  // If it's a valid input
  if (!validateArr(arr)) {
    return false;
  }
  let increasing = true;
  for (let i = 0; i < arr.length; i++) {
    // Validate current item is valid
    if (!validateNumber(arr[i])) {
      return false;
    }

    if (increasing) {
      // Validate if the item with the next item are not equal
      if (arr[i] === arr[i + 1]) {
        return false;
      // The mountain changes direction
      } else if (arr[i] > arr[i + 1]) {
        if (i === 0) {
          return false;
        }
        increasing = false;
      }
    } else {
      // Check if the direction changes again, in case it changes it means it's wrong
      if (arr[i] <= arr[i + 1]) {
        return false;
      }
    }
  }
  return !increasing;
};

const main = (arr) => {
  console.log(arr, checkIfIsMountain(arr));
  return checkIfIsMountain(arr);
};

export default main;
// main([0, 1, 2, 1, 0]);
// main([1, 2, 1]);
// main([0, 1, 2, 2, 1, 0]);
// main([0, 1, 4, 2, 3, 1]);
// main([0, 1, 2, 2, 4, 1]);
// main([0, 1, 4, 2, 2, 1]);
// main([0, 1, 4]);
// main([0, 1, 1]);
// main([4, 1, 0]);
// main([1, 1, 0]);
// main([0, 1, 4, 2, 3]);
// main([3, 2, 4, 1, 0]);
// main([-1, 0, 2, 0]);
// main([0, 1, 100000, 1, 0]);
// main([0, 1, 10.1, 1, 0]);

// main(["0", "1", "1", "1", "0"]);
