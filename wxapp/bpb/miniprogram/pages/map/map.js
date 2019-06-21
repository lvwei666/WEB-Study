// miniprogram/pages/map/map.js
var point = [],
  cal, time = new Date(0, 0);
  let cur = 0;
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
    hover: false,
    switch: true,
    time: '00:00:00',
    sum: app.globalData.sum,
    scale: "18",
    latitude: 39.908860,
    longitude: 116.397390,
    polyline: [],
    markers: [],
  },
  stopReal() {
    this.setData({
      hover: true
    })
  },
  cancel() {
    this.setData({
      hover: false
    })
  },
  endReal() {
    this.stop();
    this.setData({
      hover: false,
      hidden: true
    })
  },
  // 获取经纬度
  getLocation() {
    var latitude1, longitude1;
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        latitude1 = res.latitude;
        longitude1 = res.longitude;
        this.setData({
          latitude: latitude1,
          longitude: longitude1
        })
        point.push({
          latitude: latitude1,
          longitude: longitude1
        });
        console.log(point);
      }
    })
  },
  // 画线
  drawLine() {
    this.setData({
      polyline: [{
        points: point,
        color: "#1298db",
        width: 4
      }]
    })
  },
  // 进行经纬度转换为距离的计算
  rad(d) {
    // 经纬度转换成三角函数中度分表形式
    return d * Math.PI / 180.0;
  },
  // 计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
  getDistance(lat1, lng1, lat2, lng2) {
    let that = this;
    var radLat1 = that.rad(lat1);
    var radLat2 = that.rad(lat2);
    var a = radLat1 - radLat2;
    var b = that.rad(lng1) - that.rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    // 地球半径
    s = s * 6378.137;
    // 输出为公里
    s = Math.round(s * 10000) / 10000;
    // s = s.toFixed(2);
    return s;
  },
  format(str) {
    str = '' + str;
    return str.length === 1 ? `0.0${str}` : str;
  },
  format1(str) {
    str = '' + str;
    return str.length === 1 ? `0${str}` : str;
  },
  countTime() {
    this.tim = setInterval(() => {
      cur++;
      time.setMinutes(cur / 60);
      time.setSeconds(cur % 60);
      this.setData({
        time: '00:' + this.format1(time.getMinutes()) + ':' + this.format1(time.getSeconds())
      })
    }, 1000)
  },
  start() {
    let that = this;
    this.timer = setInterval(repeat, 1000);
    function repeat() {
      console.log('re');
      that.getLocation();
      that.drawLine();
    }
    cal = setInterval(() => {
      let dis, sum = 0;
      for (let i = 0; i < point.length - 1; i++) {
        dis = that.getDistance(point[i].latitude, point[i].longitude, point[i + 1].latitude, point[i + 1].longitude);
        sum += (+dis);
      }
      that.setData({
        sum: that.format(sum.toFixed(2))
      })
      console.log(sum);
    }, 3000)
    that.countTime();
    that.setData({
      switch: !this.data.switch
    })
  },
  end() {
    console.log("clear");
    clearInterval(this.timer);
    clearInterval(cal);
    clearInterval(this.tim);
    this.setData({
      switch: !this.data.switch
    })
  },
  stop() {
    let markers1 = [];
    let marker1 = {
      iconPath: "../../images/terminal.png",
      id: 1,
      width: 40,
      height: 40
    };
    clearInterval(this.timer);
    clearInterval(cal);
    clearInterval(this.tim);
    marker1.latitude = point[point.length - 1].latitude;
    marker1.longitude = point[point.length - 1].longitude;
    markers1.push(marker1);
    this.setData({
      markers: this.data.markers.concat(markers1)
    })
    app.globalData.sum = this.data.sum;
    // console.log(app.globalData.sum)
    point = [];
    cur = 0;
    // wx.navigateBack();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let markers = [];
    let marker = {
      iconPath: "../../images/baseline.png",
      id: 0,
      width: 40,
      height: 40
    };
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log(res)
        marker.latitude = res.latitude;
        marker.longitude = res.longitude;
        markers.push(marker)
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers
        })      
      },
      fail: (error) => {
        console.log(error);
        wx.showToast({
          title: '获取地理位置失败',
          icon: 'none'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.mapCtx = wx.createMapContext('myMap');
    this.start();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})