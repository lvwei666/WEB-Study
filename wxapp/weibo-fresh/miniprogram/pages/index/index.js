// miniprogram/pages/index/index.js
import {formatTime} from '../../utils/api.js'
// const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainNewsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.cloud.callFunction({
      name:'mainNewsGet',
      // data里面存放的数据可以传给云函数的event 效果：event.a = 1
      data:{
        a:1
      }
    }).then(res => {
      that.setData({
        mainNewsList:res.result
      })
      let mainNewsList = that.data.mainNewsList
      for(let i = 0; i < mainNewsList.length; i ++){
        let time = formatTime(mainNewsList[i].time)
        // let str = 'mainNewsList[' + i + ']'.time
        let str = `mainNewsList[${i}].time`
        that.setData({
          [str]:time
        })
      }
    }).catch(err => {
      console.log(err);
    })

    // db.collection('fresh-mainNews').get({
    //   success:res => {
    //     console.log(res);
    //     this.setData({
    //       mainNewsList:res.data
    //     })
    //   }
    // })
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