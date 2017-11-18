// nearby.js
// 获取应用实例
var app = getApp()
const sliderWidth = 96      //需要设置slider的宽度，用于计算中间位置
var base64 = require('../../images/base64')

Page({
    data: {
        tabs: ['全部', '洗车', '吸尘'],
        activeIndex: 1,
        sliderOffset: 0,
        sliderLeft: 0,
        inputShowed: false,
        inputVal: ''
    },
    onLoad: function() {
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    sliderLeft: (res.windowWidth / this.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / this.data.tabs.length * this.data.activeIndex
                })
            }
        })

        //init icon
        this.setData({
            icon20: base64.icon20,
            icon60: base64.icon60
        })
    },
    tabClick: function(e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        })
    },
    showInput: function() {
        this.setData({
            inputShowed: true
        })
    },
    hideInput: function() {
        this.setData({
            inputVal: '',
            inputShowed: false
        })
    },
    clearInput: function() {
        this.setData({
            inputVal: ''
        })
    },
    inputTyping: function(e) {
        this.setData({
            inputVal: e.detail.value
        })
    }
})