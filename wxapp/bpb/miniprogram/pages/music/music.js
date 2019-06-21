// miniprogram/pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songLists: [],
  },
  toPlayAudio(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../play/play?id=${id}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '云音乐',
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff9a00',
    })
    wx.showLoading({
      title: '正在加载中',
    })
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/top/list',
      data: {
        idx: 1
      },
      success: res => {
        console.log('热歌', res);
        const songLists = res.data.playlist.tracks;
        this.setData({
          songLists
        });
        wx.hideLoading();
      }
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