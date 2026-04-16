class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let str of strs) {
            encoded += `${str.length}#${str}`;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // 5#Hello5#World
        if (str == "0#") {
            return [""];
        }
        const result = [];

        let i = 0;
        while (i < str.length) {
            let currentWord = "";

            let j = i;

            while (str[j] !== "#" && j < str.length) {
                j++;
            }

            let currentWordLength = parseInt(str.substring(i, j));

            currentWord = str.substring(j + 1, j + currentWordLength + 1);
            i = j + 1 + currentWordLength;
            result.push(currentWord);
        }

        return result;
    }
}
