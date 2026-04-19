class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const currentItem = board[r][c];
                if (currentItem === ".") continue;

                const boxKey = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;

                if (!boxes[boxKey]) {
                    boxes[boxKey] = new Set();
                }

                if (
                    rows[r].has(currentItem) ||
                    cols[c].has(currentItem) ||
                    boxes[boxKey].has(currentItem)
                ) {
                    return false;
                }
                rows[r].add(currentItem);
                cols[c].add(currentItem);
                boxes[boxKey].add(currentItem);
            }
        }
        return true;
    }
}
