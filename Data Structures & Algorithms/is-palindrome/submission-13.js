class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNumeric = (ch) => {

            if (
                (ch >= 'a' && ch <= 'z') ||
                (ch >= '0' && ch <= '9')
            ) {
                return true;
            }

            return false;
        }


        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while((l < r) && !isAlphaNumeric(s[l].toLowerCase())) {
                l++;
            }

            while((l < r) && !isAlphaNumeric(s[r].toLowerCase())) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++; 
            r--;
        }

        return true;
        
    }
}
