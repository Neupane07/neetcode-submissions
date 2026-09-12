class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;

        // let l = 0;
        // let r = 1;

        // while (r < prices.length) {
        //     if (prices[r] < prices[l]) {
        //         l = r;
        //     } else {
        //         maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
        //     }
        //     r++;
        // }

        // return maxProfit;

        // brute force
        for (let i = 0; i < prices.length; i++) {
            for (let j = i+1; j < prices.length; j++) {
                maxProfit = Math.max(maxProfit, prices[j] - prices[i])
            }
        }

        return maxProfit;
    }
}
