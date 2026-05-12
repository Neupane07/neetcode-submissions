class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const result = [];
        const vMap = new Map();

        for (let i = 0; i< nums.length;i++) {
            vMap.set(nums[i], i)
        }

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];


            if (vMap.has(diff) && vMap.get(diff) !== i) {
                result[0] = vMap.get(diff);
                result[1] = i;
            }

        }

        return result;
    }
}
