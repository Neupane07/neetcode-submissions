class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftProd = 1;
        let rightProd = 1;
        const left = [];
        const right = [];

        for (let i = 0; i < nums.length; i++) {
            if(i === 0) {
                left[i] = 1;
            } else {
                leftProd = leftProd * nums[i-1];
                left[i] = leftProd;
            }
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                right[i] = 1;
            } else {
                rightProd = rightProd * nums[i+1];
                right[i] = rightProd;
            }
        }


        const res = [];
        for (let i = 0; i < nums.length; i++) {
            res[i] = left[i] * right[i];
        }

        return res;
    }
}
