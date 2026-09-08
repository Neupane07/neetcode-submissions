class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // -1, 0, 1, 2, -1, -4
        // -4, -1, -1, 0, 1, 2
        nums = nums.sort((a,b) => a-b);// sorted
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            //skip already calculated values in first position
            if (i > 0 && nums[i] === nums[i-1]) continue;

            let l = i+1;
            let r = nums.length - 1;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum > 0) {
                    r--;
                } else if (sum < 0){
                    l++;
                } else {
                    // equal to 0 add triplet to res
                    res.push([nums[i], nums[l], nums[r]])

                    l++;
                    r--;

                    while (l < r && nums[l] === nums[l-1])l++;
                    while (l < r && nums[r] === nums[r+1])r--;
                }
            }
        }

        return res;
    }
}
