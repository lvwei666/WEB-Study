// miniprogram/pages/add/add.js
// 连上数据库
const db = wx.cloud.database();
// 找到userInfo表
const userInfo = db.collection('userInfo');
const photos = db.collection('photos');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  upload:function(event) {
    wx.chooseImage({
      count: 4,	// 默认为9
      sizeType: ['original', 'compressed'],	// 指定原图或者压缩图
      sourceType: ['album', 'camera'],	// 指定图片来源
      success: res => {
        console.log(res);
        var tempFilePaths = res.tempFilePaths;
        for(var i = 0;i < tempFilePaths.length;i++){
          let randString = Math.floor(Math.random() * 1000000).toString() + '.png';
          wx.cloud.uploadFile({
            cloudPath:randString,
            filePath:tempFilePaths[i],
            success:res => {
              console.log(res.fileID);
              photos.add({
                data:{
                  image:res.fileID
                }
              }).then(res => {
                wx.showToast({
                  title:'上传成功',
                  icon:'success'
                })
              })
            }
          })
        }
      }
    })
  }
})