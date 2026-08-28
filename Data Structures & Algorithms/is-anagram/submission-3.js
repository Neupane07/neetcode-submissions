class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const sMap = new Map();
        const tMap = new Map();

        // store count of each 
        for (let i = 0; i < s.length; i++) {
            const existingCount = sMap.get(s[i]) ? sMap.get(s[i]) : 0;
            sMap.set(s[i], existingCount + 1);
        }

        for (let i = 0; i < t.length; i++) {
            const existingCount = tMap.get(t[i]) ? tMap.get(t[i]) : 0;
            tMap.set(t[i],  existingCount + 1);
        }

        for (const [key, val] of sMap) {
            if (tMap.get(key) !== val) {
                return false;
            }
        }
        return true;

    }
}
