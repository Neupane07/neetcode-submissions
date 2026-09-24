class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        const isAlphaNumeric = (ch) => {
            if(!ch.trim()) return false;

            if ((ch >= 'A' && ch <= 'Z') ||
                (ch >= 'a' && ch <= 'z') ||
                (ch >=0 && ch <= 9)
            ) {
                return true;
            }

            return false;
        }


        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while((l < r) && !isAlphaNumeric(s[l])) {
                l++;
            }

            while((l < r) && !isAlphaNumeric(s[r])) {
                r--;
            }

            if (s[l] !== s[r]) {
                return false;
            }

            l++; 
            r--;
        }

        return true;
        
    }
}
