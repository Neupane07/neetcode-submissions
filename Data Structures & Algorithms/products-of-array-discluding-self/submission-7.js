class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pre = [];
        const post = [];
        const res = [];

        let preProd = 1;
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                pre[i] = 1
            } else {
                preProd *= nums[i - 1];
                pre[i] = preProd;
            }
        }


        let postProd = 1;

        for (let i = nums.length -1; i>= 0; i--) {
            if (i === nums.length - 1) {
                post[nums.length -1] = 1;
            } else {
                postProd *= nums[i + 1];
                post[i] = postProd
            }
        }

        for (let i = 0; i <nums.length; i++) {
            res.push(pre[i] * post[i]);
        }

        return res;
    }
}
