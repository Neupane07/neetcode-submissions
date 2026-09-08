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
            if (closingMap.has(char) && (stack.at(-1) === closingMap.get(char))) {
                stack.pop()
            } else {
                stack.push(char);
            }
        }

        if (stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}
