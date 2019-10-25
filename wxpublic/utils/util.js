/**
 * 基类接口请求方法
 */

const rootDocment = 'http://192.168.1.184:8081/';

const fileurl = rootDocment + 'craftsmen/api/showImage?fileUrl=';

// 修改成你的appid及appsecret
var AppConf = {
  appid: 'wx61f7708fbb157848',
  appsecret: '57556a858121fae443f59863f9cb1cdb',
};


// var cookies = '';

function req(url, data, cb) {
  try {
    const token = wx.getStorageSync('bus_token');
    if (token) {
      // Do something with return value
      console.debug('token111=' + token);
    }

    data.appid = AppConf.appid;
    data.appsecret = AppConf.appsecret;
    wx.request({
      url: rootDocment + url,
      data: data,
      method: 'post',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'cookie': wx.getStorageSync("sessionid"),
        "authorization": token
      },
      success: function (res) {
        var cookie = res.header['Set-Cookie'];
        if (cookie != null) {
          wx.setStorageSync("sessionid", res.header["Set-Cookie"]);
        }
        return typeof cb === 'function' && cb(res.data);
      },
      fail: function (error) {
        console.debug(error);
        return typeof cb === 'function' && cb(false);
      },
    });

  } catch (e) {
    // Do something when catch error
  }
}

function getReq(url, data, cb) {
  try {
    const token = wx.getStorageSync('bus_token');
    if (token) {
      // Do something with return value
      console.debug('token111=' + token);
    }

    // data.appid = AppConf.appid;
    // data.appsecret = AppConf.appsecret;
    wx.request({
      url: rootDocment + url,
      data: data,
      method: 'get',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'authorization': token,
      },
      success: function (res) {
        return typeof cb === 'function' && cb(res.data);
      },
      fail: function () {
        return typeof cb === 'function' && cb(false);
      },
    });
  } catch (e) {
    // Do something when catch error
  }
}

// 去前后空格
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
}

// 提示错误信息
function isError(msg, that) {
  that.setData({
    showTopTips: true,
    errorMsg: msg,
  });
}

// 清空错误信息
function clearError(that) {
  that.setData({
    showTopTips: false,
    errorMsg: '',
  });
}







module.exports = {
  req: req,
  trim: trim,
  isError: isError,
  clearError: clearError,
  getReq: getReq,
  rootDocment: rootDocment,
  fileurl: fileurl,
};