// virtual DOM
function diff(oldTree, newTree) {
  let patches = {};
  let index = 0; //第几个结点的改变
  // 递归遍历树
  walk(oldTree, newTree, index, patches);
  return patches;
}
function walk (oldNode, newNode, index, patches) {
  // props, children
  let current = []; //补丁的数组
  if (!newNode) {
    current.push({type: 'REMOVE', index });
  } else if (isString(newNode)) {
    // 文本节点
    if (oldNode !== newNode) {
      current.push({ type: 'TEXT', text: newNode });
    }
  } else if (oldNode.type === newNode.type) {
    // 属性，子节点
    let attr = diffAttr(oldNode.props, newNode.props);
    if (Object.keys(attr).length > 0) {
      current.push({ type: 'ATTR', attr })
    }
    // walk
    diffChildren(oldNode.children, newNode.children, patches);
  } else {
    // 节点 type不一样
    current.push({type: 'REPLACE', newNode});
  }
  if (current.length) {
    patches[index] = current
  }
} 

function isString(obj) {
  return typeof obj === 'string';
}
function diffAttr(oldAttrs, newAttrs) {
  let patch = {};
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key];
    }
  }
  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key];
    }
  }
  return patch;
}

function diffChildren(oldChildren, newChildren, patches) {
  oldChildren.forEach((child, index) => {
    walk(child, newChildren[index], ++num, patches)
  })
}

function doPatch(node, patches) {
  
}
export default diff;