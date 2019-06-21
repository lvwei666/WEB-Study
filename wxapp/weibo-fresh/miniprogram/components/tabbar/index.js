// components/tabbar/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isIndex:{ //是否是首页
      type:Boolean,
      value:false
    },
    isInner:{ 
      type:Boolean,
      value:false
    },
    mainTitle:{
      type:String,
      value:''
    },
    mainImg:{
      type:String,
      value:''
    },
    mainFocus:{
      type:Number,
      value:null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    shareIsOpen:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goHome(e) {
      if(!e.currentTarget.dataset.hi){
        wx.redirectTo({
          url: '/pages/index/index'
        })
      }
    },
    goInfo(e) {
      if(e.currentTarget.dataset.hi) {
        wx.redirectTo({
          url:'/pages/info/info'
        })
      }else if(e.currentTarget.dataset.in) {
        wx.navigateTo({
          url: '/pages/info/info'
        })
      }
    },
    openShare() {
      let shareIsOpen = !shareIsOpen;
      this.setData({
        shareIsOpen
      })
    }
  }
})
