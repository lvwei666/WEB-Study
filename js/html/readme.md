## crossorigin
link img script
代表要和后端协商跨域
1. anonymous
  在请求头中加上 Origin 属性
  如果后端未设置 Access-Control-Allow-Origin
  图片就会出错,
  script 标签中，如果没有设置 CORS，跨域 js 发生错误，
  将会向 window.onerror 提供很少的信息，通过crossorigin可以得到详细的信息
2. use-credentials
  请求时候带上 cookie

## image 标签
1. 通过图片 src 上报日志，不浪费 ajax 资源，
  204 NO Content,只需要知道返回之后成功，省掉多余的数据传输。

## localStorage
同一个域名共享 localStorage 有大小限制，
扩容。
h5.u51.com/