class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let currentMin;
        if (this.stack.length  === 0) {
            currentMin = val;
        } else {
            currentMin = Math.min(this.stack.at(-1)[1], val);
        }

        this.stack.push([val, currentMin]);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1)[0];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack.at(-1)[1];
    }
}
