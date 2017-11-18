// index.js
// 获取应用实例
var app = getApp()
Page({
    data: {
        motto: '越努力，越幸运',
        userInfo: {}
    },
    // 显示吐司
    showToast: () => {
        wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
        })
    },
    onLoad: () => {
        console.log('onLoad')
    }
})