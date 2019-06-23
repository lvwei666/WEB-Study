fullstack 全栈
Front Enginner
Backend  /api

restful  api
浏览器与服务器通信方式的一种设计风格

- restful 的世界里，一切皆资源
- url 来唯一定位资源的识别符
  /posts/:id/comments
- 加一条comment 怎么办？ /comments/2
  {
    id: 2
    body: '下雨了',
    postId: 1
  }
  /comments 设计好URL  POST
- 设计有意义的URL
  资源 状态改变
  POST /comments 加一条评论 id: 2
  修改一下内容
  PUT  /comments/2 body: '啦啦啦'

  操作    SQL 方法  HTTP动词
  CREATE INSERT     POST
  READ    SELECT    GET
  UPDATE  UPDATE    PUT/PATCH {body: '', postId: 1}PUT 给全部  PATCH 只要给一部分
  DELETE   DELETE    DELETE

  状态切换，使用定义的谓语动词