class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        let leftProd = 1;
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                result[i] = 1;
            } else {
                result[i] = leftProd * nums[i - 1];
                leftProd *=  nums[i - 1];
            }
        }

        let rightProd = 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            result[i] = (rightProd * nums[i + 1]) * result[i];
            rightProd *=  nums[i + 1];
        }

        return result;
    }
}
