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
            let postProd = 1;
            while(j < nums.length) {
                postProd *= nums[j];
                j++;
            }

            let y = i - 1;
            let preProd = 1;
            while (y >= 0) {
                preProd *= nums[y];
                y--;
            }

            post[i] = postProd;
            pre[i] = preProd
            i++;
        }


        const final = [];

        for (let i = 0; i < nums.length; i++) {
            final.push(pre[i] * post[i]);
        }

        return final;
    }
}
