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
  insert(value){
    const node=new Node(value)
    let current=this.root
    if(!current){
      this.root=node
      return
    }
    while(true){
      if(value===current.value){
        return 
      }
      if(value > current.value){
        if(!current.right){
          current.right=node
          break
        }
        current=current.right
      } else {
        if(!current.left){
          current.left=node
          break
        }
        current=current.left
      }
    }
  }
  find(num){
    let level=0
    let current=this.root
    while(current){
      if(current.value===num){
        return `found at level ${level}`
      }
      if(current.value > num){
        current=current.left
      } else{
        current=current.right
      }
      level++
    }
    return "not found"
   
  }
  print(){
    console.log(JSON.stringify({root:this.root}))
    // console.log(JSON.stringify({root: this.root}, null, 2));
  }
}

const tree = new BinarySeachTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
console.log(tree);
tree.insert(11)
tree.insert(12)
tree.insert(13)
tree.insert(14)
tree.insert(2)
tree.print()
tree.insert(2)
tree.print()
console.log(tree.find(14))

/*     10
    7    15
      9
*/
