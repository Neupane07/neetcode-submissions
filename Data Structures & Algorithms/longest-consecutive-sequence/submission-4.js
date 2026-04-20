class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;

        const set = new Set(nums);

        let max = 1;
        for (let i = 0; i < nums.length; i++) {
            let count = 1;

            let current = nums[i];

            if (!set.has(current - 1)) {
                while (set.has(current + 1)) {
                    current++;
                    count++;
                }

                if (count > max) {
                    max = count;
                }
            }
        }

        return max;
    }
}
