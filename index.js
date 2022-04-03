const compress = (s) => {
  // Keep track of results
  let result = '';

  // Initialize two pointers
  let i = 0;
  let j = 0;

  // Iterate over string(s)
  // Javascript uses out of bounds indexing
  while (j <= s.length) {
    // Start a streak
    // if character index i is the same as character index j
    // currently on a streak
    if (s[i] === s[j]) {
    // continue to look for end of streak
      j++
    } else {
      // found a different character
      // end of streak
      num = j - i

      // Singleton case
      // if there is only instance og the character
      if (num === 1) {
        // concat only the character
        result += s[i]
      } else {
        // concat the num and character
        result += num + s[i]
      }
      i = j
    }
  }
  
  console.log('result:', result)
  // return result
};




compress('ccaaatsss'); // -> '2c3at3s'

// compress('ssssbbz'); // -> '4s2bz'

// compress('ppoppppp'); // -> '2po5p'

// compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'

// compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
// // -> '127y'