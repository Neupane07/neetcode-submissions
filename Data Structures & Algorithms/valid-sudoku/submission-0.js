class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const map = new Map();
        const n = board.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                map.set(`${i}${j}`, board[i][j]);
            }
        }

        // Row
        for (let i = 0; i < n; i++) {
            const columnSet = new Set();
            for (let j = 0; j < n; j++) {
                if (board[i][j] === ".") continue;
                if (columnSet.has(board[i][j])) {
                    return false;
                }
                columnSet.add(board[i][j]);
            }
        }

        // Column
        for (let j = 0; j < n; j++) {
            const columnSet = new Set();
            for (let i = 0; i < n; i++) {
                if (board[i][j] === ".") continue;
                if (columnSet.has(board[i][j])) {
                    return false;
                }
                columnSet.add(board[i][j]);
            }
        }

        const boxes = [];

        // 3X3 Box check
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const currentValue = board[i][j];

                if (currentValue === ".") continue;

                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                let currentBoxSet;
                if (boxes[boxIndex]) {
                    currentBoxSet = boxes[boxIndex];
                } else {
                    boxes[boxIndex] = new Set();
                }
                currentBoxSet = boxes[boxIndex];

                if (currentBoxSet.has(currentValue)) {
                    return false;
                }
                currentBoxSet.add(currentValue);
            }
        }

        return true;
    }
}
