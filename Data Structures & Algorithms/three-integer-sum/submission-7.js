class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // -1, 0, 1, 2, -1, -4
        // -4, -1, -1, 0, 1, 2
        nums = nums.sort((a,b) => a-b)
        const res = [];


        for (let i = 0; i < nums.length; i ++) {
            let l = i+1; 
            let r = nums.length - 1;

            if (i > 0 && nums[i] === nums[i-1]) {
                continue;
            }
            while (l < r) {

                const sum = nums[i] + nums[l] + nums[r];

                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;

                    while (l < r && nums[l-1] === nums[l]) l++;
                    while (l < r && nums[r+1] === nums[r]) r--;
                }
            }
        }

        return res;
    }
}
