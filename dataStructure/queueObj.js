const queue = {
    front: null,
    rear: null,
    size: 0,
};

const node = {
    value: "",
    next: null,
};

function enQueue(value) {
    const temp = { ...node };
    temp.value = value;
    if (queue.size === 0) {
        queue.front = temp;
    } else {
        queue.rear.next = temp;
    }
    queue.rear = temp;
    queue.size++;
}
function deQueue() {
    if (!queue.front) throw new Error("queue not exist..😑");
    if (queue.front.value === queue.rear.value) {
        queue.rear = null;
    }
    const next = queue.front.next;
    queue.size--;
}

enQueue("hello1");
enQueue("hello2");
enQueue("hello3");
enQueue("hello4");
console.log(queue);
console.log(queue.front.next);
