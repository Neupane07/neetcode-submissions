class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;

        const res = new Array(n);

        res[0] = 1;

        for (let i = 1; i < n; i++) {
            res[i] = res[i-1] * nums[i-1];
        }

        let rightProd = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] = res[i] * rightProd;
            rightProd = rightProd * nums[i];
        }


        return res;
    }
}
