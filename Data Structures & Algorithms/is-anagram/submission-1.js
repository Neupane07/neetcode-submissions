class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map();
        const tMap = new Map();

        for (let i = 0; i < s.length; i++) {
            const currentItem = s[i];

            sMap.set(currentItem, sMap.get(currentItem) ? sMap.get(currentItem) + 1 : 1);
        }

        for (let i = 0; i < t.length; i++) {
            const currentItem = t[i];

            tMap.set(currentItem, tMap.get(currentItem) ? tMap.get(currentItem) + 1 : 1);
        }


        for (const [key, value] of sMap) {
            if(value !== tMap.get(key)) {
                return false;
            }
        }

        for (const [key, value] of tMap) {
            if(value !== sMap.get(key)) {
                return false;
            }
        }

        return true;

    }
}
