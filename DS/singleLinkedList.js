class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  insert(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length = this.length + 1;
  }
  print() {
    let list = [];
    let node;
    // for (let index = 1; index < this.length; index++) {
    //   if (!node) {
    //     node = this.head;
    //   } else {
    //     node = node.next;
    //   }
    //   list.push(node);
    // }
    console.log(this.head);
  }

  // prev=null
  // head->
  // node
  // tail
  reverse() {
    console.log("reversing");

    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let prev = null;
    let next = current.next;
    for (let index = 0; index < this.length; index++) {
      next = current.next;
      current.next = prev;
      console.log({ next, current });
      prev = current;
      current = next;
    }
  }
}

const myList = new List();
myList.insert(1);
myList.insert(2);
myList.insert(3);
myList.print();
myList.reverse();
myList.print();
