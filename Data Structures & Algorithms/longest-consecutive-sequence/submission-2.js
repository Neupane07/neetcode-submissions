class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;

        const set = new Set(nums);

        //[ 4,2,20,10,3,4,5]

        // find the starting point
        let startingNumber = nums[0];

        for (let i = 0; i < nums.length; i++) {
            if (!set.has(nums[i] - 1) && nums[i] < startingNumber) {
                startingNumber = nums[i];
            }
        }

        let max = 1;
        for (let i = 0; i < nums.length; i++) {
        let count = 1;

            let current = nums[i];

            while (set.has(current + 1)) {
                current++;
                count++;
            }

            if (count > max) {
                max = count;
            }
        }

        return max;
    }
}
