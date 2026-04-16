class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let solution = [...nums];
        for (let i = 0; i < nums.length; i++) {
            let product = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue;

                product *= nums[j];
            }
            solution[i] = product;
        }   
        return solution;     
    }
}
