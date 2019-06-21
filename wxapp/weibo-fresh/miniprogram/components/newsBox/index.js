// components/newsBox/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:null
    },
    isOld:{
      type:Boolean,
      value:false
    },
    time:{
      type:String,
      value:null
    },
    focusNum:{
      type:Number,
      value:null
    },
    imgUrl:{
      type:Array,
      value:null
    },
    subNews:{
      type:Array,
      value:null
    },
    name:{
      type:String,
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
    goInner() {
      wx.navigateTo({
        url: '../../pages/inner/inner?dataPack=' + JSON.stringify(this.properties),
      })
    }
  }
})
