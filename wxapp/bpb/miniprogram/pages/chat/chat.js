// miniprogram/pages/chat/chat.js
const db = wx.cloud.database()
const dynamic = db.collection('dynamic')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    every: []
  },
  share() {
    wx.navigateTo({
      url: '../share/share',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    wx.setNavigationBarTitle({
      title: '动态',
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#00B26A',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let self = this;
    wx.showLoading({
      title: '正在加载中'
    });
    dynamic.get({
      success(res) {
        let every = res.data.reverse()
        for (let n of every) {
          // n.createTime = JSON.stringify(n.createTime)
          n.createTime = n.createTime.getFullYear() + '-' + (+n.createTime.getMonth() + 1) + '-' + n.createTime.getDate() + ' ' + n.createTime.getHours() + ':' + n.createTime.getMinutes() + ':' + n.createTime.getSeconds();
        }
        self.setData({
          every
        })
      },
      fail(error) {
        console.log(error);
      },
      complete() {
        wx.hideLoading();
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    let self = this;
    dynamic.get({
      success(res) {
        let every = res.data.reverse()
        for (let n of every) {
          // n.createTime = JSON.stringify(n.createTime)
          n.createTime = n.createTime.getFullYear() + '-' + (+n.createTime.getMonth() + 1) + '-' + n.createTime.getDate() + ' ' + n.createTime.getHours() + ':' + n.createTime.getMinutes() + ':' + n.createTime.getSeconds();
        }
        self.setData({
          every
        })
      },
      fail(error) {
        console.log(error);
      },
      complete() {
        wx.stopPullDownRefresh();
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})