// 有个链表
import LinkedList from './linked_list.js';

const partition = (head, x) => {
  let cur = head,
  next,
  preHead,//小于的链
  preTail,
  afterHead,//大于或等于的链
  afterTail;

  if (head === null) {
    return null;
  }
  while (cur) {
    //相应节点进入对应链表
    next = cur.next;
    cur.next = null;//断掉之前的关系
    if (cur.val < x) {
      // 小于链上
      if (!preHead) {//空
        preHead = cur;
        preTail = cur;
      }else {
        preTail.next = cur;
        preTail = cur;
      }
    }else {
      if (!afterHead) {
        afterHead = cur;
        afterTail = cur;
      }else {
        afterTail.next = cur;
        afterTail = cur;
      }
    }
    cur = next;
  }
  if (preTail) {
    preTail.next = afterHead;
    return preHead;
  }else {
    return afterHead;
  }
}

// 链表里有head属性 tail 

const linkedList = new LinkedList();
linkedList.append(1).append(4).append(3).append(2).append(5).append(2)
console.log(linkedList.toString());

const newHead = partition(linkedList.head, 3);
let currentNode = newHead;
while(currentNode) {
  console.log(currentNode.val);
  currentNode = currentNode.next;
}