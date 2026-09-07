class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // 1 7 2 5 4 7 3 6
        let maxArea = 0;

        let l = 0;
        let r = heights.length - 1;


        while (l < r) {
            const width = r - l;
            const height = Math.min(heights[l], heights[r]);

            maxArea = Math.max(maxArea, height * width);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxArea;
    }
}
