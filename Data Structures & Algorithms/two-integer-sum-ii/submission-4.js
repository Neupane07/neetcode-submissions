class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let nums = numbers;
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], i);
        }


        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (map.has(diff) && map.get(diff) !== i) {
                return [i+1, map.get(diff)+1]
            }
        }

    }
}
