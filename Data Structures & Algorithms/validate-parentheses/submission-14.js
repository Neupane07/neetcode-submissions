class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {
            ']': '[',
            '}': '{',
            ')': '('
        };

        // the idea is to look at current char, if its a closing bracket, check stack top to see that the matching should be a pair of it, if not we can mark false, if it is we just pop the stack last item
        // if it is an opening paranthesis we just push to stack

        const stack = [];

        for (const char of s) {
            if(closeToOpen[char]) {
                if(stack.pop() !== closeToOpen[char]) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
