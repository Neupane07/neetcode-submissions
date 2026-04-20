class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n = numbers.length;

        let i = 0;
        let j = n - 1;


        while (i < j) {
            if (numbers[i] + numbers[j] === target) {
                return [i+1, j+1];
            }

            if (numbers[i] + numbers[j] > target) {
                j--;
            }

            if (numbers[i] + numbers[j] < target) {
                i++;
            }
        }
    }
}
