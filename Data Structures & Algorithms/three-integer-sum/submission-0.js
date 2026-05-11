class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        const n = nums.length;
        const result = [];

        for (let i = 0; i < n; i++) {
            if (nums[i] === nums[i - 1]) {
                continue;
            }
            let left = i + 1;
            let right = n - 1;
            let target = -nums[i];

            while (left < right) {
                if (nums[left] + nums[right] > target && left < right) {
                    right--;
                } else if (nums[left] + nums[right] < target && left < right) {
                    left++;
                } else {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                }
            }
        }

        return result;
    }
}
