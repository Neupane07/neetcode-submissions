class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();

        let l = 0;

        let maxLength = 0;

        // Move r from left to right and add to charset only while left does not have a repeated entry
        // while map has s[r]
        //      delete s[l] from set and move l forward
        for (let r = 0; r < s.length; r++) {
            while (charSet.has(s[r])) {
                charSet.delete(s[l])
                l++;
            }

            charSet.add(s[r]);

            maxLength = Math.max(maxLength, r - l + 1)
        }
        return maxLength;
    }

}
