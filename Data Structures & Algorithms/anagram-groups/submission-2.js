class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let str of strs) {
            const key = str.split('').sort().join('');

            if(map.has(key)) {
                const existingValues = map.get(key);
                existingValues.push(str);
                map.set(key, existingValues);
            } else {
                map.set(key, [str])
            }

        }

        return Array.from(map.values())
    }
}
