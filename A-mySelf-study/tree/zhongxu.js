function TreeNodes(val) {
  this.val = val;
  this.left = this.right = null;
}
let a1 = new TreeNodes(1);
let a2 = new TreeNodes(2);
let a3 = new TreeNodes(3);
a1.right = a2;
a2.left = a3;

function inorderTraversal(root) {
  const items = [];
  const stack = [];
  if (!root) return [];
  while(stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      items.push(root.val);
      root = root.right;
    }
  }
  return items;
}
// 递归
function inorderTraversal2(root) {
  let arr = [];
  const inorder = (root) => {
    if (root === null) return null;
    inorder(root.left);
    arr.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return arr;
}

console.log(inorderTraversal(a1));
console.log(inorderTraversal2(a1));