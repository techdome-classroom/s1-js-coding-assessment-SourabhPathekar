const decodeTheRing = function (message, key) {
  // Helper function to check if message matches the key with wildcards
  const match = (message, key, i, j) => {
      if (j === key.length) return i === message.length;  // If key is exhausted, check if message is also exhausted
      if (key[j] === '*') {
          // Case when '*' matches zero characters or more characters
          return match(message, key, i, j + 1) || (i < message.length && match(message, key, i + 1, j));
      }
      if (i < message.length && (key[j] === '?' || key[j] === message[i])) {
          // Case when '?' matches any single character, or current key and message characters match
          return match(message, key, i + 1, j + 1);
      }
      return false;
  };

  return match(message, key, 0, 0); // Initial call to the helper function
};

module.exports = decodeTheRing;
