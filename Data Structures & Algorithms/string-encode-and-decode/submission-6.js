class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for (let str of strs) {
            encodedStr += `${str.length}#${str}`;
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while ((str[j] !== "#") & (j < str.length)) {
                j++;
            }

            const strLength = parseInt(str.substring(i, j));

            result.push(str.substring(j + 1, j + strLength + 1));
            i = j + strLength + 1;
        }

        return result;
    }
}
