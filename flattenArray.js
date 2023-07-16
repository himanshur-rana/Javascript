const arr = [1, 2, 4, [5, 6, [7, 8]], 9];
console.log('Intial input ----->', arr);

// first way use .flatten method
const result1 = arr.flat(Infinity);
console.log('result1 ----->', result1);

// second way use recursion
const flatArray = (arr) => {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ans.push(flatArray(arr[i]));
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
};

const result2 = flatArray(arr);
console.log('result2 ----->', result1);

// third way use iteration // this can be done using stack

function flattenIterative(arr) {
  const flattened = [];
  const stack = [...arr];
  console.log('stack----', stack);

  while (stack.length) {
    const current = stack.pop();

    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        stack.push(current[i]);
      }
    } else {
      flattened.push(current);
    }
  }

  return flattened.reverse();
}

const result3 = flattenIterative(arr);
console.log('result3-------', result3);
