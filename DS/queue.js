class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    if (!this.first.next) {
      this.last = null;
    }
    const prev = this.first.next;
    this.first = prev;
    return --this.size;
  }
  print() {
    console.log(this.first);
  }
}

const queue = new Queue();
queue.push("pepe");
queue.push("juan");
queue.push("luis");
queue.print();
queue.pop();
queue.pop();
queue.pop();
queue.print();
