  const decodeTheRing = function (s, p) {
    // Two pointers: i for the message (s) and j for the pattern (p)
    let i = 0, j = 0;
    let starIdx = -1, matchIdx = -1;

    while (i < s.length) {
        // Case 1: Characters match or pattern has '?'
        if (j < p.length && (p[j] === s[i] || p[j] === '?')) {
            i++;
            j++;
        }
        // Case 2: Pattern has '*', so try to match zero or more characters
        else if (j < p.length && p[j] === '*') {
            starIdx = j;
            matchIdx = i;
            j++;
        }
        // Case 3: Previous pattern character was '*', try to expand match
        else if (starIdx !== -1) {
            j = starIdx + 1;
            matchIdx++;
            i = matchIdx;
        }
        // Case 4: No match
        else {
            return false;
        }
    }

    // Check remaining pattern characters, they should all be '*'
    while (j < p.length && p[j] === '*') {
        j++;
    }

    return j === p.length;
};

module.exports = decodeTheRing;