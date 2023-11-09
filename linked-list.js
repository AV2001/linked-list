/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        let currentHead = this.head;
        let newNode = new Node(val);

        if (!currentHead) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++;
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        let currentHead = this.head;
        let newHead = new Node(val);

        if (!currentHead) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = currentHead;
            this.head = newHead;
        }

        this.length++;
    }

    /** pop(): return & remove last item. */

    pop() {
        let currentNode = this.head;
        let previousNode = null;

        if (!currentNode) {
            return null;
        } else if (this.head.next === null) {
            const value = this.head.val;
            this.head = null;
            this.tail = null;
            this.length--;
            return value;
        }

        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = null;
        this.tail = previousNode;
        this.length--;
        return currentNode.val;
    }

    /** shift(): return & remove first item. */

    shift() {
        let currentHead = this.head;

        if (!currentHead) {
            return null;
        } else if (this.head.next === null) {
            const value = this.head.val;
            this.head = null;
            this.tail = null;
            this.length--;
            return value;
        }

        let newHead = currentHead.next;
        const value = currentHead.val;
        this.head = newHead;
        this.length--;
        return value;
    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        let currentNode = this.head;
        let count = 0;
        while (currentNode) {
            if (count === idx) {
                return currentNode.val;
            }
            currentNode = currentNode.next;
            count++;
        }

        return null;
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {}

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {}

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {}

    /** average(): return an average of all values in the list */

    average() {}
}

module.exports = LinkedList;
