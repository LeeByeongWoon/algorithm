// https://overcome-the-limits.tistory.com/14

// function d(data) {
//     if (data === 50) {
//         console.log("stack of callback", data);
//     } else {
//         d(data + 1);
//     }
// }

// d(1);

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export default class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) return null;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }
    clear() {}
}
