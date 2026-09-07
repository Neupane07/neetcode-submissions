class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let l = 0;
        let r = l+1;
        let maxProfit = 0;
        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
            } else {
                maxProfit = Math.max(maxProfit, prices[r] - prices[l]);

            }
            r++;
        }

        return maxProfit;
    }
}
