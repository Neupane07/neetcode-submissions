class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;

        const stack = [];

        for (const char of s) {
            if(char === ']') {
                if (stack.pop() !== '[') return false;
            } else if (char === '}') {
                if (stack.pop() !== '{') return false;
            } else if (char === ')') {
                if (stack.pop() !== '(') return false;
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
