// how to visit every node in a tree

/* BFS: breadth first search
level by level from top to bottom
        10  

*/

/*
    DFS: depth first search
        inorder: starting at the bottom left
        preorder: starting at the root
        postorder: from levels, starting at the bottom

*/

// BFS

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySeachTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    let current = this.root;
    if (!current) {
      this.root = node;
      return;
    }
    while (true) {
      if (value === current.value) {
        return;
      }
      if (value > current.value) {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      }
    }
  }
  find(num) {
    let level = 0;
    let current = this.root;
    while (current) {
      if (current.value === num) {
        return `found at level ${level}`;
      }
      if (current.value > num) {
        current = current.left;
      } else {
        current = current.right;
      }
      level++;
    }
    return "not found";
  }
  BFS() {
    let node = this.root;
    const data = [];
    const queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }
  bfs() {
    let current = this.root;
    if (current === null) return [];
    const result = [];
    const queue = [this.root]; // push, shift
    while (queue.length) {
      const node = queue.shift();
      result.push(node.value);
         if (node.left) {
           queue.push(node.left);
         }
      if (node.right) {
        queue.push(node.right);
      }
   
    }
    return result;
  }
  dfsPreOrder(){
/*      10
     6       15
   3   8       20       // [10, 6, 3, 8, 15, 20]
*/      
        const data=[]
        function dfs(root){
                data.push(root.value)
                if(root.left){
                   dfs(root.left)     
                }
                if(root.right){
                   dfs(root.right); 
                }
        }
        dfs(this.root)
        return data
  }
  print() {
    console.log(JSON.stringify({ root: this.root }));
    // console.log(JSON.stringify({root: this.root}, null, 2));
  }
}

const tree = new BinarySeachTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
console.log(tree);
tree.insert(11);
tree.insert(12);
tree.insert(13);
tree.insert(14);
tree.insert(2);
tree.print();
tree.insert(2);
tree.print();
console.log(tree.find(14));
// console.log("BFS:", tree.BFS());
console.log("DFS:", tree.dfsPreOrder());

/*          10
       7         15
     2    9     11
                 12
                   13 
                 */
