class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {


        const map = new Map();

        for (let n of nums) {
            if (!map.has(n)) {
                map.set(n, 1)
            } else{
                map.set(n, map.get(n) + 1)
            }
        }

        // 1: 1, 2: 2, 3: 3
        const sortedFrequentItems = Array.from(map.entries()).sort((a,b) => b[1] - a[1]).map((el) => el[0])


        return sortedFrequentItems.slice(0, k);
        
    }
}
