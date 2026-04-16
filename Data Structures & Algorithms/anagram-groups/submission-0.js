class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = new Map();
        for (let str of strs) {
            const sortedStr = str.split('').sort().join('');
            if (strMap.has(sortedStr)) {
                const existingValue = strMap.get(sortedStr);

                existingValue.push(str)
                strMap.set(sortedStr, existingValue)
            } else {
                strMap.set(sortedStr, [str])

            }
        }

        return Array.from(strMap.values())
    }
}
