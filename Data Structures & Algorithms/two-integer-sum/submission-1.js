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
                const value = vMap.get(diff);
                console.log('val', value);
                return [i, value]
            }
            vMap.set(nums[i], i)
        }
    }
}
