class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            // Calculate current area
            const hLeft = heights[left];
            const hRight = heights[right];
            const currentArea = Math.min(hLeft, hRight) * (right - left);
            
            if (currentArea > maxArea) {
                maxArea = currentArea;
            }

            // Move the pointers and skip shorter lines
            if (hLeft < hRight) {
                // Keep moving right while the new line is shorter than the old hLeft
                do { left++; } while (left < right && heights[left] <= hLeft);
            } else {
                // Keep moving left while the new line is shorter than the old hRight
                do { right--; } while (left < right && heights[right] <= hRight);
            }
        }

        return maxArea;
    }
}