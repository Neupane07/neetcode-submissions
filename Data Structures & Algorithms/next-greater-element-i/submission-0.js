class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {

        const result = [];
        const map = new Map();

        // keep top element, compare if larger pop till largest found, if not found put current element to stack top and add -1 to it
        // If larger found just add to result[i]
        const helperStack = [];


        for (let i = nums2.length - 1; i >= 0; i--) {
            const curr = nums2[i];
            if (helperStack.length === 0) {
                map.set(curr, -1)
                helperStack.push(curr);
                continue;
            }

            if (helperStack.at(-1) > curr) {
                map.set(curr, helperStack.at(-1))
                helperStack.push(curr);
                continue;
            }

            while(helperStack.at(-1) <= curr && helperStack.length !== 0) {
                helperStack.pop();
            }


            if (helperStack.length === 0) {
                map.set(curr, -1)
            } else {
                map.set(curr, helperStack.at(-1))
            }

            helperStack.push(curr);

        }

        for (let i = 0; i < nums1.length; i++) {
            const curr = nums1[i];
            result[i] = map.get(curr);
        }



        return result;
    }
}
