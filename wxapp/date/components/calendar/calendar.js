// components/calendar/calendar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lastMonth: {
      type: String,
      value: '<'
    },
    nextMonth: {
      type: String,
      value: '>'
    },
    weekText: {
      type: Array,
      value: ['周日','周一','周二','周三','周四','周五','周六']
    }
  },
  ready() {
    this.today()
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '',
    // 上个月的格子
    emptyGridsBefore: [],
    // 下个月格子
    emptyGridsAfter: [],
    // 这个月的格子
    thisMonthDays: [],
    //格式化日期的
    format: '',
    year: 0,
    month: 0,
    date: 0,
    // 常量 用于匹配是否为当天
    YEAR: 0,
    MONTH: 0,
    DATE: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    today() {
      let DATE = this.data.defaultValue ? new Date(this.data.defaultValue) : new Date(),
      year = DATE.getFullYear(),
      month = DATE.getMonth(),
      date = DATE.getDate(),
      select = year + '-' + this.zero(month) + '-' + this.zero(date)

      this.setData({
        format: select,
        select: select,
        year: year,
        month: month,
        date: date,
        YEAR: year,
        MONTH: month,
        DATE: date
      })

      // 初始化日历组件
      this.display(year, month, date)

      //发送事件监听
      this.triggerEvent('select', select)
    },
    zero(i) {
      return i >= 10 ? i : '0' + i;
    },
    display(year, month, date) {
      this.setData({
        year,
        month,
        date,
        title: year + '年' + this.zero(month) + '月'
      })
      this.createDays(year, month)
      this.createEmptyGrids(year, month)
    },
    createDays(year, month) {
      let thisMonthDays = [],
          days = this.getThisMonthDays(year, month)
      for (let i = 1; i <= days; i++) {
        thisMonthDays.push({
          date: i,
          dateFormat: this.zero(i),
          monthFormat: this.zero(month),
          week: this.data.weekText[new Date(Date.UTC(year, month - 1, i)).getDay()]
        })
      }
      this.setData({
        thisMonthDays
      })
    },
    // 获取当月天数
    getThisMonthDays(year, month) {
      return new Date(year, month, 0).getDate()
    },
    select(e) {
      let date = e.currentTarget.dataset.date,
          select = this.data.year + '-' + this.zero(this.data.month) + '-' + this.zero(date)
      this.setData({
        title: this.data.year + '年' + this.zero(this.data.month) + '月' + this.zero(date) + '日',
        select: select,
        year: this.data.year,
        month: this.data.month,
        date: date
      })
      //发送事件监听
      this.triggerEvent('select', select)
    },
    lastMonth() {
      let month = this.data.month == 1 ? 12 : this.data.month - 1;
      let year = this.data.month == 1 ? this.data.year - 1 : this.data.year;
      this.display(year, month, 0)
    },
    nextMonth() {
      let month = this.data.month == 12 ? 1 : this.data.month + 1;
      let year = this.data.month == 12 ? this.data.year + 1 : this.data.year;
      this.display(year, month, 0)
    },
    // 获取当月空出的天数
    createEmptyGrids(year, month) {
      let week = new Date(Date.UTC(year, month - 1, 1)).getDay(),
          emptyGridsBefore = [],
          emptyGridsAfter = [],
          emptyDays = (week == 0 ? 7 : week)
      // 当月天数
      let thisMonthDays = this.getThisMonthDays(year, month)
      // 上月天数
      let preMonthDays = month - 1 < 0 ? 
      this.getThisMonthDays(year - 1, 12) :
      this.getThisMonthDays(year, month - 1);

      // 空出的日期
      for (let i = 1; i <= emptyDays; i++) {
        emptyGridsBefore.push(preMonthDays - (emptyDays - i))
      }

      let after = (42 - thisMonthDays - emptyDays) - 7 >= 0 
                  ? (42 - thisMonthDays - emptyDays) - 7
                  : (42 - thisMonthDays - emptyDays)

      for (let i = 1; i <= after; i++) {
        emptyGridsAfter.push(i)
      }
      this.setData({
        emptyGridsAfter,
        emptyGridsBefore
      })
    }
  }
})