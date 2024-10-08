const decodeTheRing = function (message, key) {
  // Helper function to check if message matches the key with wildcards
  const match = (message, key, i, j) => {
      // If key is exhausted, check if message is also exhausted
      if (j === key.length) return i === message.length;

      // Case when '*' matches zero characters or more characters
      if (key[j] === '*') {
          return match(message, key, i, j + 1) || (i < message.length && match(message, key, i + 1, j));
      }

      // Case when '?' matches any single character, or current key and message characters match
      if (i < message.length && (key[j] === '?' || key[j] === message[i])) {
          return match(message, key, i + 1, j + 1);
      }

      // If there is no match
      return false;
  };

  // Initial call to the helper function
  return match(message, key, 0, 0);
};

module.exports = decodeTheRing;
