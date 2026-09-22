class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map();


        for (let i = 0; i < nums.length; i++) {
            if(countMap.has(nums[i])) {
                countMap.set(nums[i], countMap.get(nums[i]) + 1)
            } else {
                countMap.set(nums[i], 1)
            }
        }

        const frequenciesSorted = Array.from(countMap.entries()).sort((a,b) => b[1] - a[1]).map(x => x[0]);

        return frequenciesSorted.slice(0,k);
        
    }
}
