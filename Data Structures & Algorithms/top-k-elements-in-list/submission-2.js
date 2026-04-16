class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (freqMap.has(nums[i])){
                freqMap.set(nums[i], freqMap.get(nums[i]) + 1)
            } else {
                freqMap.set(nums[i], 1);
            }
        }

        const resultSorted = Array.from(freqMap.entries()).sort((a,b) => b[1] - a[1]);
        const final = [];

        for (let i = 0; i < k; i++) {
            final.push(resultSorted[i][0])
        }

        return final;
    }
}
