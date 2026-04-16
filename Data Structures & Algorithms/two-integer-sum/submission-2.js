class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let vMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];

            if (vMap.has(diff)) {
                return [i, vMap.get(diff)]
            }
            vMap.set(nums[i], i)
        }
    }
}
