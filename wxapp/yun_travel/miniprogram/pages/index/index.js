//index.js
const app = getApp()

Page({
  startAccounts() {
    wx.showLoading({
      title:'旅程即将开始'
    });
    setTimeout(() => {
      wx.hideLoading();
      wx.navigateTo({
        url:'../accountBooks/accountBooks'
      });
    },600)
  }
})