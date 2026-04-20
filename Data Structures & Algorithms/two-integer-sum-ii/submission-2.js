class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n = numbers.length;

        const result = [];
        for (let i = 0; i < n; i++) {
            const diff = target - numbers[i];
            for (let j = 0; j < n; j++) {
                if (i!==j && numbers[j] === diff) {
                    return [i+1, j+1];
                } 
            }
        }

        return result;
    }
}
