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
            let j = i + 1;
            let prod = 1;
            while(j < nums.length) {
                prod *= nums[j];
                j++;
            }

            post[i] = prod;
            i++;
        }

        let k = nums.length - 1;
        while (k >= 0) {
            let j = k - 1;
            let prod = 1;
            while (j >= 0) {
                prod *= nums[j];
                j--;
            }

            pre[k] = prod;
            k--;
        }


        const final = [];

        for (let i = 0; i < nums.length; i++) {
            final.push(pre[i] * post[i]);
        }

        return final;
    }
}
