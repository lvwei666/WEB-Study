function TreeNodes(val) {
  this.val = val;
  this.left = this.right = null;
}
let a1 = new TreeNodes(1);
let a2 = new TreeNodes(2);
let a3 = new TreeNodes(3);
a1.right = a2;
a2.left = a3;
// 二叉树的中序遍历
function inorderTraversal(root) {
  const items = [];
  const stack = [];
  if (!root) return [];
  while (stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left
    } else {
      root = stack.pop();
      items.push(root.val);
      root = root.right;
    }
  }
  return items;
}

var inorderTree = (root) => {
  var stack = [], //堆栈
  result = [], //解脱 左边出来了
  cur; //当前的
  cur = root;
  // 未处理
  while (stack.length > 0 || cur !== null) {
    // 结点不为空
    if (cur !== null) {
      stack.push(cur);
      cur = cur.left; //null 叶子
    } else {
      cur = stack.pop(); //第一次是不是最左边的叶子
      result.push(cur.val);
      cur = cur.right;
    }
  }
  return result;
}
console.log(inorderTraversal(a1));
console.log(inorderTree(a1));