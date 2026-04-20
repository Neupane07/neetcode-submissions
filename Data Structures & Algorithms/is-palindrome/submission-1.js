class Solution {

    /**
     * Checks if a char is alpha-numeric
     * @param {char} c
     * @return {boolean}
     */
    isAlphanumeric(c) {
        const char = c.toLowerCase()
        const isLetter = char >= 'a' && char <= 'z';
        const isNumber = char >= '0' && char <= '9';


        return isLetter || isNumber;
    }

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
            
            while (!this.isAlphanumeric(s[i])) {
                i++;
            }

            while (!this.isAlphanumeric(s[j])) {
                j--;
            }


            if (s[i] !== s[j]) {
                return false;
            };
            i++;
            j--;
        }

        return true;
    }
}
