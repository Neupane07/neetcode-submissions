class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        // brute force;

        const st = [];
        const res = new Array(n).fill(0);

        for (let i = n - 1; i >= 0; i--) {
            while (temperatures[i] >= temperatures[st.at(-1)] && st.length !== 0) {
                st.pop();
            }

            if (st.length !== 0) {
                res[i] = st.at(-1) - i;
            }

            st.push(i);
        }

        return res;
    }
}
