class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let max = 0;
        for (let num of set) {
            let current = num;
            let count = 1;
            if (!set.has(num - 1)) {
                while (set.has(current + 1)) {
                    count++;
                    current++;
                }
            }

            if (count > max) {
                max = count;
            }
        }

        return max;
    }
}
