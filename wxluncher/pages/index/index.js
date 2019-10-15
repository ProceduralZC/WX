//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "bnrUrl": [{
      "url": "http://pic27.nipic.com/20130321/9678987_225139671149_2.jpg"
    }, {
        "url": "http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg"
    }]
  },

  onLoad: function () {
    //显示小红点
    // wx.showTabBarRedDot({
    //   index: 1
    // })

    //隐藏小红点
    // wx.hideTabBarRedDot({
    //   index: 1
    // })

    //隐藏tabbar
    // wx.hideTabBar({
    //   aniamtion: true
    // })

    //显示tabbar
    // wx.showTabBar({
    //   aniamtion: true
    // })

    //设置样式
    // wx.setTabBarStyle({
    //   color: "#999999",
    //   selectedColor:"#999999",
    //   borderColor:"white"
    // })
      //设置图标和文字
    // wx.setTabBarItem({
    //   index: 1,
    //   text: " "
    // })

    //显示右上角文字
    wx.setTabBarBadge({
      index: 1,
      text: "1"
    })

    //取消右上角文字
    // wx.removeTabBarBadge({
    //   index: 1,
    // })

  } 

})
