class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // -1, 0, 1, 2, -1, -4
        // -4, -1, -1, 0, 1, 2
        // target = 0;


        nums = nums.sort((a,b) => a-b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1]) {
                continue;
            }

            let start = i+1;
            let end = nums.length - 1;

            while(start < end) {
                const sum = nums[i] + nums[start] + nums[end];

                if (sum === 0) {
                    res.push([nums[i], nums[start], nums[end]]);
                    start++;
                    while(nums[start] === nums[start -1] && start < end) {
                        start++;
                    }   
                } else if( sum > 0) {
                    end--;
                } else {
                    start++;
                }

            }
        }

        return res;
    }
}
