class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        if(n === 0) return 0;
        // water trapped at any given point = Math.min(left_max, right_max) - height[i];

        let leftMax = [];
        let rightMax = [];

        leftMax[0] = height[0];
        rightMax[n-1] = height[n-1];


        for (let i = 1; i < n; i++) {
            leftMax[i] = Math.max(leftMax[i-1], height[i])
        }

        for (let i = n-2; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i+1], height[i])
        }

        let res = 0;
        for (let i = 0; i<n; i++) {
            res += Math.min(leftMax[i], rightMax[i]) - height[i]
        };

        return res;
    }
}
