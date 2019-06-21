// components/speak/speak.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    createTime: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    },
    images: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    like: true,
    num : 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    like() {
      if (this.data.like) {
        this.setData({
          num: this.data.num + 1
        })
      }else {
        this.setData({
          num: this.data.num - 1
        })
      }
      this.setData({
        like: !this.data.like
      })
    },
    previewImage(e) {
      // console.log(e);
      wx.previewImage({
        current: e.currentTarget.id,
        urls: this.properties.images
      })
    }
  }
})
