// setting.js
// 获取应用实例
var app = getApp()
var base64 = require('../../images/base64')

Page({
    data: {
        motto: '越努力，越幸运',
        userInfo: {}
    },
    onLoad: function() {
        console.log('onLoad')

        this.setData({
            icon: base64.icon20
        })
    }
})