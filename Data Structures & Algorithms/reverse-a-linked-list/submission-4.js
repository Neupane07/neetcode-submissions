/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // { val: 0, next: {val:1, next: {}}}
        //  0 -> 1 -> 2 -> 3 -> null
        //  c

        let prev = null;
        let curr = head;

        while(curr) {
            const next = curr.next;

            curr.next = prev;
            prev = curr;
            curr = next;

        }

        return prev;
    }
}
