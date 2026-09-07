class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().trim();
        let start = 0;
        let end = s.length - 1;

        const isAlphabet = (char) => {
            return (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) ||
            (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
        }

        while(start < end) {

            //65 - 90 97-122
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
