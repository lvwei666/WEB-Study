function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let a1 = new TreeNode(3);
let a2 = new TreeNode(9);
let a3 = new TreeNode(20);
let a4 = new TreeNode(15);
let a5 = new TreeNode(7);
a1.left = a2;
a1.right = a3;
a3.left = a4;
a3.right = a5;

function levelOrderTraversal(root) {
  if (!root) return [];
  const items =[];
  const queue = [root, null];
  let levelNodes = [];
  while(queue.length > 0) {
    const t = queue.shift();
    if (t) {
      levelNodes.push(t.val);
      if (t.left) {
        queue.push(t.left);
      }
      if (t.right) {
        queue.push(t.right);
      }
    } else {
      items.push(levelNodes);
      levelNodes = [];

      if (queue.length > 0) {
        queue.push(null);
      }
    }
  }
  return items;
}

console.log(levelOrderTraversal(a1));