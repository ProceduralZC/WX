// pages/refreshFooter/refreshFooter.js
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
    refreshState: 0,// 0 闲置状态 1 正在刷新中的状态 2 没有更多的数据了
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateUI: function (refreshState) {
      this.setData({
        refreshState: refreshState
      })
    },
  }
})