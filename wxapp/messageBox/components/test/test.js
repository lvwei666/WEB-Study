// components/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    text: '这是初始文字'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick: function(e) {
      this.setData({
        text: '点击了'
      })
      this.triggerEvent('onTextChange')
    },
    setText:function(text) {
      this.setData({
        text:text
      })
    }
  }
})
