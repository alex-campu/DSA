class Node {
  constructor(data, firstChild = null, secondChild = null) {
    // this.parent = null;
    this.data = data;
    this.left = firstChild;
    this.right = secondChild;
  }
}

const root = new Node(6);
const node1 = new Node(4);
const node2 = new Node(1);
const node3 = new Node(5);
const node4 = new Node(8);
const node5 = new Node(9);

root.left = node1;
root.right = node4;

node1.left = node2;
node1.right = node3;

node4.right = node5;

console.log({ root });
