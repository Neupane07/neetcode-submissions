class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let start = 0;
        let end = s.length - 1;

        const isAlphabet = (char) => {
            return (char >= 'a' && char <= 'z') || 
            (char >= '0' && char <='9');
        }

        while(start < end) {

            //a-z A-Z 0-9
            while (!isAlphabet(s[start]) && start < end) {
                start++;
            }

            while (!isAlphabet(s[end]) && start < end) {
                end--;
            }
            if(s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }

        return true;
    }
}
