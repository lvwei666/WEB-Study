LRU Least Recently Used

操作系统的内存中
node fs
硬盘    
    内存中 CPU  小 快，N

容量是多少  超过容量后淘汰的机制
最近最少使用

meet 缓存
LRUCache
    2
1   put(1,1) 存入 [下标 值] {key:val}
2   put(2,2)
3   put(3,3)    1先移除，3放进来
4   put(4,4)    2先移除，4放入
5   get(3,3)    
数组 [1,2,3,4] 对象{1:1,2:2,3:3,4:4} O(1)

对象字面量  存取的数据结构
