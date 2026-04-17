class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let i = 0;
        let post = [];
        let pre = [];
        while (i < nums.length) {
            if (i === 0) {
                pre[i] = 1;
            } else {
                pre[i] = pre[i - 1] * nums[i - 1];
            }
            i++;
        }

        let endIdx = nums.length - 1;
        let j = endIdx;
        while (j >= 0) {
            if (j === endIdx) {
                post[endIdx] = 1;
            } else {
                post[j] = post[j + 1] * nums[j + 1];
            }

            j--;
        }

        const final = [];

        for (let i = 0; i < nums.length; i++) {
            final.push(pre[i] * post[i]);
        }

        return final;
    }
}
