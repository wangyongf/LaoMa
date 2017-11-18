//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  // 登录并保存用户相关信息
  login: (globalData) => {
    var user = wx.getStorageSync('user') || {}
    var userInfo = wx.getStorageSync('userInfo') || {}
    if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
      wx.login({
        success: (res) => {
          if (res.code) {
            wx.getUserInfo({
              success: (res) => {
                var objz = {}
                objz.avatarUrl = res.userInfo.avatarUrl;
                objz.nickName = res.userInfo.nickName;
                console.log(objz)
                wx.setStorageSync('userInfo', objz)  //存储userInfo 
              }
            })

            var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' +
              globalData.appid + '&secret=' + globalData.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
            wx.request({
              url: url,
              data: {},
              method: 'GET',
              header: {},     //设置请求的的header请求头
              success: (res) => {
                var obj = {}
                obj.openid = res.data.openid
                obj.expires_in = Date.now() + res.data.expires_in;
                // console.log(obj)
                wx.setStorageSync('user', obj)   //存储openid
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      })
    }
  }
})
