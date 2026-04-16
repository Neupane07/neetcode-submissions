class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const set = new Set();

        for (let i=0; i < nums.length; i++) {
            const currentItem = nums[i];
            if (set.has(currentItem)) {
                return true;
            }
            set.add(currentItem);
        }

        return false;
    }
}
