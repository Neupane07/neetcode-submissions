class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // cant sort as have to preserve order
        const n = heights.length;

        let maxArea = 0;
        let left = 0;
        let right = n - 1;
        while(left < right) {
            const smallerHeight = Math.min(heights[left], heights[right]);
            const currentArea = smallerHeight * (right-left)

            maxArea = Math.max(maxArea, currentArea);
            if(heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
            
        }

        return  maxArea;
    }
}
