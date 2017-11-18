//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '越努力，越幸运',
    userInfo: {},
    view: {
      height: 500
    }
  },
  //事件处理函数
  go2Log: () => {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //显示提示框
  showToast: () => {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  onLoad: function () {
    console.log('onLoad')

    // 校验登录状态
    // wx.checkSession({
    //   success: () => {
    //     wx.showToast({
    //       title: '尚在登录态',
    //       icon: 'success',
    //       duration: 2000
    //     })
    //   },
    //   fail: () => {
    //     wx.showToast({
    //       title: '登陆失效',
    //       icon: 'warn',
    //       duration: 2000
    //     })
    //   },
    //   complete: () => {
    //     // ignore
    //   }
    // })

    // 录音用户授权
    // wx.getSetting({
    //   success: (res) => {
    //     if (!res['scope.record']) {
    //       wx.authorize({
    //         scope: 'scope.record',
    //         success() {
    //           //用户已经同意小程序使用录音功能，后续调用wx.startRecord接口不会弹窗询问
    //           // wx.startRecord()
    //           wx.showToast({
    //             title: '录音授权成功',
    //             icon: 'success',
    //             duration: 1500
    //           })
    //         }
    //       })
    //     } else {
    //       wx.showToast({
    //         title: '录音授权成功',
    //         icon: 'success',
    //         duration: 1500
    //       })
    //     }
    //   }
    // })

    //调用应用实例的方法获取全局数据
    app.getUserInfo((userInfo) => {
      //更新数据
      this.setData({
        userInfo:userInfo
      })
    })
  },
  canvasIdErrorCallback: (e) => {
    console.error(e.detail.errMsg)
  },
  //进入扫码界面
  scanCode: () => {
    wx.scanCode({
      onlyFromCamera: false,
      success: (res) => {
        // 目前是弹框显示扫码的内容
        wx.showModal({
          title: '扫码结果',
          content: 'result: \n' + res.result + '\nscanType: \n' + 
          res.scanType + '\ncharSet: \n' + res.charSet + '\npath: \n' + res.path,
          success: (res) => {
            if (res.confirm) {
              console.log('用户点击确定')
            } else {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  },
  onReady: function(e) {
    //获取屏幕宽高
    wx.getSystemInfo({
      success: (res) => {
        // wx.showToast({
        //   title: '宽度：' + res.windowWidth,
        //   icon: 'success',
        //   duration: 2000
        // })

        this.setData({
          view: {
            height: res.windowHeight
          }
        })

        var centerX = res.windowWidth / 2
        var centerY = res.windowHeight / 2
        
        const context = wx.createCanvasContext('firstCanvas')

        context.setStrokeStyle('#00FF00')
        context.setLineWidth(5)
        // context.rect(centerX - 100, centerY - 100, 200, 200)
        context.stroke()
        context.setStrokeStyle('#FF0000')
        context.setLineWidth(2)
        context.moveTo(centerX + 80, centerY)

        // context.beginPath()
        // context.arc(centerX, centerY, 80, 0, 2 * Math.PI, true)
        // context.setFillStyle('#FFD700')
        // context.fill()
        // context.closePath()

        // context.moveTo(centerX + 40, centerY)
        // context.arc(centerX, centerY, 40, 0, Math.PI, false)
        // context.moveTo(centerX - 15, centerY - 20)
        // context.arc(centerX - 20, centerY - 20, 5, 0, 2 * Math.PI, true)
        // context.moveTo(centerX + 25, centerY - 20)
        // context.arc(centerX + 20, centerY - 20, 5, 0, 2 * Math.PI, true)
        // context.stroke()
        context.draw()
      }
    })
  }
})
