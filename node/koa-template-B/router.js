/**
 * 管理 router
 */
const Router = require('koa-router');
const router = new Router();

const user = {
  name: '丹丹',
  posts: [
    {
      id: 0,
      title: '小程序踩坑指北'
    },
    {
      id: 1,
      title: 'vue.js 浅析 组件数据传递'
    }
  ]
}
const postsDetail = [
  {
    id: 0,
    content: 'wechat app'
  },
  {
    id: 1,
    content: '<strong>react 表示不服</strong>'
  }
]

router.get('/user', async (ctx) => {
  await ctx.render('user', { user });
})
router.get('/posts', async (ctx) => {
  const { id } = ctx.query; 
  const post = postsDetail.find(postItem => postItem.id == id);
  await ctx.render('post', { post });
})
// 浏览器地址栏 get
router.get('/create', async (ctx) => {
  await ctx.render('create');
})
// submit method='post'
router.post('/create', async (ctx) => {
  console.log(ctx.request.body);
  const {title, content} = ctx.request.body;
  let id = Date.now();
  user.posts.push({
    id,
    title
  })
  postsDetail.push({
    id,
    content
  })
  ctx.redirect('/user');
})

module.exports = router;