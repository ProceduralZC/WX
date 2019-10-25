//index.js
import net from '../../utils/util.js';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    page: 0,
    totalPages: 0,
    projects: [
      {
      _id: 1,
        title: "小程序已成为微信生态内的红利聚集地小程序已成为微信生态内的红利聚集地,各种场景核心功能,一键生成小程序,提前布局微信新生态,抢占第一波红利.",
      },
      {
        _id: 1,
        title: "小程序已成为微信生态内的红利聚集地小程序已成为微信生态内的红利聚集地各种场景核心功能,一键生成小程序,提前布局微信新生态,抢占第一波红利.",
      },
      {
        _id: 1,
        title: "小程序已成为微信生态内的红利聚集地小程序已成为微信生态内的红利聚集地各种场景核心功能,一键生成小程序,提前布局微信新生态,抢占第一波红利.",
      },
      {
        _id: 1,
        title: "小程序已成为微信生态内的红利聚集地小程序已成为微信生态内的红利聚集地各种场景核心功能,一键生成小程序,提前布局微信新生态,抢占第一波红利.",
      },
      {
        _id: 1,
        title: "小程序已成为微信生态内的红利聚集地小程序已成为微信生态内的红利聚集地各种场景核心功能,一键生成小程序,提前布局微信新生态,抢占第一波红利.",
      },
      {
        _id: 1,
        title: "小程序已成为微信生态内的红利聚集地小程序已成为微信生态内的红利聚集地各种场景核心功能,一键生成小程序,提前布局微信新生态,抢占第一波红利.",
      },
      {
        _id: 1,
        title: "小程序已成为微信生态内的红利聚集地小程序已成为微信生态内的红利聚集地各种场景核心功能,一键生成小程序,提前布局微信新生态,抢占第一波红利.",
      }
    ]
  },

  loadData: function () {
    this.data.page = 0;
    // this.fetchData().then(res => {
      wx.stopPullDownRefresh()
    // })

    // wx.hideLoading()
  },

  loadMoreData: function () {
    this.data.page = this.data.page + 1;
    return this.fetchData()
  },

  fetchData: function () {
    let _this = this
    _this.setData({
      projects: _this.data.projects,
    })

    wx.hideLoading()
  },

  toProjectDetailPage: function (e) {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.startPullDownRefresh({})
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.loadData()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showLoading({
      title: '加载中',
    })
    this.loadData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let refreshFooter = this.selectComponent('#refreshFooter');
    if (this.data.page + 1 == this.data.totalPages) {
      refreshFooter.updateUI(2)
    } else {
      refreshFooter.updateUI(1)
      this.loadMoreData().then(res => {
        refreshFooter.updateUI(2)
      })
    }
  },
})
