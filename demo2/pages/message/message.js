// pages/msg/index.js
var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    isHideLoadMore: true,
    isHideNoMore: true,
    isClear: true, //用来判断是否清除原列表数组数据，刷新要清空数组数据，上拉加载不需要清空数组而是page++之后访问到的数组concat进原数组
    pageNum: 0,
    totalPage: 0,
    list: [],
  },

  //点击每一行进入详情，带入数据 name
  onlineClick: function (e) {
    var that = this;
    //获取下标
    var index = e.currentTarget.dataset.id;
    console.log(index)
    var name = this.data.list[index].name;
      wx.navigateTo({
        url: 'detail/msgadetail?con=' + name
      })
  },
  /**
  * 访问请求搜索接口
  */
  requestData: function () {
    let that = this
    let param = {
      "size":10,
      "page":1
    }
    util.getReq('https://api.apiopen.top/musicBroadcasting', param, function (res) {
      console.debug(res);
      wx.hideLoading()
      if (res.code == 200) {
        if (null != res.result[0].channellist && res.result[0].channellist != "") {
            that.setData({
              list: res.result[0].channellist,
              totalPage: 1,
            })
          } else {
            that.setData({
              isHideNoMore: false
            })
          }

      } else {
        
      }
    })
  },
  onLoad: function (options) {
    let that = this
    //判断双击点击时间点
    that.setData({
      pageNum: 0,
      isHideNoMore: true,
      isClear: true,
    })

    wx.showLoading({
      title: '加载中',
    })

    that.requestData()
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    let that = this;
  },

  /**
* 页面相关事件处理函数--监听用户下拉动作
*/
  onPullDownRefresh: function () {
    let that = this;
    that.setData({
      loadingimg: false,
      isHideNoMore: true,
      pageNum: 0,
      isClear: true
    })

    wx.showLoading({
      title: '加载中',
    })

    that.requestData()

    setTimeout(function () {
      wx.stopPullDownRefresh()
      that.setData({
        loadingimg: true
      })
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let that = this;

    that.setData({
      isHideLoadMore: false,
      isHideNoMore: true,
      isClear: false,
    })

    if (that.data.pageNum >= that.data.totalPage) {
      setTimeout(() => {
        this.setData({
          isHideLoadMore: true,
          isHideNoMore: false,
        })
      }, 0)
      return;
    }

    that.data.pageNum++;
    that.requestData();

    setTimeout(() => {
      this.setData({
        isHideLoadMore: true,
      })
    }, 2000)
  },
 
  updateisread: function (msgid, index) {
    var that = this;
    console.log("0000000000000000000")
    that.setData({
      ['list[' + index + '].isRead']: "1"
    })
  },
})