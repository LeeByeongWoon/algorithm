export class Queue {
    constructor(storage = {}, front = 0, rear = 0) {
        this.storage = storage;
        this.front = front;
        this.rear = rear;
    }
    size() {
        if (this.storage[this.rear] === undefined) {
            return 0;
        } else {
            return this.rear - this.front + 1;
        }
    }
    add(value) {
        if (this.size() === 0) {
            this.storage[0] = value;
        } else {
            this.rear += 1;
            this.storage[this.rear] = value;
        }
    }
    pop() {
        let temp;
        if (this.rear !== 0) {
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.front === this.rear ? ((this.front = 0), (this.rear = 0)) : (this.front += 1);
        } else {
            return "empty queue";
        }
        return temp;
    }
}
