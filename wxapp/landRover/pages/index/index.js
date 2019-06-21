//index.js
//获取应用实例
const app = getApp();
const db = require('../../assets/db.js');
const {handleTestDrive} = require('../../utils/util.js')

Page({
  data: {
    slides:db.slides
  },
  handleTestDrive,
  handleMoreInfo(event) {
    const id = event.target.dataset.id;
    wx.navigateTo({
      url:'/pages/vehicles/index?id=' + id
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
