Page({
  data:{
    hasUserInfo:false,
    userInfo:{},
    todos:[],
    addShow:false,
    addText:'',
    focus:false,
    status:1
  },
  showStatus:function(e) {
    var status = e.currentTarget.dataset.status;
    if(status === this.data.stauts){
      return;
    }
    this.setData({
      status
    })
  },
  setInput:function(e) {
    console.log(e);
    this.setData({
      addText:e.detail.value
    })
  },
  addTodo:function() {
    // 1.检测有没有输入
    if(!this.data.addText.trim()){
      wx.showToast({
        title:'请输入todo',
        duration:1000,
        icon:'none'
      })
      return;
    }
    // 2.todos push
    // let todos = this.data.todos;
    // todos.push({
    //   title:this.data.addText,
    //   id:new Data().getTime(),
    //   status:0
    // })
    this.setData({
      todos: [
        {
          title: this.data.addText,
          id: new Date().getTime(),
          status: 0
        },
        ...this.data.todos
      ],
      addShow: false,
      addText: ''
    })
    // 3.关闭表单
  },
  addTodoShow:function() {
    this.setData({
      addShow: true,
      focus:true
    })
  },
  addTodoHide:function() {
    this.setData({
      addShow:false,
      focus:false
    })
  },
  getUserInfo:function(e) {
    console.log(e);
    this.setData({
      userInfo:e.detail.userInfo,
      hasUserInfo:true
    })
  }
})