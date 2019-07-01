HTTP协议  req   response
状态码：HTTP响应（response）中包含状态码
浏览器  代理  proxy

1xx 请求正在处理，继续等待
2xx 请求已经成功处理掉了        200  OK
3xx 重定向  Location
4xx 用户出现的错误（地址错了）未授权限 受限资源     404 not found
5xx 服务器端出现错误


301 永久跳转，用户  www.xiaomi.com  www.mi.com
告诉蜘蛛
www.xiaomi.com/a.html 红米手机
废弃了，301 www.mi.com/a.html
3xx 区别， 永久跳转，告诉蜘蛛把记录更新掉
301可以在改变状态码，不变，来展示理解
http://localhost:3000  301 永久跳转，
再次访问，浏览器有缓存，不需要再走服务器，

302 临时跳转，不会告知蜘蛛 或在前端缓存

常见状态代码、状态描述、说明：
200 OK      //客户端请求成功
400 Bad Request  //客户端请求有语法错误，不能被服务器所理解
401 Unauthorized //请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用 
403 Forbidden  //服务器收到请求，但是拒绝提供服务
404 Not Found  //请求资源不存在，eg：输入了错误的URL
500 Internal Server Error //服务器发生不可预期的错误
503 Server Unavailable  //服务器当前不能处理客户端的请求，一段时间后可能恢复正常