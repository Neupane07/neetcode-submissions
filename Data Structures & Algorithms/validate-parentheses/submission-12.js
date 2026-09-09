class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // [ ( ] )

        // [ ]
       const pairs = {
        '}': '{',
        ')': '(',
        ']': '['
       }

       const stack = [];

       for (let char of s) {
            if(pairs[char]) {
                if(stack.pop() !== pairs[char]) {
                    return false;
                }
            } else {
                stack.push(char);
            }
       }

       return stack.length === 0;
    }
}
