// miniprogram/pages/msgCheck/msgCheck.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  msgCheck() {
    wx.cloud.callFunction({
      name:'msgCheck',
      data:{
        text:'完2347全dfji试3726测asad感3847知qwez到',
        a:1,
        b:2
      }
    })
    .then(res => {
      console.log(res);
    })
  }
})