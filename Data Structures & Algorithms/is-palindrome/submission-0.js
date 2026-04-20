class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        const n = s.length;

        let i = 0;
        let j = n - 1;
        while (i <= j) {
            if (s[i] !== s[j]) {
                return false;
            };
            i++;
            j--;
        }

        return true;
    }
}
