class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closingMap = new Map([
            ['}', '{'],
            [']', '['],
            [')', '(']])

        const stack = [];
        for (let char of s) {
            if (closingMap.has(char)) {
                if (stack.pop() !== closingMap.get(char)) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0
    }
}
