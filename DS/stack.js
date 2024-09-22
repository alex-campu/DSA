class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const node = new Node(val);
    if (this.last) {
      const prev = this.first;
      this.first = node;
      this.first.next = prev;
    }
    if (!this.first) {
      this.first = node;
      this.last = node;
    }

    this.size = this.size + 1;
    return this.size;
  }
  pop() {
    if (!this.first) return;

    this.first = this.first.next;

    if (this.size === 1) {
      this.last = null;
      this.first = null;
    }

    this.size = this.size - 1;
  }

  print(msg) {
    console.log(msg);
    let current = this.first;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    // console.log(this.first);
  }
}

const stack = new Stack();
stack.push("hola");
stack.push("adios");
stack.print("first");
stack.pop();
stack.print("second");
