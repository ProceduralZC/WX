// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
  *  url:http://dev.mymax.cn/craftsmen/api/player/uploadHeadImg
     methods:POST
     params: 
  */
  dateAvatar: function () {
    var that = this;
    try {
      const token = wx.getStorageSync('bus_token')
      if (token) {
        // Do something with return value
        console.debug("token111=" + token)
      }
      wx.chooseImage({
        count: 1,
        success: function (res) {
          var tempFilePaths = res.tempFilePaths
          console.log("tempFilePaths==" + tempFilePaths)
          wx.uploadFile({
            url: util.rootDocment + 'craftsmen/api/player/uploadHeadImg',
            filePath: tempFilePaths[0],
            name: 'file',
            header: {
              'Content-Type': 'application/x-www-form-urlencoded',
              "authorization": token
            },
            formData: {
              'user': ""
            },
            success: function (res) {
              var data = JSON.parse(res.data);
              console.log(data);
              console.log("eeeeee" + data.r.code);
              if (data.r.code == 1) {
                wx.setStorageSync('bus_photo', data.s.url); // 头像
                that.setData({
                  headimage: data.s.url
                })

                util.clearError(that);
              } else {
                util.isError(data.r.desc, that);
              }
            },
            fail: function () {
              util.isError('上传失败', that);
            }
          })
        }
      })
    } catch (e) {
      // Do something when catch error
    }
  },
})